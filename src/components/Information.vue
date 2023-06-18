<script setup>
const props = defineProps({
  lists: {
    type: Array,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <h3 class="form__subtitle">Information</h3>
  <div :class="{ form__content: true, dark: dark }">
    <ul class="flex--column">
      <li v-for="list in lists" :key="list.id">{{ list }}</li>
      <li v-if="text">{{ text }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.form {
  &__subtitle {
    font-size: 2.4rem;
    font-family: "primary-font-semibold";
    color: var(--secondary-color);
  }

  &__content {
    height: 317px;
    max-width: 440px;
    background-color: var(--primary-color);;
    border: 3px dashed var(--secondary-color);;
    border-radius: 22px;

    ul {
      font-size: 16px;
      padding: 20px 20px 20px 48px;

      li {
        color: var(--secondary-color);;
        font-family: "primary-font-regular";
        font-weight: 500;
        list-style: none;
        position: relative;

        &.dark-li {
          &:before {
          position: absolute;
          left: -30px;
          content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='%23fff'/%3E%3C/svg%3E%0A");
        }
          
        }

        &:before {
          position: absolute;
          left: -30px;
          content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='%23363973'/%3E%3C/svg%3E%0A");
        }
      }
    }

    &.dark {
      background-color: var(--secondary-color);;
      border: 3px dashed var(--primary-color);;

      ul {
        li {
          color: $contrast-light;

          &:before {
            content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='%23ffffff'/%3E%3C/svg%3E%0A");
          }
        }
      }
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .form__content {
    max-width: 395px;
    height: auto;
  }
}
</style>
