<script setup>
<<<<<<< HEAD
import Header from '/src/components/Header.vue';
import asideComponents from '@/components/aside.vue'

=======
import Button from "../components/Button.vue";
import Header from "/src/components/Header.vue";
>>>>>>> button-component
</script>

<template>
  <div class="container">
    <Header />
    <div class="flex">
<<<<<<< HEAD
      <aside>
        <asideComponents />
      </aside>
=======
      <aside></aside>
>>>>>>> button-component
      <div class="content">
        <p>test</p>
        <Button
          name="Sanding"
          dark-img-url="src/assets/img/sanding-dark.svg"
          light-img-url="src/assets/img/sanding-light.svg"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
@import "../assets/flex.scss";

.container {
  max-width: $max-width;
  margin: auto;
}

aside {
  width: 245px;
  height: calc(100vh - 100px);
}

.content {
  width: calc(100vw - 245px);
  height: calc(100vh - 100px);
  background-image: url("../assets/img/white-dots.png");
}

@media only screen and (max-width: $breakpoint-sm) {
}
</style>
