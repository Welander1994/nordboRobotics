<script setup>
import { ref, onMounted } from "vue";
import { usefirebaseSteps } from "@/stores/firebaseSteps";
import { useScore } from "@/stores/score";

const scoreProduct = useScore();
const firebaseStore = usefirebaseSteps();
const sliderRef = ref(null);

const props = defineProps({
  type: String,
  name1: String,
  name2: String,
});

onMounted(() => {
  const slider = sliderRef.value;
  slider.addEventListener("input", () => {
    switch (props.type) {
      case "levelOfDetail":
        firebaseStore.product.LevelOfDetail = parseInt(slider.value);
        localStorage.setItem("product", JSON.stringify(firebaseStore.product));
        scoreProduct.updateScoresOnClick();
        break;

      case "sizeOfProduct":
        firebaseStore.product.SizeOfProduct = parseInt(slider.value);
        localStorage.setItem("product", JSON.stringify(firebaseStore.product));
        scoreProduct.updateScoresOnClick();
        break;

      case "sizeOfBatch":
        firebaseStore.product.SizeOfBatch = parseInt(slider.value);
        localStorage.setItem("product", JSON.stringify(firebaseStore.product));
        scoreProduct.updateScoresOnClick();
        break;
    }
  });
});
</script>

<template>
  <div class="slider flex flex--column flex__align--center">
    <div class="slider__range-line-container">
      <div v-for="i in 4" :key="i" class="slider__range-line"></div>
    </div>
    <input
      class="slider__range"
      type="range"
      :id="type"
      value="0"
      min="0"
      max="5"
      steps="5"
      ref="sliderRef"
    />
    <div
      class="slider__description flex flex__justify--between flex__align--end"
    >
      <p>{{ name1 }}</p>
      <p>{{ name2 }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
@import "../assets/flex.scss";

.slider {
  max-width: 430px;
  height: 76px;
  position: relative;

  &__range-line-container {
    width: 375px;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &__range-line {
    width: 1px;
    height: 25px;
    background-color: $primary-color;
    z-index: 1;
    position: relative;
  }

  &__range {
    -webkit-appearance: none;
    width: 400px;
    height: 6px;
    background-color: $primary-color;
    outline: none;
    border-radius: 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 28px;
      height: 28px;
      outline: none;
      background: $primary-color;
      border-radius: 50%;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 28px;
      height: 28px;
      outline: none;
      background: $primary-color;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  &__description {
    width: 100%;
    height: 66px;
    margin-top: 20px;
    font-family: "primary-font-medium";
    font-size: 1.6rem;
    color: $primary-color;
  }

  &--light {
    .slider__range-line {
      background-color: $contrast-light;
    }

    .slider__range {
      background-color: $contrast-light;

      &::-webkit-slider-thumb {
        background: $contrast-light;
      }

      &::-moz-range-thumb {
        background: $contrast-light;
      }
    }

    .slider__description {
      color: $contrast-light;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .slider {
    transform: scale(90%);
  }
}
</style>
