import { START_ASSESSMENT_URL } from "../../../../constants/index.js";
import { apiSlice } from "../../../api/index.js";

const startAssesmentApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    startAssesment: build.mutation({
      query: () => ({
        url: START_ASSESSMENT_URL,
        method: "POST",
      }),
      invalidatesTags: ["Submissions"],
    }),
  }),
});

export const { useStartAssesmentMutation } = startAssesmentApi;
