<script setup>
import Header from "/src/components/Header.vue";
import asideComponents from "@/components/aside.vue";
import TypeOfRobot from "@/components/form/1-type-of-robot.vue";
import TypeOfMaterial from "@/components/form/2-type-of-material.vue";
import TypeOfWork from "@/components/form/3-type-of-work.vue";
import LevelOfDetail from "@/components/form/4-level-of-detail.vue";
import SizeOfProduct from "@/components/form/5-size-of-product.vue";
import SizeOfBatch from "@/components/form/6-size-of-batch.vue";
import LevelOfAutomatision from "@/components/form/7-level-of-automatision.vue";
import Solution from "@/components/form/8-solution.vue";
</script>

<template>
  <div class="container">
    <Header />
    <main class="form flex">
      <asideComponents />
      <div class="content">
        <TypeOfRobot />
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
  &__title {
    font-size: 2.4rem;
    font-family: 'primary-font-bold';
    color: $primary-color;
    margin-bottom: 30px;
  }

  &__subtitle{
    margin-bottom: 35px;
  }

  &__text {
    font-size: 1.6rem;
    margin-bottom: 20px;
    &--semibold {
      font-family: 'primary-font-semibold';
      color: $primary-color;
    
    }
  }

 &__section {
  margin-top: -100px;
  padding-top: 200px;
  width: calc($max-width - 245px);
  min-height: 100vh;
  max-width: 891px;
  @media (min-width: $breakpoint-lg) {
    margin-left: 135px;
    justify-content: space-between;
  }

  @media (max-width: $breakpoint-md) {
   flex-direction: column;
   margin-bottom: 50px;
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

@media only screen and (max-width: $breakpoint-lg) {
  .form {
    flex-direction: column;
    &__section {
      margin-top: -134px;
      padding-top: 134px;
    }

    .content {
      margin: 0;
      width: 100%;
      margin-top: 134px;
    }

<<<<<<< HEAD
    .form__section {
      margin-top: -134px;
      padding-top: 134px;
    }
=======

>>>>>>> develop
  }
}
</style>
