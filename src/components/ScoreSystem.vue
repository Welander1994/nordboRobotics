<script setup>
import { onMounted } from 'vue';

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
  typeOfRobot: 'Nachi',
  material: 'Wood',
  process: 'Sanding',
  levelOfDetail: 6,
  size: 6,
  batch: 6,
  automatisation: '50%'
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
  score += (5 - Math.abs(product.levelOfDetail - userSelections.levelOfDetail));
  score += (5 - Math.abs(product.size - userSelections.size));
  score += (5 - Math.abs(product.batch - userSelections.batch));

  if (product.automatisation === userSelections.automatisation) {
    score += 1;
  }

  return score;
};

const product1 = {
  typeOfRobot: 'Nachi',
  material: 'Wood',
  process: 'Sanding',
  levelOfDetail: 2,
  size: 6,
  batch: 6,
  automatisation: '50%'
};
const product2 = {
  typeOfRobot: 'Universal Robots',
  material: 'Metal',
  process: 'Painting',
  levelOfDetail: 1,
  size: 5,
  batch: 4,
  automatisation: '25%'
};

const updateScores = () => {
  console.log(calculateScore(product1, userSelections));
  console.log(calculateScore(product2, userSelections));
};

onMounted(() => {
  updateScores();
});
</script>