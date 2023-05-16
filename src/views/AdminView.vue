<script setup>
import { reactive, onMounted } from "vue";
import { getAuth, getIdToken } from "firebase/auth";
import "@/firebase.js";
import AdminNavigation from "../components/Admin-navigation.vue";
import { usefirebaseSteps } from "@/stores/firebaseSteps";

const firebaseStore = usefirebaseSteps();

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
const updateDescription = (descriptionIndex, value, product) => {
  product.description[descriptionIndex] = value;
  updateProducts(
    descriptionIndex,
    value,
    `description[${descriptionIndex}]`,
    product
  );
};

const updateProducts = async (index, value, property, product) => {
  const updatedProduct = { ...product, [property]: value };
  try {
    const idToken = await getIdToken(auth.currentUser);
    const response = await fetch(
      `${window.API_URL}/products/${index}.json?auth=${idToken}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      }
    );
    const data = await response.json();

  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      /* console.log(user); */ // log user object for debugging
      getProducts();
    }
  });
});
</script>

<template>
  <main>
    <AdminNavigation />
    <div class="products">
      <li v-for="(product, index) in products.value" :key="index">
        <input type="text" :value="product.name" @input="updateProducts(index, $event.target.value, 'name', product)" />
        <textarea :value="product.description[0]" @input="updateDescription(0, $event.target.value, product)"></textarea>
        <textarea :value="product.description[1]" @input="updateDescription(1, $event.target.value, product)"></textarea>

        <input type="text" :value="product.img" @input="updateProducts(index, $event.target.value, 'img', product)" />
        <label>Level of automation</label>
        <p v-for="(automation, index) in product.levelOfAutomation" :key="index">
          {{ automation }}
        </p>
        <select multiple v-model="product.levelOfAutomation">
          <option v-for="(automation, index) in firebaseStore.stepsData[6]
            ?.automation" :value="automation.name" :key="index" @change="
    updateProducts(
      index,
      $event.target.value,
      'levelOfAutomation',
      product
    )
    ">
            {{ automation.name }}
          </option>
        </select>
        <label>Level of detail</label>
        <p v-for="(detail, index) in product.levelOfDetail" :key="index">
          {{ detail }}
        </p>
        <select multiple v-model="product.levelOfDetail">
          <option :value="1" @change="
            updateProducts(1, $event.target.value, 'levelOfDetail', product)
            ">
            1 - low level of detail
          </option>
          <option :value="2" :key="2" @change="
            updateProducts(2, $event.target.value, 'levelOfDetail', product)
            ">
            2 - low level of detail
          </option>
          <option :value="3" :key="3" @change="
            updateProducts(3, $event.target.value, 'levelOfDetail', product)
            ">
            3 - medium level of detail
          </option>
          <option :value="4" :key="4" @change="
            updateProducts(4, $event.target.value, 'levelOfDetail', product)
            ">
            4 - medium level of detail
          </option>
          <option :value="5" :key="5" @change="
            updateProducts(5, $event.target.value, 'levelOfDetail', product)
            ">
            5 - high level of detail
          </option>
          <option :value="6" :key="6" @change="
            updateProducts(6, $event.target.value, 'levelOfDetail', product)
            ">
            6 - high level of detail
          </option>
        </select>
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
