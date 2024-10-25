<template>
  <div
    class="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <img
      :src="yacht.coverImage.url"
      :alt="yacht.name"
      class="w-full h-64 object-cover"
    />
    <div class="">
      <p class="text-sm font-urbanMedium font-light text-gray-400 mb-1 mt-2">
        Price: €{{ yacht.buyPrice.EUR.toLocaleString("de-DE") }}
      </p>
      <p class="text-sm text-gray-600 font-light font-urbanMedium">
        Length: {{ yacht.length.meters }}m | Guests: {{ yacht.guestsNumber }} |
        Cabins: {{ yacht.cabinsNumber }}
      </p>
      <h2 class="text-xl mt-4 text-gray-800 font-light font-urbanBold">
        {{ yacht.name }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Yacht } from "../../interfaces/yachts";

const props = defineProps<{ yacht: Yacht }>();
</script>
