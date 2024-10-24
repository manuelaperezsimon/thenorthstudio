<template>
  <div
    class="bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <img
      :src="yacht.coverImage.url"
      alt="Yacht image"
      class="w-full h-64 object-cover rounded-t-lg"
    />
    <div class="">
      <p class="text-lg font-urbanGrotesk text-gray-400">
        Price: {{ yacht.buyPrice.EUR }} EUR
      </p>
      <p class="text-sm text-gray-600">
        Length: {{ yacht.length.meters }}m | Guests: {{ yacht.guestsNumber }} |
        Cabins: {{ yacht.cabinsNumber }}
      </p>
      <h2 class="text-2xl font-bold mt-4 text-gray-800">{{ yacht.name }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Yacht } from "~/src/interfaces/yachts";

const props = defineProps<{ yacht: Yacht }>();
</script>
