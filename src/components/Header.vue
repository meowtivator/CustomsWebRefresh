<template>
  <header class="flex items-center bg-blue-500 text-white p-4">
    <span
      @click="goHome()"
      tabindex="0"
      class="material-icons text-4xl mr-2 cursor-pointer transition transform duration-300 hover:scale-125"
      >home</span
    >
    <h1 @click="goHome()" class="text-xl inline font-bold">
      CustomsWebRefresh
    </h1>
    <nav>
      <ul class="flex space-x-4">
        <li><router-link to="/CustomsWebRefresh/">홈</router-link></li>
        <li><router-link to="/CustomsWebRefresh/auction-list">공매 물품 조회</router-link></li>
        <li><router-link to="/CustomsWebRefresh/auction-guide">체화 공매 안내</router-link></li>
        <li><router-link to="/CustomsWebRefresh/bid-history">입찰 내역 조회</router-link></li>
        <li><router-link to="/CustomsWebRefresh/refund-info">환불 계좌 정보</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goHome() {
      console.log("home!");
      this.$router.push({ name: "MainPage" });
    },
  },
};
</script>
