<script setup>
import { useFirebaseData } from '@/stores/firebaseData';
import { onMounted, ref } from 'vue';
import { useFirebaseProduct } from '@/stores/products';

const firebaseProduct = useFirebaseProduct();
const firebaseStore = useFirebaseData();

console.log(firebaseStore.product)


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


onMounted(async () => {
  await firebaseProduct.fetchProduct();
  updateScores();
});

const highestScoreProduct = ref(null);

const updateScores = () => {

  let highScore = 0;
  firebaseProduct.product.forEach(product => {
    const score = calculateScore(product, userSelections);
    if (score > highScore) {
      highScore = score;
      highestScoreProduct.value = product;
    }
  })


  
  console.log(`Produktet med højest score: ${JSON.stringify(highestScoreProduct.value.name)}`);
  console.log(highestScoreProduct.name)

};





</script>

<template>
  <section class="form__section form__section--light flex flex__gap--lg" id="Solution">
    <section class="form__questions flex--column">
   
    </section>

    <section class="form__information flex--column">
  
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.form__section {
  margin-bottom: 20px;
}
</style>
