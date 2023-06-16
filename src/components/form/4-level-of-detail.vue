<script setup>
import Button from "../Button.vue";
import Information from "../Information.vue";
import Slider from "../Slider.vue";
import { usefirebaseSteps } from "@/stores/firebaseSteps";
import { useScore } from "@/stores/score";
import { useI18n } from "vue-i18n";

const scoreProduct = useScore();
const firebaseStore = usefirebaseSteps();

function selectButton() {
  /*   window.location.href = "#Size-of-product"; */
  const element = document.getElementById("Size-of-product");
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
    class="form__section form__section--dark flex flex__gap--lg"
    id="Level-of-detail"
  >
    <div class="form__section-wrapper">
      <section class="form__questions flex--column flex">
        <h2 class="form__title">{{ t("detail") }}</h2>
        <p class="form__text--semibold form__text">{{ t("detail2") }}</p>
        <ul class="flex--column">
          <Slider
            type="levelOfDetail"
            :name1="t('slider.low')"
            :name2="t('slider.high')"
          />
        </ul>
        <Button
          class="form__button--bottom-left form__button--rounded flex__justify--center"
          :name="t('button.next')"
          @click="selectButton(), scoreProduct.updateScoresOnClick()"
        />
      </section>

      <section class="form__information flex--column">
        <Information :lists="firebaseStore.LevelOfDetail.description" />
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
