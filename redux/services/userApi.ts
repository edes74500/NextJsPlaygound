import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type UserDtoResponse = {
  users: User[];
};

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserDtoResponse, void>({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
