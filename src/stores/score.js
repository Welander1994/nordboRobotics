import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { useFirebaseProduct } from "@/stores/products";


export const useScore = defineStore("useScoreProduct", () => {
    const firebaseProduct = useFirebaseProduct();

    const getProductFromLocalStorage = () => {
        const product = localStorage.getItem("product");
        return product ? JSON.parse(product) : null;
    };

    let userSelections = getProductFromLocalStorage() || {
        LevelOfAutomation: "",
        LevelOfDetail: 0,
        SizeOfBatch: 0,
        SizeOfProduct: 0,
        TypeOfMaterial: "",
        TypeOfProcess: "",
        TypeOfRobot: "",
    };

    const calculateScore = (product, userSelections) => {
        let score = 0;
        if (product.typeOfRobot === userSelections.TypeOfRobot) {
            score += 1;
        }
        if (product.typeOfMaterial === userSelections.TypeOfMaterial) {
            score += 1;
        }
        if (product.typeOfProcess === userSelections.TypeOfProcess) {
            score += 1;
        }
        score += 5 - Math.abs(product.levelOfDetail - userSelections.LevelOfDetail);
        score += 5 - Math.abs(product.sizeOfProduct - userSelections.SizeOfProduct);
        score += 5 - Math.abs(product.sizeOfBatch - userSelections.SizeOfBatch);

        if (product.levelOfAutomation === userSelections.LevelOfAutomation) {
            score += 1;
        }

        return score;
    };

    onMounted(async () => {
        await firebaseProduct.fetchProduct();
        updateScores();
    });

    const clearFlow = () => {
        localStorage.clear();
        window.location.reload();
    }

    const updateScoresOnClick = async () => {
        userSelections = JSON.parse(localStorage.getItem("product"));
        updateScores();
    }

    const highestScoreProduct = ref(null);

    const updateScores = () => {

        let highScore = 0;
        firebaseProduct.product.forEach((product) => {
            const score = calculateScore(product, userSelections);
            if (score > highScore) {
                highScore = score;
                highestScoreProduct.value = product;
            }
        });

        /*         console.log(calculateScore(firebaseProduct.product[0], userSelections));
                console.log(calculateScore(firebaseProduct.product[1], userSelections));
                console.log(calculateScore(firebaseProduct.product[2], userSelections));
                console.log(highestScoreProduct.value); */
    };




    return { clearFlow, updateScoresOnClick, updateScores, highestScoreProduct, calculateScore, userSelections, getProductFromLocalStorage };
});
