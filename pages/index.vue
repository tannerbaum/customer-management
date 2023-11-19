<script setup lang="ts" />
<template>
  <Layout>
    <h1
      class="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight text-center text-blue-600 pt-14"
    >
      Customer Management Inc
    </h1>
    <p
      class="text-xl text-center font-extrabold text-blue-400 mt-6 mb-14 max-w-xl mx-auto"
    >
      The customer is always right. But what about when they aren't? We aren't
      managing that, but we are managing their feedback.
    </p>
    <Hero />
    <div class="flex justify-center mt-8">
      <div
        class="bg-slate-100 text-slate-700 text-center rounded-xl p-8 max-w-md"
      >
        <h2 class="mb-4 font-extrabold tracking-tight">
          Submit your own feedback
        </h2>
        <p class="mb-4">
          Inspired to leave your own feedback? It's a simple form away.
        </p>
        <NuxtLink to="/feedback/submit">
          <button class="h-10 w-48 px-6 rounded-lg bg-blue-900 text-white">
            Submit Feedback
          </button>
        </NuxtLink>
      </div>
    </div>
    <footer class="italic text-blue-400 text-sm mt-16 pb-8 px-4">
      Made by Tanner Hoisington over the course of a week when he could find
      time. Let the record show that even with more time, he is still not a
      designer 💀.
    </footer>
  </Layout>
</template>
