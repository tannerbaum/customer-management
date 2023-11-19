// import type { Feedback } from "~/server/types";
import type { Database } from "~/types/supabase";

export type Feedback = Database["public"]["Tables"]["feedback"]["Row"];

type ApiResponse = Ref<{
  feedback: Feedback[];
} | null>;

type Filters = {
  happy: boolean;
  neutral: boolean;
  unhappy: boolean;
};

export const useFeedbackItems = (data: ApiResponse) => {
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
      feedbackItems.value.filter((item) => item.sentiment === "neutral")
        .length ?? 0,
    unhappy:
      feedbackItems.value.filter((item) => item.sentiment === "unhappy")
        .length ?? 0,
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

  return {
    filters,
    filteredFeedbackItems,
    totalFeedbackItems,
    onClick,
  };
};
