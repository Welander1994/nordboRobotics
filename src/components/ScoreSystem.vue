
<template>
  <li v-for="(product, index) in firebaseProduct.product" :key="index">

    <p>{{ product.typeOfMaterial }}</p>
    <p>{{ product.sizeOfProduct }}</p>
    <p>{{ product.levelOfAutomation }}</p>
    <p>{{ product.sizeOfBatch }}</p>
    <p>{{ product.levelOfDetail }}</p>
    <p>{{ product.typeOfMaterial }}</p>
    <p>{{ product.typeOfProcess }}</p>
  </li>
</template>


<script setup>
import { onMounted } from 'vue';

import { useFirebaseProduct } from '@/stores/products';
const firebaseProduct = useFirebaseProduct();



console.log(firebaseProduct.product); // log the first element of the product array



const getProductFromLocalStorage = () => {
  try {
    const product = localStorage.getItem('product');
    return product ? JSON.parse(product) : null;
  } catch (error) {
    console.error('Error parsing data from localStorage:', error);
    return null;
  }
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
  if (product.TypeOfRobot === userSelections.TypeOfRobot) {
    score += 1;
  }
  if (product.TypeOfMaterial === userSelections.TypeOfMaterial) {
    score += 1;
  }
  if (product.TypeOfProcess === userSelections.TypeOfProcess) {
    score += 1;
  }
  score += (5 - Math.abs(product.LevelOfDetail - userSelections.LevelOfDetail));
  score += (5 - Math.abs(product.SizeOfProduct - userSelections.SizeOfProduct));
  score += (5 - Math.abs(product.SizeOfBatch - userSelections.SizeOfBatch));

  if (product.LevelOfAutomation === userSelections.LevelOfAutomation) {
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
  console.log(calculateScore(product1, userSelections));
  console.log(calculateScore(product2, userSelections));
};

onMounted(() => {
  updateScores();
});



</script>