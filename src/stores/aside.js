import { ref } from "vue";
import { defineStore } from "pinia";

export const useAsideStore = defineStore("aside", () => {


    const list = ref([

    ]);

    let modalShow = ref(false);
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

        // Only toggle modalShow on mobile devices
        if (window.matchMedia("(max-width: 1136px)").matches) {
            modalShow.value = !modalShow.value;
        }
    };

    const btn_burger = () => {
        asideShow.value = !asideShow.value;
        modalShow.value = !modalShow.value;
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

        console.log(list.value)
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
    return { list, changeStep, btn_burger, modalShow, asideShow, localStorageOnLoad, onscroll };
});
