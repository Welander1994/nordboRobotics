<script setup>
import Header from '/src/components/Header.vue';
import asideComponents from '@/components/aside.vue'
import Button from "../components/Button.vue";
</script>

<template>
  <div class="container">
    <Header />
    <div class="flex">
      <asideComponents />
      <div class="content">
        <p>test</p>
        <Button
          class="form__button"
          :class="{ 'form__button--selected': isButtonSelected }"
          name="Sanding"
          hover-img-url="src/assets/img/sanding-dark.svg"
          img-url="src/assets/img/sanding-light.svg"
        />
        <Button
          class="form__button--light"
          :class="{ 'form__button--light-selected': isButtonSelected }"
          name="Sanding"
          hover-img-url="src/assets/img/sanding-light.svg"
          img-url="src/assets/img/sanding-dark.svg"
        />
        <Button
          class="form__button--rounded flex__justify--center"
          name="Next"
        />
        <Button
          class="form__button--rounded-light flex__justify--center"
          name="Next"
        />

        <Button
          class="form__button--selected"
          name="selected"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
@import "../assets/flex.scss";

.container {
  max-width: $max-width;
  margin: auto;
}

aside {
  width: 245px;
  height: calc(100vh - 100px);
}

.content {
  width: calc(100vw - 245px);
  height: calc(100vh - 100px);
  background-image: url("../assets/img/white-dots.png");
}

@media only screen and (max-width: $breakpoint-sm) {
}
</style>
