<script setup>
import { reactive, onMounted } from "vue";
import { getAuth, getIdToken } from "firebase/auth";
import "@/firebase.js";
import { async } from "@firebase/util";
import AdminNavigation from "../components/Admin-navigation.vue";

const auth = getAuth();
const products = reactive({});
const steps = reactive({});
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

const getSteps = async () => {
  try {
    const response = await fetch(window.API_URL + "/steps.json", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    steps.value = data;
  } catch (error) {
    console.error(error);
  }
};

const updateProducts = async (index, value) => {
  const updateProducts = { ...products[index], name: value };
  try {
    const idToken = await getIdToken(auth.currentUser); // Get the Firebase Auth ID token for the current user
    const response = await fetch(
      `${window.API_URL}/products/${index}.json?auth=${idToken}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateProducts),
      }
    );
    const data = await response.json();
    console.log(data); // Log the response for debugging
  } catch (error) {
    console.error(error);
    console.log(token);
  }
};

onMounted(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(user); // log user object for debugging
      getProducts();
      getSteps();
    }
  });
});
</script>

<template>
  <main>
    <AdminNavigation />
    <div class="products">
      <li v-for="(product, index) in products.value" :key="index">
        <input
          type="text"
          :value="product.name"
          @input="updateProducts(index, $event.target.value)"
        />
        <textarea :value="product.description[0]"></textarea>
        <textarea :value="product.description[1]"></textarea>
        <input
          type="text"
          :value="product.img"
          @input="updateProducts(index, $event.target.value)"
        />
        <label>Level of automation</label>
        <p>{{ product.levelOfAutomation }}</p>
        <p v-for="(step, index) in steps.value[6].automation" :key="index">
          {{ step.name }}
        </p>
      </li>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.products {
  margin: 24px;
  li {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    border: 2px solid $primary-color;
    border-radius: 0.5rem;
    padding: 1rem;
    input[type="text"],
    textarea {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: none;
      background-color: $tertiary-color;
      color: $primary-color;
      border-radius: 0.5rem;
      &:focus {
        outline: none;
        box-shadow: 0 0 3px $primary-color;
      }
    }
  }
}
</style>
