<script setup>
import { ref, onMounted } from "vue";
import Button from "../Button.vue";
import Information from "../Information.vue";
import { useFirebaseData } from '@/stores/firebaseData';
import Slider from "../Slider.vue";

const firebaseStore = useFirebaseData();

const selectedIndex = ref(null);

function selectButton(index) {
  selectedIndex.value = index;
}

</script>

<template>
  <section class="form__section form__section--light flex flex__gap--lg" id="Level-of-detail">


  <div class="form__section-wrapper">
    <section class="form__questions flex--column">
      <h2 class="form__title">What is the level of detail?</h2>
      <p class="form__text--semibold form__text">Choose level of detail</p>
      <ul class="flex--column">
      <Slider />
   

      </ul>
      <Button class="form__button--rounded flex__justify--center" name="Next" />
    </section>

    <section class="form__information flex--column">
      <Information :lists="firebaseStore.typeOfWork.description" />
    </section>
  </div>

  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
