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

  const element = document.getElementById("Type-of-process");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

//Multi language setup
const { t } = useI18n();
</script>

<template>
  <section
    class="form__section form__section--dark flex flex__gap--lg"
    id="Type-of-material"
  >
    <div class="form__section-wrapper">
      <section class="form__questions flex--column">
        <h2 class="form__title">{{ t("material") }}</h2>
        <p class="form__text--semibold form__text">{{ t("material2") }}</p>
        <ul class="flex--column">
          <Button
            v-if="firebaseStore.stepsData[1]?.materials"
            v-for="(material, index) in firebaseStore.stepsData[1].materials"
            :key="index"
            :selected-class="'form__button--selected'"
            :name="$t('steps[1].materials[' + index + '].name')"
            :hover-img-url="material.imgLight"
            :img-url="material.imgDark"
            :index="index"
            :isSelected="selectedIndex === index"
            :class="{
              'form__button--icon-right-space': [1, 3].includes(index),
            }"
            @mouseup="
              selectButton(index),
                firebaseStore.addToProduct('typeOfMaterial', material.name),
                scoreProduct.updateScoresOnClick()
            "
          />
        </ul>
      </section>

      <section class="form__information flex--column">
        <Information
          :lists="[
            $t('steps[1].description.description1'),
            $t('steps[1].description.description2'),
          ]"
        />
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
