<script setup lang="ts"></script>
<template>
  <Layout>
    <h1
      class="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight text-center text-blue-600 pt-14"
    >
      Customer Management Inc
    </h1>
    <p
      class="text-xl text-center font-extrabold text-blue-400 mt-4 max-w-xl mx-auto"
    >
      The customer is always right. But what about when they aren't? We aren't
      managing that, but we are managing their feedback.
    </p>
    <div class="mt-8 text-blue-400">Recent Feedback:</div>
    <div class="flex justify-center gap-12">
      <div class="bg-slate-500 rounded-xl p-8 basis-1/2 max-w-md">
        <h2 class="text-center mb-4">View others' feedback</h2>
        <p class="mb-4">
          In this application, everyone's name and feedback is publicly visible.
          Questionable? Sure. Good for demos? You bet.
        </p>
        <NuxtLink to="/feedback/view">
          <button class="h-10 px-6 rounded-lg bg-blue-900 text-white">
            View
          </button>
        </NuxtLink>
      </div>
      <div
        class="bg-slate-100 text-slate-700 rounded-xl p-8 basis-1/2 max-w-md"
      >
        <h2 class="text-center mb-4">Submit your own feedback</h2>
        <p class="mb-4">
          Inspired to leave your own feedback? It's a simple form away.
        </p>
        <NuxtLink to="/feedback/submit">
          <button class="h-10 px-6 rounded-lg bg-blue-900 text-white">
            Submit Feedback
          </button>
        </NuxtLink>
      </div>
    </div>
  </Layout>
</template>
