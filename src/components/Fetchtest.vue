<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="product in products" :key="product.name">
        <h3>{{ product.name }}</h3>
        <img :src="product.img" alt="Product Image" />
        <p>{{ product.description[0] }}</p>
        <p>
          Level of Automation:
          {{
            product["level-of-automation"]
              ? product["level-of-automation"].join(", ")
              : ""
          }}
        </p>
        <p>Level of Detail: {{ product["level-of-detail"] }}</p>
        <p>Size of Batch: {{ product["size-of-batch"] }}</p>
        <p>Size of Product: {{ product["size-of-product"] }}</p>
        <p>
          Type of Material:
          {{
            product["type-of-material"]
              ? product["type-of-material"].join(", ")
              : ""
          }}
        </p>
        <p>
          Type of Process:
          {{
            product["type-of-process"]
              ? product["type-of-process"].join(", ")
              : ""
          }}
        </p>
        <p>
          Type of Robot:
          {{
            product["type-of-robot"] ? product["type-of-robot"].join(", ") : ""
          }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const products = ref([]);

onMounted(async () => {
  const response = await fetch(
    "https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  );
  products.value = await response.json();
});
</script>
