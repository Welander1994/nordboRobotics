<script setup>
import { computed, ref, onMounted } from "vue";

const props = defineProps({
  name: String,
  imgUrl: String,
  hoverImgUrl: String,
  selectedClass: String,
  index: Number,
  isSelected: Boolean,
});

const isHovering = ref(false);
const imgUrl = ref(props.imgUrl);
const hoverImgUrl = ref(props.hoverImgUrl);

// Listen to changes in the body class
onMounted(() => {
  const bodyClasses = document.body.classList;
  const observer = new MutationObserver(() => {
    if (bodyClasses.contains("dark-mode")) {
      imgUrl.value = props.hoverImgUrl || props.imgUrl;
      hoverImgUrl.value = props.imgUrl;
    } 

    else {
      imgUrl.value = props.imgUrl;
      hoverImgUrl.value = props.hoverImgUrl;
    }
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
});
</script>

<template>
  <button
    class="form__button flex flex__align--center"
    :class="{ [props.selectedClass]: props.isSelected }"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
    @click="$emit('click')"
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
    cursor: pointer;
    position: relative;
    color: var(--primary-color);
    background-color: var(--secondary-color);
    width: 247px;
    height: 53px;
    font-family: "primary-font-bold";
    border-radius: 11px;
    border: solid 1.5px var(--primary-color);
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
      background-color: var(--primary-color);
      color: var(--secondary-color);
    }

    &--bottom-left {
      margin-top: auto;
      margin-left: auto;
    }

    &--light {
      background-color: $contrast-light;
      border: solid 1.5px $contrast-light;
      color: var(--primary-color);
      box-shadow: 0px 2px 2px rgba($contrast-dark, 0.15);

      &:hover {
        background-color: var(--primary-color)r;
        color: $contrast-light;
      }
    }

    &--icon-right-space {
      .button__img {
        right: 9px;
        top: auto;
      }
    }

    &--icon-level {
      .button__img {
        right: 15px;
        top: auto;
      }
    }

    &--selected {
      background-color: var(--primary-color);
      color: var(--secondary-color);
    }

    &--light-selected {
      background-color: var(--primary-color);
      color: $contrast-light;
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
      color: var(--primary-color);
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
      padding: 0;

      &:hover {
        background-color: var(--primary-color);
        color: $contrast-light;
      }
    }
  }
}
</style>
