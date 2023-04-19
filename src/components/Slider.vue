<script setup></script>

<template>
  <div class="slider flex flex--column flex__align--center">
    <div class="slider__range-line-container">
      <div v-for="i in 4" :key="i" :class="'slider__range-line line-' + i"></div>
    </div>
    <input class="slider__range" type="range" min="0" max="5" value="0" steps="5" />
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

  &__range-line-container {
    width: 375px;
    display: flex;
    justify-content: space-evenly;
  }

  &__range-line {
    width: 1px;
    height: 25px;
    background-color: $primary-color;
    z-index: 1;
    position: relative;
    top: 0px;
    /* 
    &.line-1 {
      left: calc(100%/5);
    }

    &.line-2 {
      left: calc((100% / 5)*2);
    }

    &.line-3 {
      left: calc((100%/5)*3);
    }

    &.line-4 {
      left: 10px;
    } */
  }

  &__range {
    -webkit-appearance: none;
    width: 400px;
    height: 6px;
    background-color: $primary-color;
    outline: none;
    border-radius: 15px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      outline: none;
      background: $primary-color;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
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
