<script setup>
import { ref, onMounted } from "vue";
import Button from "../Button.vue";
import Information from "../Information.vue";
import Slider from "../Slider.vue";
import { usefirebaseSteps } from "@/stores/firebaseSteps";

const firebaseStore = usefirebaseSteps();



function selectButton() {
  window.location.href = "#Size-of-batch";
}


</script>

<template>
  <section class="form__section form__section--light flex flex__gap--lg" id="Size-of-product">


    <div class="form__section-wrapper">
      <section class="form__questions flex--column flex">
        <h2 class="form__title">What is the size of the product?</h2>
        <p class="form__text--semibold form__text">Choose size of product</p>
        <ul class="flex--column">
          <Slider type="sizeOfProduct" name1="Smaller" name2="Larger" />
        </ul>

        <Button class="form__button--bottom-left form__button--rounded flex__justify--center" name="Next"
          @click="selectButton" />
      </section>

      <section class="form__information flex--column">
        <Information :lists="firebaseStore.sizeOfProduct.description" />
      </section>
    </div>

  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
