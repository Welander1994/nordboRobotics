<script setup>
</script>

<template>
    <div>
        <div class="reset">
            <span class="loader"></span>
            <h2 class="form__title">Resetting flow...</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.reset {
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    z-index: 999;
    /*     background-color: #fff; */
    backdrop-filter: blur(45px);
    user-select: none;
}

h2 {
    font-size: 32px;
}


.loader {
    position: relative;
    width: 100px;
    height: 16px;
}

.loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 6rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.loader:before,
.loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 2.5s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem $primary-color);
}

.loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem $primary-color;
    animation-name: pulsIn;
}

.loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 $primary-color;
}

@keyframes pulsIn {
    0% {
        box-shadow: inset 0 0 0 1rem $primary-color;
        opacity: 1;
    }

    50%,
    100% {
        box-shadow: inset 0 0 0 0 $primary-color;
        opacity: 0;
    }
}

@keyframes pulsOut {

    0%,
    50% {
        box-shadow: 0 0 0 0 $primary-color;
        opacity: 0;
    }

    100% {
        box-shadow: 0 0 0 1rem $primary-color;
        opacity: 1;
    }
}
</style>