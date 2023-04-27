<script setup>
import { ref, onMounted } from 'vue';
import Button from "../Button.vue";
import Information from "../Information.vue";
import Slider from "../Slider.vue";
import { useFirebaseData } from '@/stores/firebaseData';

const firebaseStore = useFirebaseData();
const selectedIndex = ref(null);

function selectButton(index) {
  selectedIndex.value = index;
}


</script>

<template>
  <section class="form__section form__section--light flex flex__gap--lg" id="Type-of-robot">
    <section class="form__questions flex--column">
      <h2 class="form__title">What type of robot</h2>
      <p class="form__text--semibold form__text">Choose a brand</p>
      <ul class="flex--column">
        <Button v-if="firebaseStore.stepsData[0]?.robots" v-for="(robot, index) in firebaseStore.stepsData[0].robots"
          :key="index" :name="robot" :imgUrl="robot.imgUrl" :hoverImgUrl="robot.hoverImgUrl"
          :selectedClass="'form__button--selected'" :index="index" :isSelected="selectedIndex === index"
          @click="selectButton(index)" />
      </ul>

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
