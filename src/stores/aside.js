import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAsideStore = defineStore("aside", () => {
    const list = ref([
        {
            name: "Type of Robot",
            id: "Type-of-Robot",
            active: true,
        },

        {
            name: "Material",
            id: "Material",
            active: false,
        },
        {
            name: "Process",
            id: "Process",
            active: false,
        },
        {
            name: "Level of detail",
            id: "Level-of-detail",
            active: false,
        },
        {
            name: "Size of product",
            id: "Size-of-product",
            active: false,
        },
        {
            name: "Batch size",
            id: "Batch-size",
            active: false,
        },
        {
            name: "Level of Automatisation",
            id: "Level-of-Automatisation",
            active: false,
        },
        {
            name: "Solution",
            id: "Solution",
            active: false,
        },
    ]);

    let asideShow = ref(false);

    const changeStep = (e) => {
        for (let i = 0; i < list.value.length; i++) {
            if (list.value[i].active === true) {
                list.value[i].active = false;
            }
        }
        e.active = true;
        localStorage.setItem("aside", JSON.stringify(list.value));
        asideShow.value = !asideShow.value;
    };

    const btn_burger = () => {
        asideShow.value = !asideShow.value;
    };

    const localStorageOnLoad = () => {

        if (!JSON.parse(localStorage.getItem("aside"))) {
            return;
        } else {
            list.value = JSON.parse(localStorage.getItem("aside"));
        }

        for (let i = 0; i < list.value.length; i++) {
            if (list.value[i].active === true) {
                window.location.replace("/#" + list.value[i].id);
            }
        }
    }

    const onscroll = () => {

        for (let i = 0; i < list.value.length; i++) {
            const box = document.querySelectorAll("#" + list.value[i].id);
            const rect = box[0].getBoundingClientRect();

            const viewportWidth = document.documentElement.clientWidth;
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            const isInViewport =
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= viewportHeight &&
                rect.right <= viewportWidth;

            if (isInViewport) {
                changeStep(list.value[i]);
            }

        }


    }

    return { list, changeStep, btn_burger, asideShow, localStorageOnLoad, onscroll };
});