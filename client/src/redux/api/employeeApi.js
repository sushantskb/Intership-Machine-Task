import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeAPI = createApi({
  reducerPath: "employeeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
  }),
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
      query: ({ token, params }) => ({
        url: "api/v1/employee/create",
        method: "POST",
        body: params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getAllEmployees: builder.query({
      query: ({ token, page }) => ({
        url: `api/v1/employee?page=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useCreateEmployeeMutation, useGetAllEmployeesQuery } =
  employeeAPI;
