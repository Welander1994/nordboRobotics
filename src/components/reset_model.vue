<script setup>
console.log("test");
</script>

<template>
    <div>
        <div class="reset">
            <h2 class="form__title">Resetting flow...</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.reset {
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 999;
    backdrop-filter: blur(15px);

    user-select: none;
}
</style>