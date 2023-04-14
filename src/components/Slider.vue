<script setup></script>

<template>
  <div class="slider flex flex--column flex__align--center">
    <div class="slider__range-line"></div>
    <input
      class="slider__range"
      type="range"
      min="0"
      max="6"
      value="0"
      steps="6"
    />
    <div class="slider__description flex flex__justify--between">
      <p>Less</p>
      <p>More</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
@import "../assets/flex.scss";

.slider {
  width: 430px;
  background-color: salmon;
  position: relative;

  &__range-line {
    width: 1px;
    height: 25px;
    background-color: $primary-color;
    position: absolute;
    z-index: 1;
    top: -7px;
    left: 50%;
  }

  &__range {
    -webkit-appearance: none;
    width: 404px;
    height: 6px;
    background-color: $primary-color;
    outline: none;
    border-radius: 15px;

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
    margin-top: 10px;
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
</style>
