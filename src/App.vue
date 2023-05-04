<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAsideStore } from '@/stores/Aside';
import { usefirebaseSteps } from '@/stores/firebaseSteps';
import { ref, onMounted } from 'vue';

const asideStore = useAsideStore();
const firebaseStore = usefirebaseSteps();

const products = ref([]);

onMounted(async () => {

  firebaseStore.fetchStepsData();


  const response = await fetch('https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/steps.json')
  products.value = await response.json();
  if (!JSON.parse(localStorage.getItem("aside"))) {
    for (let i = 0; i < products.value.length; i++) {



      let strArr = products.value[i].name.split(" "); // split the string into an array of words
      let camelCaseStr = ""; // initialize an empty string for the camelCase version

      for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i];

        camelCaseStr += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        // capitalize the first letter of each subsequent word and convert the rest to lowercase

      }

      asideStore.list.push({
        name: products.value[i].name,
        id: products.value[i].name.split(' ').join('-'),
        result: camelCaseStr,
        active: i == 0 ? true : false
      });
    }
    asideStore.list.push({
      name: 'Solution',
      id: 'Solution',
      active: false
    });
  }



})

</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped></style>
