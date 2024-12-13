<template>
  <div>
    <Header />
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">공매 리스트</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="item in auctionList"
          :key="item.id"
          class="card p-4 mb-4 bg-gray-300 rounded-xl shadow-lg transition-all transform duration-300 group group-hover:translate-y-2"
        >
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-gray-500">{{ item.date }}</p>
          <button
            @click="goToDetails(item)"
            class="bg-blue-500 text-white px-4 py-2 mt-4 rounded transition hover:bg-blue-600"
          >
            자세히 보기
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      auctionList: [
        { id: 1, title: "공매 1", date: "2024-01-15" },
        { id: 2, title: "공매 2", date: "2024-02-01" },
      ],
    };
  },
  methods: {
    goToDetails(item) {
      console.log(item);
      this.$router.push({ name: "DetailPage", params: { id: item.id } });
    },
  },
};
</script>
