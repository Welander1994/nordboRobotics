<script setup>
import Button from "../Button.vue";
</script>

<template>
  <div class="form__content" id="Type-of-Robot">
    <h1>type of robot</h1>
    <Button
      class="form__button"
      name="Sanding"
      hover-img-url="src/assets/img/sanding-dark.svg"
      img-url="src/assets/img/sanding-light.svg"
      light="false"
    />
    <Button
      :class="{'form__button--light-selected': isButtonSelected}"
      class="form__button--light"
      name="Sanding"
      hover-img-url="src/assets/img/sanding-light.svg"
      img-url="src/assets/img/sanding-dark.svg"
      light="true"
    />


    <Button class="form__button--selected" name="selected" />
    <Button class="form__button--light-selected" name="selected" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
