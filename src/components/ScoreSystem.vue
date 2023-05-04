<template>
  <li v-for="(product, index) in firebaseProduct.product" :key="index">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.score }}</p>
  </li>
</template>


<script setup>
import { onMounted } from 'vue';

import { useFirebaseProduct } from '@/stores/products';

const firebaseProduct = useFirebaseProduct();

const getProductFromLocalStorage = () => {
  const product = localStorage.getItem('product');
  return product ? JSON.parse(product) : null;
};

const userSelections = getProductFromLocalStorage() || {
  LevelOfAutomation: '',
  LevelOfDetail: 0,
  SizeOfBatch: 0,
  SizeOfProduct: 0,
  TypeOfMaterial: '',
  TypeOfProcess: '',
  TypeOfRobot: ''
};

const calculateScore = (product, userSelections) => {
  let score = 0;
  if (product.typeOfRobot === userSelections.TypeOfRobot) {
    score += 1;
  }
  if (product.typeOfMaterial === userSelections.TypeOfMaterial) {
    score += 1;
  }
  if (product.typeOfProcess === userSelections.TypeOfProcess) {
    score += 1;
  }
  score += (5 - Math.abs(product.levelOfDetail - userSelections.LevelOfDetail));
  score += (5 - Math.abs(product.sizeOfProduct - userSelections.SizeOfProduct));
  score += (5 - Math.abs(product.sizeOfBatch - userSelections.SizeOfBatch));

  if (product.levelOfAutomation === userSelections.LevelOfAutomation) {
    score += 1;
  }

  return score;
};


const product1 = {
  TypeOfRobot: 'Nachi',
  TypeOfMaterial: 'Wood',
  TypeOfProcess: 'Sanding',
  LevelOfDetail: 2,
  SizeOfProduct: 3,
  SizeOfBatch: 1,
  LevelOfAutomation: '50%'
};
const product2 = {
  TypeOfRobot: 'Universal Robots',
  TypeOfMaterial: 'Metal',
  TypeOfProcess: 'Painting',
  LevelOfDetail: 1,
  SizeOfProduct: 5,
  SizeOfBatch: 4,
  LevelOfAutomation: '25%'
};

const updateScores = () => {
  console.log(calculateScore(firebaseProduct.product[0], userSelections));
  console.log(calculateScore(firebaseProduct.product[1], userSelections));
  console.log(calculateScore(firebaseProduct.product[2], userSelections));
};

onMounted(async () => {
  await firebaseProduct.fetchProduct();
  updateScores();
});

</script>
