<script setup>
import Button from '../Button.vue';
import Information from '../Information.vue';

   const lists = [
        {
            id: 1,
            text: 'These are the robot brands that Nordbo Robotics solutions work with.',
        },
        {
            id: 2,
            text: 'The choice of software will depend on which brand of robot the company uses.'
        },
        {
            id: 3,
            text: 'If the company doesn’t currently have a robot then Nordbo can help to find which solution will suit them best.'
        },
    ] 



</script>

<template>
    <section class="form__section form__section--light flex flex__gap--lg" id="Type-of-Robot">
        <section class="form__questions flex--column">
          <h2 class="form__title">What type of robot</h2>
          <p class="form__text--semibold">Choose a brand</p>
          <ul class="flex--column">
            <Button class="form__button" :class="{ 'form__button--selected': isButtonSelected }" name="Sanding"
            hover-img-url="src/assets/img/sanding-dark.svg" img-url="src/assets/img/sanding-light.svg" />
            <Button class="form__button--light" :class="{ 'form__button--light-selected': isButtonSelected }" name="Sanding"
                hover-img-url="src/assets/img/sanding-light.svg" img-url="src/assets/img/sanding-dark.svg" />
            <Button class="form__button--rounded flex__justify--center" name="Next" />
            <Button class="form__button--rounded-light flex__justify--center" name="Next" />

            <Button class="form__button--selected" name="selected" />
          </ul>	
        </section>
      

        <section class="form__information flex--column">
            <Information 
            :lists="lists"
            />
        </section>
    

     
    
    </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.form {
 
}


</style>