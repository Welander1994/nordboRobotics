<script setup>
import { ref, onMounted } from "vue";
import Button from "../Button.vue";
import Information from "../Information.vue";
import { useFirebaseData } from '@/stores/firebaseData';

const firebaseStore = useFirebaseData();


const selectedIndex = ref(null);

function selectButton(index) {
  selectedIndex.value = index;
  window.location.href = "#Type-of-process";
}

</script>

<template>
  <section class="form__section form__section--dark flex flex__gap--lg" id="Type-of-material">
    <div class="form__section-wrapper">
    <section class="form__questions flex--column">
      <h2 class="form__title">Which material is being used?</h2>
      <p class="form__text--semibold form__text">Choose Material</p>
      <ul class="flex--column">

        <Button v-if="firebaseStore.stepsData[1]?.materials" v-for="(materials, index) in firebaseStore.stepsData[1].materials" :key="index"
          :selected-class="'form__button--selected'" :name="materials.name" :hover-img-url="materials.imgLight"
          :img-url="materials.imgDark" :index="index" :isSelected="selectedIndex === index"
          @click="selectButton(index)" />

      </ul>
    </section>

    <section class="form__information flex--column">
      <Information :lists="firebaseStore.typeOfMaterial.description" />
    </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
