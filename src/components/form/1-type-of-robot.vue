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
  const element = document.getElementById("Type-of-material");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <section
    class="form__section form__section--light flex flex__gap--lg"
    id="Type-of-robot"
  >
    <div class="form__section-wrapper">
      <section class="form__questions flex--column">
        <h2 class="form__title">What type of robot</h2>
        <p class="form__text--semibold form__text">Choose a brand</p>
        <ul class="flex--column">
          <Button
            v-if="firebaseStore.stepsData[0]?.robots"
            v-for="(robot, index) in firebaseStore.stepsData[0].robots"
            :key="index"
            :name="robot"
            :imgUrl="robot.imgUrl"
            :hoverImgUrl="robot.hoverImgUrl"
            :selectedClass="'form__button--selected'"
            :index="index"
            :isSelected="selectedIndex === index"
            :class="{ Hest: [1, 3].includes(index) }"
            @mouseup="
              selectButton(index),
                firebaseStore.addToProduct('typeOfRobot', robot),
                scoreProduct.updateScoresOnClick()
            "
          />
        </ul>
      </section>

      <section class="form__information flex--column">
        <Information :lists="firebaseStore.typeOfRobot.description" />
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
