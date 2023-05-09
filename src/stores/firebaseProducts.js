import { ref } from "vue";
import { defineStore } from "pinia";

export const useFirebaseProducts = defineStore("firebase", () => {
  const productData = ref([]);
  const productOne = ref([]);
  const productTwo = ref([]);

  const foo = async () => {
    const response = await fetch(
      "https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/products.json"
    );
    productData.value = await response.json();
    productOne.value = productData.value[0];
    productTwo.value = productData.value[1];
  };

  return { productData, productOne, productTwo, foo };
});
