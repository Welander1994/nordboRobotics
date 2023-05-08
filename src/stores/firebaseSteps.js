import { ref } from "vue";
import { defineStore } from "pinia";
import { useAsideStore } from "@/stores/aside";

export const usefirebaseSteps = defineStore("firebase", () => {
  const selectedIndex = ref(null);

  const product = ref({
    TypeOfRobot: "",
    TypeOfMaterial: "",
    TypeOfProcess: "",
    LevelOfDetail: "",
    SizeOfProduct: "",
    SizeOfBatch: "",
    LevelOfAutomation: "",
  });

  const stepsData = ref([]);
  const typeOfRobot = ref([]);
  const typeOfMaterial = ref([]);
  const typeOfWork = ref([]);
  const LevelOfDetail = ref([]);
  const sizeOfProduct = ref([]);
  const sizeOfBatch = ref([]);
  const LevelOfAutomation = ref([]);

  const addToProduct = (type, e) => {
    switch (type) {
      case "typeOfRobot":
        product.value.TypeOfRobot = e;
        break;
      case "typeOfMaterial":
        product.value.TypeOfMaterial = e;
        break;
      case "typeOfWork":
        product.value.TypeOfProcess = e;
        break;
      case "LevelOfAutomation":
        product.value.LevelOfAutomation = e;
        break;
    }
    localStorage.setItem("product", JSON.stringify(product.value));
  };

  const fetchStepsData = async () => {
    const response = await fetch(
      "https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/steps.json"
    );
    stepsData.value = await response.json();
    typeOfRobot.value = stepsData.value[0];
    typeOfMaterial.value = stepsData.value[1];
    typeOfWork.value = {
      sanding: stepsData.value[2].process[0].description,
      finishing: stepsData.value[2].process[1].description,
      painting: stepsData.value[2].process[2].description,
      dispensing: stepsData.value[2].process[3].description,
    };
    LevelOfDetail.value = stepsData.value[3];
    sizeOfProduct.value = stepsData.value[4];
    sizeOfBatch.value = stepsData.value[5];
    LevelOfAutomation.value = stepsData.value[6];

    if (!JSON.parse(localStorage.getItem("product"))) {
      return;
    } else {
      product.value = JSON.parse(localStorage.getItem("product"));
    }
  };

  return {
    stepsData,
    typeOfRobot,
    typeOfMaterial,
    typeOfWork,
    LevelOfDetail,
    sizeOfProduct,
    sizeOfBatch,
    LevelOfAutomation,
    product,
    selectedIndex,
    fetchStepsData,
    addToProduct,
  };
});
