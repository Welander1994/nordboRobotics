<script setup>

</script>

<template>
  <header class="mainheader">
    <div class="mainheader__logo-container">
      <h1 class="mainheader__logo">
        <img src="#" class="mainheader__img">
      </h1>

      <div class="mainheader__lang-container">
        <a href="#" class="mainheader__lang--selected">DK</a>
        <a href="#" class="mainheader__lang">EN</a>
      </div>
    </div>

    <nav class="mainheader__nav">
      <ul>
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
.mainheader {
  height: 100px;
  display: flex;
  background-color: red;


  ul {
    display: flex;
  }
}
</style>