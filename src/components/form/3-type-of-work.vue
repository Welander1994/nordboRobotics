<script setup>
import { ref, onMounted } from "vue";
import Button from "../Button.vue";
import Information from "../Information.vue";
import { useFirebaseData } from '@/stores/firebaseData';

const firebaseStore = useFirebaseData();

const selectedIndex = ref(null);

function selectButton(index) {
  selectedIndex.value = index;
}

</script>

<template>
  <section class="form__section form__section--light flex flex__gap--lg" id="Type-of-process">
    <section class="form__questions flex--column">
      <h2 class="form__title">Type of Process</h2>
      <p class="form__text--semibold form__text">Choose process</p>
      <ul class="flex--column">
        <Button v-if="firebaseStore.stepsData[2]?.process" v-for="(process, index) in firebaseStore.stepsData[2].process"
          :key="index" :selected-class="'form__button--selected'" :name="process.name" :hover-img-url="process.imgLight"
          :img-url="process.imgDark" :index="index" :isSelected="selectedIndex === index" @click="selectButton(index)" />
      </ul>
    </section>

    <section class="form__information flex--column">

      <Information :text="state" />
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
