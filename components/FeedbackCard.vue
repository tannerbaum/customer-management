<script setup lang="ts">
import { format, parseISO } from "date-fns";
import type { Feedback } from "~/composables/useFeedbackItems";

const sentimentEmoji = {
  happy: "😀",
  neutral: "😐",
  unhappy: "😞",
};

const { feedbackItem } = defineProps<{ feedbackItem: Feedback }>();

const humanFriendlyDate = (isoString: string) =>
  format(parseISO(isoString), "dd.MM.yyyy HH:mm");
</script>
<template>
  <div
    :class="[
      'max-w-md p-4 rounded-md bg-stone-100 text-slate-600 shadow-lg',
      {
        happy: 'shadow-emerald-300/50',
        neutral: 'shadow-gray-400/50',
        unhappy: 'shadow-rose-300/50',
      }[feedbackItem.sentiment],
    ]"
  >
    <div
      class="flex justify-between items-center border-b-2 border-gray-400 pb-2 mb-4"
    >
      <div v-if="feedbackItem.timestamp" class="text-xs italic">
        {{ humanFriendlyDate(feedbackItem.timestamp) }}
      </div>
      <div class="text-lg">
        {{ sentimentEmoji[feedbackItem.sentiment] }}
      </div>
    </div>
    <div class="text-md line-clamp-3">{{ feedbackItem.feedbacktext }}</div>
    <div class="text-sm font-semibold mt-2 text-right">
      - {{ feedbackItem.name }}
    </div>
  </div>
</template>
