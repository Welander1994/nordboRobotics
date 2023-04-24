<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAsideStore } from '@/stores/aside';
import { useFirebaseData } from '@/stores/firebaseData';
import { ref, onMounted } from 'vue';

const asideStore = useAsideStore();
const firebaseStore = useFirebaseData();

const products = ref([]);

onMounted(async () => {
  const response = await fetch('https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/steps.json')
  products.value = await response.json();
  for (let i = 0; i < products.value.length; i++) {
    asideStore.list.push({
      name: products.value[i].name,
      id: products.value[i].name.split(' ').join('-'),
      active: i == 0 ? true : false
    });
  }



  asideStore.list.push({
    name: 'Solution',
    id: 'Solution',
    active: false
  });
})

</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped></style>
