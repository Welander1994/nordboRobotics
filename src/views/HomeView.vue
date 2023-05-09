<script setup>
import Header from "/src/components/Header.vue";
import asideComponents from "@/components/Aside.vue";
import TypeOfRobot from "@/components/form/1-type-of-robot.vue";
import TypeOfMaterial from "@/components/form/2-type-of-material.vue";
import TypeOfWork from "@/components/form/3-type-of-work.vue";
import LevelOfDetail from "@/components/form/4-level-of-detail.vue";
import SizeOfProduct from "@/components/form/5-size-of-product.vue";
import SizeOfBatch from "@/components/form/6-size-of-batch.vue";
import LevelOfAutomatision from "@/components/form/7-level-of-automatision.vue";
import Solution from "@/components/form/8-solution.vue";
import ScoreSystem from "@/components/ScoreSystem.vue";

import { onMounted } from "vue";

import { useAsideStore } from '@/stores/aside';
import { usefirebaseSteps } from '@/stores/firebaseSteps';

const firebaseStore = usefirebaseSteps();

const asideStore = useAsideStore();

onMounted(() => {
  asideStore.localStorageOnLoad();
});

window.onscroll = function () {
  asideStore.onscroll();
};
</script>

<template>
  <div class="container">
    <Header />
    <main class="form flex">
      <asideComponents />
      <div class="content">
        <TypeOfRobot />
        <ScoreSystem />
        <TypeOfMaterial />
        <TypeOfWork />
        <LevelOfDetail />
        <SizeOfProduct />
        <SizeOfBatch />
        <LevelOfAutomatision />
        <Solution />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.container {
  max-width: $max-width;
  width: 100%;
  margin: auto;
}

.form {
  &__section-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
    }
  }

  &__questions {
    max-width: 430px;
    width: 100%;
  }

  &__information {
    max-width: 440px;
    width: 100%;
  }

  &__title {
    font-size: 2.4rem;
    font-family: "primary-font-bold";
    color: $primary-color;
    margin-bottom: 30px;
  }

  &__subtitle {
    margin-bottom: 35px;
  }

  &__text {
    font-size: 1.6rem;
    margin-bottom: 20px;

    &--semibold {
      font-family: "primary-font-semibold";
      color: $primary-color;
    }
  }

  &__section {
    margin-top: -100px;
    padding-top: 175px;
    width: calc($max-width - 245px);
    min-height: 95vh;
    max-width: 891px;
    scroll-snap-align: start;

    @media (min-width: $breakpoint-lg) {
      margin-left: 135px;
      justify-content: space-between;
    }

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      margin-bottom: 50px;
      max-width: 100vw;
    }
  }
}

aside {
  width: 245px;
  height: calc(100vh - 100px);
}

.content {
  margin-left: 245px;
  margin-top: 200px;
  width: calc(100vw - 250px);
  height: fit-content;
  background-image: url("../assets/img/white-dots.png");
  object-fit: contain;

  @media (max-width: $breakpoint-lg) {
    margin-top: 100px;
  }
}

@media only screen and (max-width: $breakpoint-xl) {
  .form {
    flex-direction: column;

    &__section {
      margin-top: -145px;
      padding-top: 145px;
    }

    .content {
      margin: 0;
      width: 100%;
      margin-top: 200px;
      padding: 10px;
    }

    &__questions {
      margin-top: 0px;
    }
  }
}

@media only screen and (max-width: $breakpoint-lg) {
  .form__questions {
    margin-top: 0px;
  }

  .form__section {
    margin-top: -100px;
    padding-top: 145px;
    max-width: 95vw;
  }
}

@media only screen and (max-width: $breakpoint-md) {
  .form__questions {
    margin-top: 90px;
  }

  .form__section {
    margin-top: -50px;
    padding-top: 50px;
  }
}
</style>
