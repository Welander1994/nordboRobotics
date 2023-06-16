<script setup>
import { ref } from "vue";
import Button from "../Button.vue";
import Information from "../Information.vue";
import { usefirebaseSteps } from "@/stores/firebaseSteps";
import { useScore } from "@/stores/score";
import { useI18n } from "vue-i18n";

const scoreProduct = useScore();
const firebaseStore = usefirebaseSteps();

const selectedIndex = ref(null);

function selectButton(index) {
  selectedIndex.value = index;

  const element = document.getElementById("Level-of-detail");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
//Multi language setup
const { t, locale } = useI18n();

const changeLocale = (newLocale) => {
  locale.value = newLocale;
};
</script>

<template>
  <section
    class="form__section form__section--light flex flex__gap--lg"
    id="Type-of-process"
  >
    <div class="form__section-wrapper">
      <section class="form__questions flex--column">
        <h2 class="form__title">{{ t("process") }}</h2>
        <p class="form__text--semibold form__text">{{ t("process2") }}</p>
        <ul class="flex--column">
          <Button
            v-if="firebaseStore.stepsData[2]?.process"
            v-for="(process, index) in firebaseStore.stepsData[2].process"
            :key="index"
            :selected-class="'form__button--selected'"
            :name="process.name"
            :hover-img-url="process.imgLight"
            :img-url="process.imgDark"
            :index="index"
            :isSelected="selectedIndex === index"
            @mouseup="
              selectButton(index),
                firebaseStore.addToProduct('typeOfWork', process.name),
                scoreProduct.updateScoresOnClick()
            "
          />
        </ul>
      </section>

      <section class="form__information flex--column">
        <Information :lists="firebaseStore.typeOfWork" />
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
