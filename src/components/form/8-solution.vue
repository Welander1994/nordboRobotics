<script setup>

import { useScore } from "@/stores/score";

const scoreProduct = useScore();

</script>

<template>
  <section class="form__section form__section--light flex flex__gap--lg" id="Solution">
    <section class="form__questions flex--column">
      <template v-if="scoreProduct.highestScoreProduct">
        <p class="form__text--semibold form__text">The optimal solution for you is:</p>
        <h2 class="form__title">{{ scoreProduct.highestScoreProduct.name }}</h2>

        <ul>
          <li v-for="(description, index) in scoreProduct.highestScoreProduct.description" :key="index">
            <p class="form__text--semibold form__text">{{ description }}</p>
          </li>
        </ul>

      </template>
    </section>

    <section class="form__information flex--column">
      <template v-if="scoreProduct.highestScoreProduct">
        <img :src="scoreProduct.highestScoreProduct.img" alt="" @click="scoreProduct.test()" />
      </template>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.form__section {
  margin-bottom: 20px;

  ul {
    li {
      list-style-type: none;
      display: flex;
      transform: translateX(-30px);

      &::before {
        content: ' ';
        display: block;
        aspect-ratio: 1/1;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin: 5px 15px 0 0;
        background-color: $primary-color;
      }
    }
  }
}

.form__information {
  display: flex;
  align-items: center;
}
</style>
