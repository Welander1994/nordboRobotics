<script setup>
import Button from "../Button.vue";
</script>

<template>
  <div class="form__content" id="Type-of-Robot">
    <h1>type of robot</h1>
    <Button
      selected-class="form__button--selected"
      name="Sanding"
      hover-img-url="src/assets/img/sanding-dark.svg"
      img-url="src/assets/img/sanding-light.svg"
    />
    <Button
      selected-class="form__button--light-selected"
      class="form__button--light"
      name="Sanding"
      hover-img-url="src/assets/img/sanding-light.svg"
      img-url="src/assets/img/sanding-dark.svg"
    />
    <Button class="form__button--rounded flex__justify--center" name="Next" />
    <Button
      class="form__button--rounded-light flex__justify--center"
      name="Next"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>
