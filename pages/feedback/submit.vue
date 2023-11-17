<script setup lang="ts">
import { feedbackFormSchema } from "../../server/zodSchemas";

const validationSchema = toTypedSchema(feedbackFormSchema);

const onSubmit = async (values: any) => {
  const test = await $fetch("/api/feedback", {
    method: "POST",
    body: values,
  });
};
</script>
<template>
  <Layout class="p-16">
    <Form
      class="flex flex-col gap-3"
      :validationSchema="validationSchema"
      @submit="onSubmit"
    >
      <div class="flex flex-col">
        <label class="font-bold text-blue-500" for="name">Name</label>
        <Field
          id="name"
          name="name"
          type="text"
          class="border-2 rounded-md h-8 border-blue-400"
        />
        <ErrorMessage class="text-red-300" name="name" />
      </div>

      <div class="flex flex-col">
        <label class="font-bold text-blue-500" for="email">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="border-2 rounded-md h-8 border-blue-400"
        />
        <ErrorMessage class="text-red-300" name="email" />
      </div>

      <div class="flex flex-col">
        <label class="font-bold text-blue-500" for="feedback">Feedback</label>
        <Field
          id="feedback"
          name="feedback"
          type="text"
          as="textarea"
          class="border-2 rounded-md h-28 border-blue-400"
        />
        <ErrorMessage class="text-red-300" name="feedback" />
      </div>

      <fieldset class="flex justify-center gap-4 mt-4">
        <div class="flex justify-center gap-2">
          <Field id="happy" name="sentiment" type="radio" value="happy" />
          <label class="sr-only" for="happy">Happy</label>
          <div aria-hidden="true">
            <FeedbackFilter class="bg-emerald-300" componentType="div" isActive
              >Happy</FeedbackFilter
            >
          </div>
        </div>
        <div class="flex justify-center gap-2">
          <Field id="neutral" name="sentiment" type="radio" value="neutral" />
          <label class="sr-only" for="neutral">Neutral</label>
          <div aria-hidden="true">
            <FeedbackFilter class="bg-gray-300" componentType="div" isActive
              >Neutral</FeedbackFilter
            >
          </div>
        </div>
        <div class="flex justify-center gap-2">
          <Field id="unhappy" name="sentiment" type="radio" value="unhappy" />
          <label class="sr-only" for="unhappy">Unhappy</label>
          <div aria-hidden="true">
            <FeedbackFilter class="bg-red-300" componentType="div" isActive
              >Unhappy</FeedbackFilter
            >
          </div>
        </div>
      </fieldset>

      <button
        class="rounded text-blue-500 border-2 border-blue-500 py-2 mt-6 hover:bg-white"
      >
        Submit
      </button>
    </Form>
  </Layout>
</template>
