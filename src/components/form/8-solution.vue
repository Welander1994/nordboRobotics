<script setup>
import { ref, onMounted } from 'vue';

const product = ref({
    materials: ['metal'],
    process: ['dispensing'],
    detail: [2],
    size: [2],
    batch: [2],
    automatisation: [3]
});

const products = ref([
    {
        /* we have to find controller for robot not the robot */
        robot: 'Nachi',
        materials: ['wood', 'plastic'],
        process: ['sanding', 'finishing'],
        detail: [1, 2, 3],
        size: [1, 2],
        batch: [1, 2, 3, 4, 5],
        automatisation: [1, 2]
    },
    {
        robot: 'Universal Robots',
        materials: ['metal', 'plastic'],
        process: ['sanding', 'finishing', 'painting'],
        detail: [1, 2],
        size: [1, 2, 3, 4, 5],
        batch: [1, 2],
        automatisation: [1, 2, 3, 4]
    },
    {
        robot: 'Kuka',
        materials: ['metal'],
        process: ['sanding', 'dispensing'],
        detail: [1, 2],
        size: [1, 2, 3],
        batch: [1, 2, 3, 4, 5],
        automatisation: [1, 2, 3]
    },

]);

onMounted(() => {

    products.value = products.value.filter(function (item) {
        for (var i = 0; i < 100; i++) {

            if (item.materials.includes(product.value.materials[i])) {

                if (item.process.includes(product.value.process[i])) {
                    if (item.detail.includes(product.value.detail[i])) {
                        if (item.size.includes(product.value.size[i])) {
                            if (item.batch.includes(product.value.batch[i])) {
                                if (item.automatisation.includes(product.value.automatisation[i])) {

                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    });



})


</script>

<template>
    <div class="form__content" id="Solution">
        <p>robot: {{ product.robot }}</p>
        <p>materials: {{ product.materials }}</p>
        <p>process: {{ product.process }}</p>
        <p>detail: {{ product.detail }}</p>
        <p>size: {{ product.size }}</p>
        <p>batch: {{ product.batch }}</p>
        <p>automatisation: {{ product.automatisation }}</p>
        <div class="flex">
            <div class="products flex flex--column flex__justify--between" v-for="item in products">
                <p>robot: {{ item.robot }}</p>
                <p>materials: {{ item.materials }}</p>
                <p>process: {{ item.process }}</p>
                <p>detail: {{ item.detail }}</p>
                <p>size: {{ item.size }}</p>
                <p>batch: {{ item.batch }}</p>
                <p>automatisation: {{ item.automatisation }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.products {
    width: 300px;
    padding: 20px 0;
}

p {
    font-size: 1.6rem;
}
</style>