<script setup>
import { getAuth } from "firebase/auth";
import "@/firebase.js";
import SignOut from "../components/Sign-out.vue";

const auth = getAuth();
</script>

<template>
  <nav class="admin-navigation flex flex__align--center flex__justify--between">
    <h2>Welcome back {{ auth.currentUser.email }}</h2>
    <SignOut />
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
@import "@/assets/flex.scss";

.admin-navigation {
  margin: 24px;
  font-family: "primary-font-regular";
}
</style>
