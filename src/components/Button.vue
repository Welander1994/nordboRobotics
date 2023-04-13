<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  name: String,
  imgUrl: String,
  hoverImgUrl: String,
  buttonSelected: Boolean,
});

const isHovering = ref(false);
const isButtonSelected = ref(props.buttonSelected);

//Changing img url via the boolean value of 'isHovering' but also seeing if the button is selected
const imgUrl = computed(() => {
  if (isButtonSelected.value) {
    return props.hoverImgUrl;
  }
  return isHovering.value ? props.hoverImgUrl || props.imgUrl : props.imgUrl;
});

</script>

<template>
  <button
    class="form__button flex flex__align--center"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
    @click="isButtonSelected = !isButtonSelected"
  >
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
    height: 53px;
    font-family: "primary-font-bold";
    border-radius: 11px;
    border: solid 1.5px $primary-color;
    font-size: 1.8rem;
    padding-left: 19px;
    margin: 0 0 16px 0;
    overflow: hidden;
    box-shadow: 0px 2px 2px rgba($contrast-dark, 0.1);

    .button__img {
      position: absolute;
      right: 0;
      top: 0;
    }

    &:hover {
      background-color: $contrast-light;
      color: $primary-color;
    }

    &--light{
      background-color: $contrast-light;
      border: solid 1.5px $contrast-light;
      color: $primary-color;
      box-shadow: 0px 2px 2px rgba($contrast-dark, 0.15);

      &:hover {
        background-color: $primary-color;
        color: $contrast-light;
      }
    }

    &--selected {
      background-color: $contrast-light;
      color: $primary-color;
    }

    &--rounded {
      width: 182px;
      height: 39px;
      border-radius: 19.5px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
      padding: 0;
    }

    &--rounded-light {
      width: 182px;
      height: 39px;
      border-radius: 19.5px;
      background-color: $contrast-light;
      border: solid 1.5px $contrast-light;
      color: $primary-color;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
      padding: 0;

      &:hover {
        background-color: $primary-color;
        color: $contrast-light;
      }
    }
  }
}
</style>
