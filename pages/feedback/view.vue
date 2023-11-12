<script setup lang="ts">
const { data, pending, refresh } = await useFetch("/api/feedback");

type Filters = {
  happy: boolean;
  neutral: boolean;
  unhappy: boolean;
};

const filters = ref<Filters>({
  happy: true,
  neutral: true,
  unhappy: true,
});

const feedbackItems = computed(() => data.value?.feedback ?? []);

const totalFeedbackItems = computed(() => ({
  happy:
    feedbackItems.value.filter((item) => item.sentiment === "happy").length ??
    0,
  neutral:
    feedbackItems.value.filter((item) => item.sentiment === "neutral").length ??
    0,
  unhappy:
    feedbackItems.value.filter((item) => item.sentiment === "unhappy").length ??
    0,
}));

const filteredFeedbackItems = computed(() => {
  if (!feedbackItems.value) return [];
  return feedbackItems.value.filter((item) => {
    if (filters.value.happy && item.sentiment === "happy") return true;
    if (filters.value.neutral && item.sentiment === "neutral") return true;
    if (filters.value.unhappy && item.sentiment === "unhappy") return true;
    return false;
  });
});

const onClick = (updatedFilters: Filters) => {
  filters.value = updatedFilters;
};
</script>
<template>
  <div class="p-16">
    <div class="flex justify-center">
      <div class="mb-8 flex gap-2">
        <FeedbackFilter
          :is-active="filters.happy"
          :count="totalFeedbackItems.happy"
          :class="
            filters.happy ? 'bg-green-300 border-green-300' : 'border-green-300'
          "
          @click="onClick({ ...filters, happy: !filters.happy })"
          >Happy</FeedbackFilter
        >
        <FeedbackFilter
          :is-active="filters.neutral"
          :count="totalFeedbackItems.neutral"
          :class="
            filters.neutral ? 'bg-gray-300 border-gray-300' : 'border-gray-300'
          "
          @click="onClick({ ...filters, neutral: !filters.neutral })"
          >Neutral</FeedbackFilter
        >
        <FeedbackFilter
          :is-active="filters.unhappy"
          :count="totalFeedbackItems.unhappy"
          :class="
            filters.unhappy ? 'bg-red-300 border-red-300' : 'border-red-300'
          "
          @click="onClick({ ...filters, unhappy: !filters.unhappy })"
          >Unhappy</FeedbackFilter
        >
      </div>
    </div>
    <div v-if="pending">Loading...</div>
    <FeedbackGrid
      v-if="filteredFeedbackItems"
      :feedback-items="filteredFeedbackItems"
    />
  </div>
</template>
