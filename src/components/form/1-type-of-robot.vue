<script setup>
import { ref, onMounted } from 'vue';

const product = ref({

    materials: ['plastic', 'metal'],
    process: ['finishing'],
    detail: [2],
    size: [2],
    batch: [2],
    automatisation: [2]
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
        process: ['finishing', 'dispensing'],
        detail: [1, 2],
        size: [1, 2, 3],
        batch: [1, 2, 3, 4, 5],
        automatisation: [1, 2, 3]
    },

]);

onMounted(() => {

    products.value = products.value.filter(function (item) {

        for (var i = 0; i < 6; i++) {


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
/* for (var key in product.value) {
            console.log(item[key].includes(product.value[key]))
                        if (item[key] == product.value[key])
                            console.log(item[key])
             
        }
 */

</script>

<template>
    <div class="form__content flex flex--column" id="Type-of-Robot">
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

        <br>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.products {
    width: 200px;
    padding: 20px 0;
}
</style>