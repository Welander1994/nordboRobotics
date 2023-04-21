<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import "@/firebase.js";

const auth = getAuth();
const email = ref("");
const password = ref("");
const error = ref(null);
const router = useRouter();

const signInAccount = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    // User has been created successfully
    const user = userCredential.user;
    router.push("/admin");
  } catch {
    // Handle error
    error.value = "du er ikke en bruger";
  }
};
</script>

<template>
  <div class="home">
    <h1>Login</h1>
    <form @submit.prevent="signInAccount">
      <label>
        Email:
        <input type="email" v-model="email" required />
      </label>
      <label>
        Password:
        <input type="password" v-model="password" required />
      </label>
      <button type="submit">Login</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
