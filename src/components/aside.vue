<script setup>
import { ref, onMounted } from 'vue';

let asideShow = ref(false);

const list = ref([
    {
        name: 'Type of Robot',
        id: 'Type-of-Robot',
        active: true,
    },
    {
        name: 'Material',
        id: 'Material',
        active: false,
    },
    {
        name: 'Process',
        id: 'Process',
        active: false,
    },
    {
        name: 'Level of detail',
        id: 'Level-of-detail',
        active: false,
    },
    {
        name: 'Size of product',
        id: 'Size-of-product',
        active: false,
    },
    {
        name: 'Batch size',
        id: 'Batch-size',
        active: false,
    },
    {
        name: 'Level of Automatisation',
        id: 'Level-of-Automatisation',
        active: false,
    },
    {
        name: 'Solution',
        id: 'Solution',
        active: false,

    }
])

onMounted(() => {

    if (!JSON.parse(localStorage.getItem('aside'))) {
        return;
    } else {
        list.value = JSON.parse(localStorage.getItem('aside'));
    }

    for (let i = 0; i < list.value.length; i++) {
        if (list.value[i].active === true) {
            window.location.replace('/#' + list.value[i].id);
        }
    }

})

const changeStep = (e) => {
    for (let i = 0; i < list.value.length; i++) {
        if (list.value[i].active === true) {
            list.value[i].active = false;
        }
    }
    e.active = true;
    localStorage.setItem("aside", JSON.stringify(list.value));
    asideShow.value = !asideShow.value;
}



const btn_burger = () => {
    asideShow.value = !asideShow.value;

}

</script>

<template>
    <aside class="formnav">
        <div class="btn__burger">
            <p @click="btn_burger()"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                </svg></p>
        </div>
        <header :class="{ btn__burger__show: asideShow }">
            <nav>
                <ul class="flex flex--column flex__justify--between flex">
                    <li class="flex flex__alige--center" v-for="item in list">
                        <svg v-if="item.active" width="11" height="17" viewBox="0 0 11 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_10468)">
                                <path
                                    d="M0 0.522186V2.06974C0 2.48088 0.183333 2.87354 0.497619 3.123L6.77897 8.09827C7.03214 8.30153 7.03214 8.70806 6.77897 8.9067L0.497619 13.8773C0.183333 14.1268 0 14.5148 0 14.9306V16.4782C0 16.9078 0.462698 17.148 0.785714 16.8939L10.7643 8.99909C11.0786 8.74963 11.0786 8.25072 10.7643 8.00588L0.785714 0.106425C0.462698 -0.15227 0 0.0925666 0 0.522186Z"
                                    fill="#363973" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_10468">
                                    <rect width="11" height="17" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <a class="formnav__link" :class="{ selected: item.active }" @click="changeStep(item)"
                            :href="'#' + item.id">{{ item.name }}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    </aside>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';
@import '../assets/flex.scss';

.btn__burger {
    display: none;
    width: 100vw;
    background-color: $contrast-light;
    padding: 5px;
    border-top: 1px solid $tertiary-color;
    border-bottom: 1px solid $tertiary-color;
}

.formnav {
    position: fixed;
    margin-top: 167px;
    width: 245px;
    height: calc(100vh - 100px);
    transition: .5s all;
    z-index: 9;

    ul {
        padding: 25px 0;
        width: 245px;
    }

    li {
        list-style: none;
        padding: 15px 0;
        position: relative;


        svg {
            position: absolute;
            left: -25px;
            animation: slide-right .7s ease;

        }

        a {
            padding: 0;
            color: $primary-color;
            user-select: none;

        }
    }

    .formnav__link {
        font-family: primary-font-extrabold;
        text-decoration: none;
        opacity: 45%;
        font-size: 1.2rem;
        display: flex;



        &:hover {
            opacity: 100%;
        }



    }

    .selected {
        opacity: 100%;
        font-size: 1.4rem;
    }
}

@keyframes slide-right {
    0% {
        -webkit-transform: translateX(-10px);
        transform: translateX(-10px);
        opacity: 0%;
    }

    100% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
        opacity: 100%;
    }
}


@media only screen and (max-width: $breakpoint-lg) {
    .formnav {


        li {
            margin-left: 15%;
        }
    }

    header {
        height: calc(100vh - 100px);
        background-color: $contrast-light;
        transform: translateX(-300px);
        transition: .5s;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    }

    .btn__burger {
        display: block;


    }

    .btn__burger__show {
        transform: translateX(0px);
        width: 250px;
    }




}
</style>