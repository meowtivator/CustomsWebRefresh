<template>
    <Header />
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">공매 상세</h2>
    <div class="p-4 bg-white rounded shadow-lg">
      <h3 class="text-lg font-semibold">{{ item.title }}</h3>
      <p class="text-sm text-gray-500">{{ item.date }}</p>
      <p class="mt-4">공매 ID: {{ item.id }}</p>
      <p class="mt-2">공매 설명: {{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPage",
  data() {
    return {
      item: {},
    };
  },
  mounted() {
    const id = this.$route.params.id;
    const mockData = [
      {
        id: 1,
        title: "공매 1",
        date: "2024-01-15",
        description: "공매 1에 대한 설명입니다.",
      },
      {
        id: 2,
        title: "공매 2",
        date: "2024-02-01",
        description: "공매 2에 대한 설명입니다.",
      },
    ];
    this.item = mockData.find((item) => item.id == id);
  },
};
</script>
