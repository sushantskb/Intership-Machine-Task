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
    getEmployeeById: builder.query({
      query: ({ token, id }) => ({
        url: `/api/v1/employee/emp?id=${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteEmployee: builder.mutation({
      query: ({ token, empId }) => ({
        url: "/api/v1/employee/delete",
        method: "POST",
        body: { empId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    editEmployee: builder.mutation({
      query: ({ token, params, empId }) => ({
        url: `/api/v1/employee/edit?empId=${empId}`,
        method: "POST",
        body: params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateEmployeeMutation,
  useGetAllEmployeesQuery,
  useDeleteEmployeeMutation,
  useEditEmployeeMutation,
  useGetEmployeeByIdQuery,
} = employeeAPI;
