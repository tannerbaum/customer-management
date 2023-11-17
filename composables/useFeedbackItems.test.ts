import { defineComponent, toRef } from "vue";
import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import { useFeedbackItems } from "./useFeedbackItems";
import type { Feedback } from "~/server/types";

const mockData = {
  feedback: [
    {
      id: 1,
      name: "Spongebob",
      email: "sponge@krustykrab.biz",
      feedbacktext: "I love Krabby Patties",
      sentiment: "happy" as const,
      timestamp: "2021-03-01T00:00:00.000Z",
    },
  ],
};

describe("useFeedbackItems", () => {
  // I wanted to put this in a beforeAll or beforeEach, but couldn't get the types right
  const TestComponent = defineComponent({
    props: {
      data: {
        type: Object as PropType<{
          feedback: Feedback[];
        }>,
        required: true,
      },
    },
    setup(props) {
      const dataRef = toRef(props, "data");
      return {
        // Call the composable and expose all return values into our
        // component instance so we can access them with wrapper.vm
        ...useFeedbackItems(dataRef),
      };
    },
  });

  test("collects the correct number of items in an object", async () => {
    const wrapper = mount(TestComponent, {
      props: {
        data: mockData,
      },
    });

    expect(wrapper.vm.totalFeedbackItems).toEqual({
      happy: 1,
      neutral: 0,
      unhappy: 0,
    });
  });

  test("defaults to all sentiments being filtered", async () => {
    const wrapper = mount(TestComponent, {
      props: {
        data: mockData,
      },
    });

    expect(wrapper.vm.filters).toEqual({
      happy: true,
      neutral: true,
      unhappy: true,
    });
  });

  test("filters items by sentiment", async () => {
    const wrapper = mount(TestComponent, {
      props: {
        data: mockData,
      },
    });

    expect(wrapper.vm.filteredFeedbackItems).toHaveLength(1);

    wrapper.vm.onClick({
      happy: false,
      neutral: true,
      unhappy: false,
    });

    expect(wrapper.vm.filteredFeedbackItems).toHaveLength(0);

    wrapper.vm.onClick({
      happy: true,
      neutral: false,
      unhappy: false,
    });

    expect(wrapper.vm.filteredFeedbackItems).toHaveLength(1);
  });
});
