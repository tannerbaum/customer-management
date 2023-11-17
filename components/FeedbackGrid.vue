<script setup lang="ts">
import type { Feedback } from "~/server/types";

const { feedbackItems } = defineProps<{ feedbackItems: Feedback[] }>();
</script>
<template>
  <div class="grid grid-cols-3 gap-4">
    <FeedbackCard v-for="feedback in feedbackItems" :feedbackItem="feedback" />
  </div>
</template>
