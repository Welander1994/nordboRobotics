import { ref } from "vue";
import { defineStore } from "pinia";

export const useFirebaseProduct = defineStore("firebaseProduct", () => {
  const product = ref([]);

  const fetchProduct = async () => {
    const response = await fetch(
      "https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/products.json"
    );
    const data = await response.json();
    product.value.push(...data);
  };

  return { product, fetchProduct };
});
