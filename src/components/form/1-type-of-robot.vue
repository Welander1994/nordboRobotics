<script setup>
import Button from '../Button.vue';
</script>

<template>
    <div class="form__content" id="Type-of-Robot">
        <h1>type of robot</h1>
        <Button class="form__button" :class="{ 'form__button--selected': isButtonSelected }" name="Sanding"
            hover-img-url="src/assets/img/sanding-dark.svg" img-url="src/assets/img/sanding-light.svg" />
        <Button class="form__button--light" :class="{ 'form__button--light-selected': isButtonSelected }" name="Sanding"
            hover-img-url="src/assets/img/sanding-light.svg" img-url="src/assets/img/sanding-dark.svg" />
        <Button class="form__button--rounded flex__justify--center" name="Next" />
        <Button class="form__button--rounded-light flex__justify--center" name="Next" />

        <Button class="form__button--selected" name="selected" />
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";
</style>