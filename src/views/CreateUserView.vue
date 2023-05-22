<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import "@/firebase.js";

const auth = getAuth();
const email = ref("");
const password = ref("");
const error = ref(null);
const router = useRouter();

const createAccount = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    router.push("/login");
  } catch {
    error.value = "Det lykkes ikke";
  }
};
</script>

<template>
  <div
    class="about flex flex--column flex__justify--center flex__align--center"
  >
    <h1>Create an account</h1>
    <form @submit.prevent="createAccount" class="flex flex--column">
      <label> Email: </label>
      <input type="email" v-model="email" required />
      <label> Password: </label>
      <input type="password" v-model="password" required />
      <Button
        type="submit"
        class="form__button--rounded-light flex__justify--center"
        name="Create Account"
      />
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.about {
  height: 100vh;
  width: 100%;
  font-family: primary-font-bold;
  background-color: $tertiary-color;
  padding: 30px;

  h1 {
    margin-bottom: 30px;
  }

  form {
    max-width: 400px;
    width: 100%;
    padding: 30px;
    background-color: $primary-color;
    border-radius: 22px;
    color: $contrast-light;
    font-family: primary-font-regular;
    font-size: 1.5rem;

    input {
      height: 30px;
      margin-bottom: 20px;
      border-radius: 8px;
      border: none;
      padding-left: 8px;

      &:focus {
        outline: none;
      }
    }

    button {
      font-size: 1.5rem;
    }
  }
}
</style>
