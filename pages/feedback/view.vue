<script setup lang="ts">
const { data, pending, refresh } = await useFetch("/api/feedback");
const { filters, filteredFeedbackItems, totalFeedbackItems, onClick } =
  useFeedbackItems(data);

const onRefreshClick = () => {
  refresh();
};
</script>
<template>
  <Layout class="p-16">
    <div class="flex justify-center">
      <div class="mb-8 flex gap-2">
        <FeedbackFilter
          :is-active="filters.happy"
          :count="totalFeedbackItems.happy"
          :class="
            filters.happy
              ? 'bg-emerald-300 border-emerald-300'
              : 'border-emerald-300'
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
            filters.unhappy ? 'bg-rose-300 border-rose-300' : 'border-rose-300'
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
    <div class="mt-16 flex justify-center">
      <button
        class="text-black w-28 h-8 px-6 rounded-lg bg-blue-400"
        @click="onRefreshClick"
      >
        Refresh
      </button>
    </div>
  </Layout>
</template>
