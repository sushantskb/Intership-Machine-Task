import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testAPI = createApi({
  reducerPath: "testAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
  }),
  endpoints: (builder) => ({
    test: builder.mutation({
      query: (body) => ({
        url: "/api/test/jwt",
        method: "POST",
        body: body,
      }),
    }),
  }),
});
export const { useTestMutation } = testAPI;
