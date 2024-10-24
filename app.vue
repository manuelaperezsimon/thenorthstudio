<template>
  <div class="max-w-6xl mx-auto p-5">
    <h1 class="font-frank text-center text-3xl mb-10 text-gray-800">ROY</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <YachtCard v-for="yacht in yachts" :key="yacht.id" :yacht="yacht" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Yacht } from "./src/interfaces/yachts";
import YachtCard from "./src/components/Yacht/YachtCard.vue";

const yachts = ref<Yacht[]>([]);

onMounted(async () => {
  try {
    const res = await fetch("/api/yachts");
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    yachts.value = data.data;
  } catch (error) {
    console.error("Error fetching yachts:", error);
  }
});
</script>
