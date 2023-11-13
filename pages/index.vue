<script setup lang="ts"></script>
<template>
  <Layout>
    <h1 class="text-4xl">Customer Management Inc</h1>
    <p class="text-xl">Welcome to the Customer Management Inc</p>
    <div>Recent Feedback:</div>
    <div class="flex justify-center gap-12">
      <div class="bg-slate-400">
        <h2>View others' feedback</h2>
        <NuxtLink to="/feedback/view" class="bg-blue-900"> View </NuxtLink>
      </div>
      <div class="bg-slate-400">
        <h2>Submit your own feedback</h2>
        <NuxtLink to="/feedback/submit" class="bg-blue-900">
          Submit Feedback
        </NuxtLink>
      </div>
    </div>
  </Layout>
</template>
