<template>

</template>
  
  <script setup>
const userSelections = {
  typeOfRobot: 'Nachi',
  material: 'wood',
  process: 'Sanding',
  levelOfDetail: 1,
  size: 1,
  batch: 1
};

const calculateScore = (product, userSelections) => {
  let score = 0;
  if (product.typeOfRobot === userSelections.typeOfRobot) {
    score += 1;
  }
  if (product.material === userSelections.material) {
    score += 1;
  }
  if (product.process === userSelections.process) {
    score += 1;
  }
  score += (6 - Math.abs(product.levelOfDetail - userSelections.levelOfDetail));
  score += (6 - Math.abs(product.size - userSelections.size));
  score += (6 - Math.abs(product.batch - userSelections.batch));
  return score;
};

const product1 = {
  typeOfRobot: 'Nachi',
  material: 'wood',
  process: 'Sanding',
  levelOfDetail: 6,
  size: 6,
  batch: 6
};
const product2 = {
  typeOfRobot: 'Universal Robots',
  material: 'metal',
  process: 'Painting',
  levelOfDetail: 1,
  size: 1,
  batch: 1
};

console.log(calculateScore(product1, userSelections)); // Output: 13
console.log(calculateScore(product2, userSelections)); // Output: 3
  </script>
  