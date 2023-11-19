<script setup lang="ts">
const { data } = await useFetch("/api/feedback");

const fallbackItem: Feedback = {
  id: 1,
  email: "john@aol.com",
  name: "John Doe",
  feedbacktext: "This could be your feedback here!",
  sentiment: "happy",
  timestamp: "2021-10-01T12:00:00.000Z",
};

const visibleFeedbackItem = ref(0);

onMounted(() => {
  const feedbackItems = data.value?.feedback;

  if (!feedbackItems || feedbackItems.length === 0) return;

  setInterval(() => {
    visibleFeedbackItem.value =
      visibleFeedbackItem.value === feedbackItems.length - 1
        ? 0
        : visibleFeedbackItem.value + 1;
  }, 10000);
});
</script>
<template>
  <div
    class="mt-8 flex flex-col-reverse border-dashed border-4 border-slate-500 rounded-lg md:flex-row md:basis-96"
  >
    <div
      class="flex flex-col gap-2 justify-center items-center bg-slate-500 py-10 px-12 sm:basis-1/2 md:max-w-lg md:items-start lg:basis-2/3"
    >
      <h2 class="mb-4 text-3xl">View others' feedback</h2>
      <p class="mb-6">
        In this application, everyone's name and feedback is publicly visible.
        Questionable? Sure. Good for demos? You bet.
      </p>
      <NuxtLink to="/feedback/view">
        <button class="h-10 w-48 px-6 rounded-lg bg-blue-900 text-white">
          View
        </button>
      </NuxtLink>
    </div>
    <div
      class="bg-slate-300 flex justify-center p-6 sm:px-0 basis-60 sm:basis-1/2 lg:basis-1/3 grow"
    >
      <Transition
        v-if="data?.feedback"
        class="grow self-center md:basis-2/3 md:grow-0"
        mode="out-in"
        enter-active-class="duration-1000 ease-in"
        enter-from-class="opacity-0 "
        enter-to-class="opacity-100"
        leave-active-class="duration-1000 ease-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0 "
      >
        <FeedbackCard
          v-if="visibleFeedbackItem === 0"
          :feedback-item="data.feedback[0]"
        />
        <FeedbackCard
          v-else-if="visibleFeedbackItem === 1"
          :feedback-item="data.feedback[1]"
        />
        <FeedbackCard
          v-else-if="visibleFeedbackItem === 2"
          :feedback-item="data.feedback[2]"
        />
      </Transition>
      <FeedbackCard
        v-else
        class="grow self-center md:basis-2/3 md:grow-0"
        :feedback-item="fallbackItem"
      />
    </div>
  </div>
</template>
