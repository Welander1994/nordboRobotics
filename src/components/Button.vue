<script setup>
import { defineProps, computed, ref } from "vue";

const props = defineProps({
  name: String,
  darkImgUrl: String,
  lightImgUrl: String,
});

const isHovering = ref(false);

const imgUrl = computed(() => {
  return isHovering.value ? props.darkImgUrl : props.lightImgUrl;
});
</script>

<template>
  <button class="form__button flex flex__align--center" @mouseover="isHovering = true" @mouseleave="isHovering = false">
    {{ props.name }}
    <img class="button__img" :src="imgUrl" />
  </button>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
@import "../assets/flex.scss";

.form {
  &__button {
    position: relative;
    color: $contrast-light;
    background-color: $primary-color;
    width: 247px;
    height: 43px;
    font-family: "primary-font-bold";
    border-radius: 11px;
    border: solid 1.5px $primary-color;
    font-size: 1.8rem;
    padding-left: 19px;
    margin: 0;
    overflow: hidden;

    .button__img {
      position: absolute;
      right: 0;
      top: 0;
    }

    &:hover {
      background-color: $contrast-light;
      color: $primary-color;
    }
  }
}
</style>
