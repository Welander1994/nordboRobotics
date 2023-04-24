<script setup>
import {ref, onMounted} from 'vue';
import Button from "../Button.vue";
import Information from "../Information.vue";
import Slider from "../Slider.vue";

const lists = [
  {
    id: 1,
    text: "These are the robot brands that Nordbo Robotics solutions work with.",
  },
  {
    id: 2,
    text: "The choice of software will depend on which brand of robot the company uses.",
  },
  {
    id: 3,
    text: "If the company does not currently have a robot then Nordbo can help to find which solution will suit them best.",
  },
];

const steps = ref([])

onMounted(() => {
  fetch('https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/steps.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // check if the data is in the expected format
    steps.value = data
  })
  .catch(error => {
    console.error(error);
    steps.value = [{ materials: [] }]; // set a default value
  })
})



</script>

<template>
  <section class="form__section form__section--light flex flex__gap--lg" id="Type-of-Robot">
    <section class="form__questions flex--column">
      <h2 class="form__title">What type of robot</h2>
      <p class="form__text--semibold form__text">Choose a brand</p>
      <ul class="flex--column">
        <Button v-if="steps[0]?.robots" v-for="(brand, index) in steps[1].materials" :key="index" 
                :selected-class="'form__button--selected'" 
                :name="brand.name"
                />
      </ul>
      <Slider />
      <Slider class="slider--light" />
    </section>

    <section class="form__information flex--column">
      <Information :lists="lists" />
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
