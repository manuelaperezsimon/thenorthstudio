<template>
  <div class="max-w-6xl mx-auto p-5">
    <NavBar
      :totalYachts="totalYachts"
      :isGrid="isGridView"
      @toggleView="isGridView = $event"
    />

    <div :class="gridClass">
      <YachtCard
        v-if="yachts.length"
        v-for="yacht in yachts"
        :key="yacht.id"
        :yacht="yacht"
      />
      <div v-else class="flex justify-center items-center col-span-full h-64">
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Yacht } from "./src/interfaces/yachts";
import YachtCard from "./src/components/Yacht/YachtCard.vue";
import "./assets/css/main.css";
import Spinner from "./src/components/Spinner/Spinner.vue";
import NavBar from "./src/components/NavBar/NavBar.vue";

const yachts = ref<Yacht[]>([]);
const totalYachts = ref<number>(0);

const isGridView = ref(true);

const gridClass = computed(() =>
  isGridView.value
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 gap-y-10"
    : "grid grid-cols-1 gap-y-10"
);

onMounted(async () => {
  try {
    const res = await fetch("/api/yachts");
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    totalYachts.value = data.meta.total;
    yachts.value = data.data;
  } catch (error) {
    console.error("Error fetching yachts:", error);
  }
});
</script>
