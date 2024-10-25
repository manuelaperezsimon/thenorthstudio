<template>
  <div class="max-w-6xl mx-auto py-6">
    <h1 class="font-frank text-center text-3xl mb-10 text-gray-800 font-light">
      ROY
    </h1>

    <header
      class="flex justify-between items-center border-b border-gray-200 pb-2"
    >
      <div>
        <h2 class="text-lg text-gray-800 font-light font-urbanBold">
          YACHTS FOR SALE · {{ totalYachts }}
        </h2>
      </div>

      <div
        class="flex items-center space-x-4 text-gray-600 font-light font-urbanMedium"
      >
        <span class="text-gray-500">| </span>

        <span class="text-gray-500">View</span>

        <button
          @click="$emit('toggleView', true)"
          class="p-1 border border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
          :class="{ 'bg-gray-300': isGrid }"
          aria-label="Grid View"
        >
          <i class="fas fa-th"></i>
        </button>

        <button
          @click="$emit('toggleView', false)"
          class="p-1 border border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
          :class="{ 'bg-gray-300': !isGrid }"
          aria-label="List View"
        >
          <i class="fas fa-th-list"></i>
        </button>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ totalYachts: number; isGrid: boolean }>();
</script>
