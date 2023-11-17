<script setup lang="ts">
const router = useRouter();
const currentRoute = router.currentRoute;
</script>
<template>
  <div class="min-h-screen bg-blue-200 text-white">
    <NuxtLink
      v-if="currentRoute.path !== '/'"
      to="/"
      class="font-bold text-blue-500"
      >&lt;-- Back home</NuxtLink
    >
    <div class="container mx-auto pt-4 md:px-8 xl:px-14">
      <slot />
    </div>
  </div>
</template>
