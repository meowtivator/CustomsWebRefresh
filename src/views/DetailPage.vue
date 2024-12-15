<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">공매 상세</h2>
    <div v-if="item" class="p-4 bg-white rounded shadow-lg">
      <h3 class="text-lg font-semibold">{{ item.title }}</h3>
      <p class="text-sm text-gray-500">{{ item.date }}</p>
      <p class="mt-4">공매 ID: {{ item?.id }}</p>
      <p class="mt-2">공매 설명: {{ item?.description }}</p>
    </div>
    <div v-else class="text-gray-500">공매 데이터 불러오는 중...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

defineProps({id: String});
const route = useRoute();
const item = ref(null);

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

onMounted(() => {
  console.log(route.params);
  const id = route.params.id;
  const foundItem = mockData.find((mockItem) => mockItem.id == id);
  if(foundItem){
    item.value = foundItem;
  }else{
    item.value= {};
  }
})
</script>
