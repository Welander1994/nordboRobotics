<script setup>
import { ref } from "vue";
import Button from "../Button.vue";
import Information from "../Information.vue";
import { usefirebaseSteps } from "@/stores/firebaseSteps";
import { useScore } from "@/stores/score";

const scoreProduct = useScore();
const firebaseStore = usefirebaseSteps();

const selectedIndex = ref(null);

function selectButton(index) {
  selectedIndex.value = index;
/*   window.location.href = "#Solution"; */
  const element = document.getElementById('Solution');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
}
}
</script>

<template>
  <section class="form__section form__section--light flex flex__gap--lg" id="Level-of-automation">
    <div class="form__section-wrapper">
      <section class="form__questions flex--column">
        <h2 class="form__title">
          What is the desired level of automatisation?
        </h2>
        <p class="form__text--semibold form__text">
          Choose level of automatisation
        </p>
        <ul class="flex--column">
          <Button class="form__button--icon-level" v-if="firebaseStore.stepsData[6]?.automation"
            v-for="(automation, index) in firebaseStore.stepsData[6].automation" :key="index"
            :selected-class="'form__button--selected'" :name="automation.name" :hover-img-url="automation.imgLight"
            :img-url="automation.imgDark" :index="index" :isSelected="selectedIndex === index" @mouseup="
              selectButton(index),
              firebaseStore.addToProduct('LevelOfAutomation', automation.name),
              scoreProduct.updateScoresOnClick()
              " />
        </ul>
      </section>

      <section class="form__information flex--column">
        <Information :lists="firebaseStore.LevelOfAutomation.description" />
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
