<script setup>
import Button from "../Button.vue";
import { ref, onMounted } from 'vue';
import Information from "../Information.vue";
import Slider from "../Slider.vue";
import { useFirebaseData } from '@/stores/firebaseData';

const firebaseStore = useFirebaseData();


</script>

<template>
  <section class="form__section form__section--light flex flex__gap--lg" id="Type-of-robot">
    <section class="form__questions flex--column">
      <h2 class="form__title">What type of robot</h2>
      <p class="form__text--semibold form__text">Choose a brand</p>
      <ul class="flex--column">
        <Button selected-class="form__button--selected" name="Sanding" hover-img-url="src/assets/img/sanding-dark.svg"
          img-url="src/assets/img/sanding-light.svg" @click="firebaseStore.addToProduct('sanding')" />
        <Button selected-class="form__button--light-selected" class="form__button--light" name="Sanding"
          hover-img-url="src/assets/img/sanding-light.svg" img-url="src/assets/img/sanding-dark.svg" />
        <Button selected-class="form__button--selected" name="Plastic" class="form__button--icon-right-space"
          hover-img-url="src/assets/img/plastic-dark.svg" img-url="src/assets/img/plastic-light.svg" />

        <Button class="form__button--rounded flex__justify--center" name="Next" />
        <Button class="form__button--rounded-light flex__justify--center" name="Next" />
      </ul>
      <Slider />
      <Slider class="slider--light" />
    </section>

    <section class="form__information flex--column">
      <Information :lists="firebaseStore.typeOfRobot.description" />
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
