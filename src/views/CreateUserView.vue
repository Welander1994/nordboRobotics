<script setup>
import { ref } from "vue";
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
    // User has been created successfully
    const user = userCredential.user;
    router.push("/login");
  } catch {
    // Handle error
    error.value = "det lykkes ikke";
  }
};
</script>

<template>
  <div class="about">
    <h1>Create an account</h1>
    <form @submit.prevent="createAccount">
      <label>
        Email:
        <input type="email" v-model="email" required />
      </label>
      <label>
        Password:
        <input type="password" v-model="password" required />
      </label>
      <button type="submit">Create Account</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
