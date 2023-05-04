<script setup>
import { ref, onMounted } from "vue";
import Button from "../Button.vue";
import Information from "../Information.vue";
import Slider from "../Slider.vue";
import { usefirebaseSteps } from "@/stores/firebaseSteps";

const firebaseStore = usefirebaseSteps();

function selectButton() {
  window.location.href = "#Size-of-product";
}


</script>

<template>
  <section class="form__section form__section--dark flex flex__gap--lg" id="Level-of-detail">


    <div class="form__section-wrapper">
      <section class="form__questions flex--column flex">
        <h2 class="form__title">What is the level of detail?</h2>
        <p class="form__text--semibold form__text">Choose level of detail</p>
        <ul class="flex--column">
          <Slider type="levelOfDetail" name1="Low" name2="High" />


        </ul>
        <Button class="form__button--bottom-left form__button--rounded flex__justify--center" name="Next"
          @click="selectButton" />
      </section>

      <section class="form__information flex--column">
        <Information :lists="firebaseStore.LevelOfDetail.description" />
      </section>
    </div>

  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
