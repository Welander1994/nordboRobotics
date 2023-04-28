<script setup>
import { getAuth } from "firebase/auth";
import "@/firebase.js";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = getAuth();

const signOut = async () => {
  try {
    await auth.signOut();
    router.push("/login");
  } catch {
    console.error("noget gik galt");
  }
};
</script>

<template>
  <button class="sign-out-btn" @click="signOut">Sign out</button>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.sign-out-btn {
  cursor: pointer;
  color: $contrast-light;
  background-color: $primary-color;
  width: 60px;
  height: 30px;
  font-family: "primary-font-regular";
  border-radius: 11px;
  font-size: 1rem;
  border: solid 1.5px $primary-color;
  box-shadow: 0px 2px 2px rgba($contrast-dark, 0.1);
}
</style>
