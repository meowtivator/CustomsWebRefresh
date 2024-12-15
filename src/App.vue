<template>
  <div>
    <!-- Header 컴포넌트 -->
    <Header :isLoggedIn="isLoggedIn" :username="username" />
    <router-view @login-success="handleLogin" />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLoggedIn = ref(false);
const username = ref("");

// LoginPage.vue에서 로그인 성공 시 호출
const handleLogin = (user) => {
  isLoggedIn.value = true;
  username.value = user;
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
