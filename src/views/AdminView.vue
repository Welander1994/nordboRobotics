<script setup>
import { reactive, onMounted } from "vue";
import { getAuth, getIdToken } from "firebase/auth";
import "@/firebase.js";

const auth = getAuth();
const products = reactive({});
const getProducts = async () => {
  try {
    const response = await fetch(window.API_URL + "/products.json", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error(error);
  }
};

const updateProducts = async (index, value) => {
  const updateProducts = { ...products[index], name: value };
  try {
    const user = auth.currentUser;
    const token = await user.getIdToken(true);
    await fetch(window.API_URL + 'products/' + index + '.json', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(updateProducts),
    });
    products[index] = updateProducts;
    console.log(token);

  } catch (error) {
    console.error(error);
    console.log(token);
  }
};


onMounted(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is logged in, get the process data
      console.log(user); // log user object for debugging
      getProducts();
    } else {
      // User is not logged in, show error message or redirect to login page
    }
  });
});
</script>

<template>
  <main>
    <h1>Admin</h1>
    <div class="products">
      <li v-for="(product, index) in products.value" :key="index">
        <input type="text" :value="product.name" @input="updateProducts(index, $event.target.value)">
      </li>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
