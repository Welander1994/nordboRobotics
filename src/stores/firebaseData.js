import { ref, onMounted } from "vue";
import { defineStore } from "pinia";

export const useFirebaseData = defineStore("firebase", () => {

    const list = ref([]);

    onMounted(async () => {
        const response = await fetch('https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/steps.json')
        list.value = await response.json();


    })

    return { list };
});
