<script setup>
import Button from "../Button.vue";
import { ref, onMounted } from 'vue';
import Information from "../Information.vue";
import { useFirebaseData } from '@/stores/firebaseData';

const firebaseStore = useFirebaseData();

const state = ref('choose type of work');

const chooseWork = (e) => {

  switch (e) {
    case 'sanding':
      state.value = firebaseStore.typeOfWork.sanding.description
      break;
    case 'finishing':
      state.value = firebaseStore.typeOfWork.finishing.description
      break;
    case 'painting':
      state.value = firebaseStore.typeOfWork.painting.description
      break;
    case 'dispensing':
      state.value = firebaseStore.typeOfWork.dispensing.description
      break;
  }

}


</script>

<template>
  <section class="form__section form__section--light flex flex__gap--lg" id="Type-of-process">
    <section class="form__questions flex--column">
      <h2 class="form__title">Type of Process</h2>
      <p class="form__text--semibold form__text">Choose a brand</p>
      <ul class="flex--column">
        <Button selected-class="form__button--selected" name="Sanding" @click="chooseWork('sanding')"
          hover-img-url="src/assets/img/sanding-dark.svg" img-url="src/assets/img/sanding-light.svg" />

        <Button selected-class="form__button--light-selected" class="form__button--light" name="Sanding"
          hover-img-url="src/assets/img/sanding-light.svg" img-url="src/assets/img/sanding-dark.svg" />

        <Button selected-class="form__button--selected" @click="chooseWork('Plastic')" name="Plastic"
          class="form__button--icon-right-space" hover-img-url="src/assets/img/plastic-dark.svg"
          img-url="src/assets/img/plastic-light.svg" />

        <Button selected-class="form__button--light-selected" class="form__button--light form__button--icon-right-space"
          name="Plastic" hover-img-url="src/assets/img/plastic-light.svg" img-url="src/assets/img/plastic-dark.svg" />
        <Button selected-class="form__button--selected" name="Other" class="form__button--icon-right-space"
          hover-img-url="src/assets/img/other-dark.svg" img-url="src/assets/img/other-light.svg" />
        <Button selected-class="form__button--light-selected" class="form__button--light form__button--icon-right-space"
          name="Other" hover-img-url="src/assets/img/other-light.svg" img-url="src/assets/img/other-dark.svg" />
        <Button selected-class="form__button--selected" name="50%" class="form__button--icon-level"
          hover-img-url="src/assets/img/level-dark.svg" img-url="src/assets/img/level-light.svg" />
        <Button selected-class="form__button--light-selected" class="form__button--light form__button--icon-level"
          name="50%" hover-img-url="src/assets/img/level-light.svg" img-url="src/assets/img/level-dark.svg" />

        <Button class="form__button--rounded flex__justify--center" name="Next" />
        <Button class="form__button--rounded-light flex__justify--center" name="Next" />
      </ul>
    </section>
    <section class="form__information flex--column">
      <Information :lists="firebaseStore.typeOfWork" />
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
