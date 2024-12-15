<template>
  <header class="flex items-center bg-blue-500 text-white p-4">
    <span
      @click="goHome"
      tabindex="0"
      class="material-icons text-4xl mr-2 cursor-pointer transition transform duration-300 hover:scale-125"
      >home</span
    >
    <h1
      @click="goHome"
      class="text-2xl font-extrabold cursor-pointer hover:text-yellow-300 transition-colors duration-300"
    >
      CustomsWebRefresh
    </h1>
    <nav>
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" active-class="font-bold text-yellow-300"
            >홈</router-link
          >
        </li>
        <li>
          <router-link
            to="/auction-list"
            active-class="font-bold text-yellow-300"
            >공매 물품 조회</router-link
          >
        </li>
        <li>
          <router-link
            to="/auction-guide"
            active-class="font-bold text-yellow-300"
            >체화 공매 안내</router-link
          >
        </li>
        <li>
          <router-link
            to="/bid-history"
            active-class="font-bold text-yellow-300"
            >입찰 내역 조회</router-link
          >
        </li>
        <li>
          <router-link
            to="/refund-info"
            active-class="font-bold text-yellow-300"
            >환불 계좌 정보</router-link
          >
        </li>
        <li v-if="isLoggedIn" class="animate-pulse-scale">안녕하세요, {{ username }}!</li>
        <li v-else>
          <router-link to="/login" active-class="font-bold text-yellow-300"
            >로그인</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goHome() {
  router.push({ name: "MainPage" });
}

defineProps({
  isLoggedIn: Boolean,
  username: String,
});
</script>
