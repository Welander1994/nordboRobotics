<!-- Importing Vue and creating reactive states -->
<script setup>
import { ref } from "vue";
const isActive = ref(false);
const showMenu = ref(false);

function handleMenuClick() {
  isActive.value = !isActive.value;
  showMenu.value = !showMenu.value;
}
</script>
<!-- Header template -->
<template>
  <header class="mainheader flex flex__justify--between flex__align--center">
    <!-- Logo container -->
    <div class="mainheader__logo-container">
      <h1 class="mainheader__logo">
        <img src="/src/assets/img/logo.jpg" class="mainheader__img" />
      </h1>

      <!-- Language selector container -->
      <div class="mainheader__lang-container">
        <a href="#" class="mainheader__lang">DK</a>
        <a href="#" class="mainheader__lang--selected">EN</a>
      </div>
    </div>

    <!-- Desktop navigation -->
    <nav class="mainheader__nav">
      <ul class="flex">
        <li><a href="#" class="mainheader__link">Solutions</a></li>
        <li><a href="#" class="mainheader__link">Partners</a></li>
        <li><a href="#" class="mainheader__link">Resources</a></li>
        <li><a href="#" class="mainheader__link">About Us</a></li>
        <li>
          <a href="#" class="mainheader__link--secondary">Partner Portal</a>
        </li>
        <li><a href="#" class="mainheader__link--primary">Get in Touch</a></li>
      </ul>
    </nav>

    <!-- Mobile menu hamburger -->
    <div class="mainheader__hamburger">
      <div
        class="menu-icon"
        :class="{ active: isActive }"
        @click="handleMenuClick()"
      >
        <span class="menu-icon__line menu-icon__line-left"></span>
        <span class="menu-icon__line menu-icon__line-center"></span>
        <span class="menu-icon__line menu-icon__line-right"></span>
      </div>
    </div>

    <!-- Mobile menu -->
    <nav
      class="mainheader__mobile flex flex__justify--center flex__align--center"
      :class="{ active: showMenu }"
    >
      <ul class="flex flex--column">
        <li>
          <a
            href="#"
            class="mainheader__link--mobile flex flex__justify--center"
            >Solutions</a
          >
        </li>
        <li>
          <a
            href="#"
            class="mainheader__link--mobile flex flex__justify--center"
            >Partners</a
          >
        </li>
        <li>
          <a
            href="#"
            class="mainheader__link--mobile flex flex__justify--center"
            >Resources</a
          >
        </li>
        <li>
          <a
            href="#"
            class="mainheader__link--mobile flex flex__justify--center"
            >About Us</a
          >
        </li>
        <li>
          <a
            href="#"
            class="mainheader__link--secondary flex flex__justify--center"
            >Partner Portal</a
          >
        </li>
        <li>
          <a
            href="#"
            class="mainheader__link--primary flex flex__justify--center"
            >Get in Touch</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<!-- Header styles -->
<style lang="scss" scoped>
@import "../assets/main.scss";
@import "../assets/flex.scss";

$border-radius: 7px;

.mainheader {
  height: 100px;
  position: fixed;
  max-width: $max-width;
  width: 100%;
  background-color: $contrast-light;
  z-index: 10;

  /* Mobile menu */
  &__mobile {
    @media (max-width: $breakpoint-xl) {
      width: 100%;
    }

    position: fixed;
    right: 0;
    top: 0;
    width: 40%;
    bottom: 0;
    transform: translateX(100%);
    transition: 0.5s ease-out;
    background-color: $primary-color;

    ul {
      li {
        a {
          font-family: "secondary-font-medium";
          color: $contrast-light;
          text-decoration: none;
        }

        margin-bottom: 30px;
      }
    }

    &.active {
      transform: translateX(0%);
      transition: 0.5s ease-in;
      left: unset;
    }

    ul {
      list-style: none;
    }

    .mainheader__link--secondary,
    .mainheader__link--primary {
      background-color: $contrast-light;
      color: $primary-color;
    }
  }

  /* Hamburger icon */
  &__hamburger {
    @media (min-width: $breakpoint-xl) {
      display: none;
    }

    .menu-icon {
      z-index: 10;
      width: 23px;
      display: flex;
      flex-direction: column;
      height: 20px;
      gap: 7px;
      position: relative;
      cursor: pointer;

      /* Active state */
      &.active {
        .menu-icon__line {
          opacity: 0;
          background-color: white;

          &-left {
            opacity: 1;
            display: block;
            width: 100%;
            transition: 0.2s ease;
            top: 50%;
            transform: rotate(-45deg);
          }

          &-center {
            width: 0%;
            transition: 0.5s ease;
          }

          &-right {
            opacity: 1;
            display: block;
            width: 100%;
            transition: 0.2s ease;
            top: 50%;
            transform: translateX(0%) rotate(45deg);
          }
        }
      }

      /* Hamburger lines */
      .menu-icon__line {
        z-index: 3;
        background-color: $primary-color;
        width: 100%;
        height: 3px;

        &-center {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          transition: 0.5s ease;
        }

        &-left {
          position: absolute;
          bottom: 0;
          width: 100%;
          transition: 0.2s ease;
        }

        &-right {
          top: 0;
          position: absolute;
          width: 100%;
          transition: 0.2s ease;
        }
      }
    }
  }

  /* Logo container */
  &__logo-container {
    position: relative;
  }

  /* Language selector container */
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

  /* Language selector */
  &__lang {
    color: $primary-color;
    font-family: "primary-font-medium";
    text-decoration: none;
    margin-right: 6px;

    &--selected {
      text-decoration: none;
      color: $primary-color;
      font-family: "primary-font-bold";
    }
  }

  /* Navigation menu */
  &__nav {
    @media (max-width: $breakpoint-xl) {
      display: none;
    }

    ul {
      list-style: none;

      li {
        a {
          text-decoration: none;
          font-family: "secondary-font-medium";
        }
      }
    }
  }

  /* Navigation links */
  &__link {
    padding-right: 60px;
    color: $primary-color;
    font-size: 1.6rem;

    &:last-of-type {
      padding-right: 60px;
    }

    /* Link arrow icon */
    &:after {
      content: url("data:image/svg+xml,%3Csvg width='17' height='10' viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.57125 0.0952148L8.5 6.01105L14.4288 0.0952148L16.25 1.91646L8.5 9.66646L0.75 1.91646L2.57125 0.0952148Z' fill='%23363973'/%3E%3C/svg%3E%0A");
      margin-left: 10px;
      font-size: 1.6rem;
    }

    /* Mobile link */
    &--mobile {
      font-size: 1.6rem;
      width: 100%;
    }

    /* Secondary link */
    &--secondary {
      background-color: $tertiary-color;
      padding: 12.5px 25px;
      color: $primary-color;
      border-radius: $border-radius;
      margin-right: 30px;
      font-size: 1.6rem;

      @media (max-width: $breakpoint-xl) {
        margin-right: unset;
      }
    }

    /* Primary link */
    &--primary {
      background-color: $primary-color;
      color: $contrast-light;
      padding: 12.5px 25px;
      border-radius: $border-radius;
      font-size: 1.6rem;
    }
  }
}

@media (max-width: $breakpoint-xl) {
  .mainheader {
    max-width: 100dvw;
    width: 100%;
    padding: 0 15px;
  }
}
</style>
