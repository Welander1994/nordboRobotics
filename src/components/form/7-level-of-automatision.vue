<script setup>
import { ref, onMounted } from "vue";
import Button from "../Button.vue";
import Information from "../Information.vue";
import { usefirebaseSteps } from "@/stores/firebaseSteps";

const firebaseStore = usefirebaseSteps();


const selectedIndex = ref(null);

function selectButton(index) {
  selectedIndex.value = index;
  window.location.href = "#Solution";
}

</script>
<template>
  <section class="formsection formsection--light flex flexgap--lg" id="Level-of-automation">
    <div class="formsection-wrapper">
      <section class="formquestions flex--column">
        <h2 class="formtitle">What is the desired level of automatisation?</h2>
        <p class="formtext--semibold formtext">Choose level of automatisation</p>
        <ul class="flex--column">
          <Button class="formbutton--icon-level" v-if="firebaseStore.stepsData[6]?.automation"
            v-for="(automation, index) in firebaseStore.stepsData[6].automation" :key="index"
            :selected-class="'formbutton--selected'" :name="automation.name" :hover-img-url="automation.imgLight"
            :img-url="automation.imgDark" :index="index" :isSelected="selectedIndex === index"
            @mouseup="selectButton(index), firebaseStore.addToProduct('LevelOfAutomation', automation.name)" />
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