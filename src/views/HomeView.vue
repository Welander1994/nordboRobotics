<script setup>
import Header from '/src/components/Header.vue';
import asideComponents from '@/components/aside.vue';
import TypeOfRobot from '@/components/form/1-type-of-robot.vue';
import TypeOfMaterial from '@/components/form/2-type-of-material.vue';
import TypeOfWork from '@/components/form/3-type-of-work.vue';
import LevelOfDetail from '@/components/form/4-level-of-detail.vue';
import SizeOfProduct from '@/components/form/5-size-of-product.vue';
import SizeOfBatch from '@/components/form/6-size-of-batch.vue';
import LevelOfAutomatision from '@/components/form/7-level-of-automatision.vue';
import Solution from '@/components/form/8-solution.vue';
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

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.container {
  max-width: $max-width;
  width: 100%;
  margin: auto;

}

.form__section {
  margin-top: -100px;
  padding-top: 100px;
  width: auto;
  height: 100vh;
}

aside {
  width: 245px;
  height: calc(100vh - 100px);
}

.content {
  margin-left: 245px;
  margin-top: 100px;
  width: calc(100vw - 250px);
  height: fit-content;
  background-image: url("../assets/img/white-dots.png");
  object-fit: contain;
}

@media only screen and (max-width: $breakpoint-lg) {

  .form {
    flex-direction: column;


    .content {
      margin: 0;
      width: 100%;
      margin-top: 134px;
    }

    .form__section {
      margin-top: -134px;
      padding-top: 134px;
    }

  }
}
</style>
