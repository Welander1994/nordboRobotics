import { ref } from "vue";
import { defineStore } from "pinia";

export const useFirebaseData = defineStore("firebase", () => {

    const stepsData = ref([]);
    const typeOfRobot = ref([]);
    const typeOfMaterial = ref([]);
    const typeOfWork = ref([]);
    const LevelOfDetail = ref([]);
    const sizeOfProduct = ref([]);
    const sizeOfBatch = ref([]);
    const LevelOfAutomation = ref([]);

    const foo = async () => {
        const response = await fetch('https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/steps.json')
        stepsData.value = await response.json();
        typeOfRobot.value = stepsData.value[0];
        typeOfMaterial.value = stepsData.value[1];
        typeOfWork.value = {
            sanding: stepsData.value[2].process[0],
            finishing: stepsData.value[2].process[1],
            painting: stepsData.value[2].process[2],
            dispensing: stepsData.value[2].process[3],
        };
        LevelOfDetail.value = stepsData.value[3].description;
        sizeOfProduct.value = stepsData.value[4].description;
        sizeOfBatch.value = stepsData.value[5].description;
        LevelOfAutomation.value = stepsData.value[6].description;

        console.log(LevelOfAutomation);
    }



    return { stepsData, typeOfRobot, typeOfMaterial, typeOfWork, LevelOfDetail, sizeOfProduct, sizeOfBatch, LevelOfAutomation, foo };
});
