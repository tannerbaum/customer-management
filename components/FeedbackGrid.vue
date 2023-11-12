<script setup lang="ts">
import parseIso from "date-fns/parseISO";
import format from "date-fns/format";
import type { Feedback } from "~/server/types";

const sentimentEmoji = {
  happy: "😀",
  neutral: "😐",
  unhappy: "😞",
};

const { feedbackItems } = defineProps<{ feedbackItems: Feedback[] }>();

const humanFriendlyDate = (isoString: string) =>
  format(parseIso(isoString), "dd.MM.yyyy HH:mm");
</script>
<template>
  <div v-for="feedback in feedbackItems" class="grid grid-cols-3 gap-4">
    <div
      :class="[
        'p-4 rounded-md bg-gray-100 border-2',
        {
          happy: 'border-green-300',
          neutral: 'border-gray-400',
          unhappy: 'border-red-300',
        }[feedback.sentiment],
      ]"
    >
      <div
        class="flex justify-between items-center border-b-2 border-gray-400 pb-2 mb-4"
      >
        <div class="text-xs italic">
          {{ humanFriendlyDate(feedback.timestamp) }}
        </div>
        <div class="text-lg">
          {{ sentimentEmoji[feedback.sentiment] }}
        </div>
      </div>
      <div class="text-md">{{ feedback.feedbacktext }}</div>
      <div class="text-sm font-semibold mt-2 text-right">
        - {{ feedback.name }}
      </div>
    </div>
  </div>
</template>
