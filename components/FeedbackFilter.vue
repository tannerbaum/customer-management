<script setup lang="ts">
const { isActive } = defineProps<{ isActive: boolean; count: number }>();
</script>
<template>
  <button
    :class="[
      'rounded-full border-2 py-1 px-4',
      isActive ? 'text-white' : 'text-black bg-gray-100',
    ]"
  >
    <span
      :class="[
        'font-bold rounded-full px-2 mr-2',
        isActive ? 'bg-white text-zinc-500' : ' bg-transparent ',
      ]"
      v-if="count > 0"
      >{{ count }}</span
    >
    <slot />
  </button>
</template>
