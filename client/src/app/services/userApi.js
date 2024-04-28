import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/users/login",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query({
      query: () => ({
        url: "/users/current",
        method: "GET",
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getOneUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userData, id }) => ({
        url: `/users/edit/${id}`,
        method: "PUT",
        body: userData,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/remove/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useCurrentQuery,
  useLazyCurrentQuery,
  useGetAllUsersQuery,
  useLazyGetAllUsersQuery,
  useGetOneUserQuery,
  useLazyGetOneUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export const {
  endpoints: {
    login,
    register,
    current,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
  },
} = userApi;
