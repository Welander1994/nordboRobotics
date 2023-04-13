<script setup>
// Importing vue stuffz
import { ref, onMounted } from 'vue';

// Reactive states for menu control
const isActive = ref(false);
const showMenu = ref(false);

function handleMenuClick() {
  isActive.value != isActive.value;
  showMenu.value != showMenu.value;
}



</script>

<template>
  <header class="mainheader flex flex__justify--between flex__align--center">
    <div class="mainheader__logo-container">
      <h1 class="mainheader__logo">
        <img src="/src/assets/img/logo.jpg" class="mainheader__img">
      </h1>

      <div class="mainheader__lang-container">
        <a href="#" class="mainheader__lang">DK</a>
        <a href="#" class="mainheader__lang--selected">EN</a>
      </div>
    </div>

    <nav class="mainheader__nav">
      <ul class="flex">
        <li><a href="#" class="mainheader__link">Solutions</a></li>
        <li><a href="#" class="mainheader__link">Partners</a></li>
        <li><a href="#" class="mainheader__link">Resources</a></li>
        <li><a href="#" class="mainheader__link">About Us</a></li>
        <li><a href="#" class="mainheader__link--secondary">Partner Portal</a></li>
        <li><a href="#" class="mainheader__link--primary">Get in Touch</a></li>
      </ul>
    </nav>


    <nav class="mainheader__mobile">
      <ul class="flex">
        <li><a href="#" class="mainheader__link">Solutions</a></li>
        <li><a href="#" class="mainheader__link">Partners</a></li>
        <li><a href="#" class="mainheader__link">Resources</a></li>
        <li><a href="#" class="mainheader__link">About Us</a></li>
        <li><a href="#" class="mainheader__link--secondary">Partner Portal</a></li>
        <li><a href="#" class="mainheader__link--primary">Get in Touch</a></li>
      </ul>
    </nav>

  </header>
</template>


<style lang="scss" scoped>
@import '../assets/main.scss';
@import '../assets/flex.scss';

$border-radius: 7px;

.mainheader {
  height: 100px;
  position: fixed;

  max-width: $max-width;
  width: 100%;
  background-color: $contrast-light;

  &__mobile {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);

    &.active {
      transform: translateX(0%);
    }
  }

  &__logo-container {
    position: relative;
  }

  &__lang-container {
    position: absolute;

    a {
      position: relative;
      font-size: 1.4rem;

      &:first-of-type {
        &:after {
          content: url("data:image/svg+xml,%3Csvg width='2' height='22' viewBox='0 0 2 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline opacity='0.9' x1='1' y1='21.0034' x2='1' y2='0.987188' stroke='%23363973' stroke-width='0.5'/%3E%3C/svg%3E%0A");
          position: absolute;
          right: -4px;
        }
      }
    }
  }

  &__lang {
    color: $primary-color;
    font-family: 'primary-font-medium';
    text-decoration: none;
    margin-right: 6px;

    &--selected {
      text-decoration: none;
      color: $primary-color;
      font-family: 'primary-font-bold';
    }
  }

  &__nav {
    ul {
      list-style: none;

      li {
        a {
          text-decoration: none;
          font-family: 'secondary-font-medium';
        }
      }
    }
  }

  &__link {
    padding-right: 60px;
    color: $primary-color;
    font-size: 1.6rem;

    &:last-of-type {
      padding-right: 60px;
    }

    &:after {
      content: url("data:image/svg+xml,%3Csvg width='17' height='10' viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.57125 0.0952148L8.5 6.01105L14.4288 0.0952148L16.25 1.91646L8.5 9.66646L0.75 1.91646L2.57125 0.0952148Z' fill='%23363973'/%3E%3C/svg%3E%0A");
      margin-left: 10px;
      font-size: 1.6rem;
    }

    &--secondary {
      background-color: $tertiary-color;
      padding: 12.5px 25px;
      color: $primary-color;
      border-radius: $border-radius;
      margin-right: 30px;
      font-size: 1.6rem;
    }

    &--primary {
      background-color: $primary-color;
      color: $contrast-light;
      padding: 12.5px 25px;
      border-radius: $border-radius;
      font-size: 1.6rem;

    }
  }
}
</style>