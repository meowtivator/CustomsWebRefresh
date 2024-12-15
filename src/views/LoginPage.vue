<template>
  <div class="flex items-center justify-center bg-gray-500 p-4">
    <h1 class="text-3xl font-bold">로그인</h1>
  </div>
  <form
    @submit.prevent="login"
    class="flex flex-col items-center bg-green-300 p-4 gap-4"
  >
    <input
      v-model="username"
      class="border-2 rounded-2xl p-4 hover:border-black"
      placeholder="아이디 또는 이메일"
    />
    <input
      v-model="password"
      class="border-2 rounded-2xl p-4 hover:border-black"
      placeholder="비밀번호"
      type="password"
    />
    <input type="checkbox" class="" />
    <!-- id와 pw가 채워지지 않으면 버튼 비활성화 기능 추가-->
    <button class="rounded-2xl bg-gray-300 p-4">로그인</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const emit = defineEmits(["login-success"]); // 이벤트 정의
const username = ref("");
const password = ref("");
const errorMessage = ref("");

const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post("http://localhost:3000/login", {
      // ref의 값은 .value를 통해 접근한다.
      username: username.value,
      password: password.value,
    });

    // JWT 토큰 저장(자동 로그인을 위한 값)
    localStorage.setItem("token", response.data.token);

    emit("login-success", username.value); //로그인 성공 이벤트 발생
    router.push("/"); // 홈 페이지로 이동
  } catch (error) {
    errorMessage.value =
      error.response?.data?.message || "로그인에 실패했습니다.";
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
