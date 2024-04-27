import { api } from "./api";

export const recipientApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addRecipient: builder.mutation({
      query: (recipientData) => ({
        url: "/recipients/add",
        method: "POST",
        body: recipientData,
      }),
    }),
    getAllRecipients: builder.query({
      query: () => ({
        url: "/recipients",
        method: "GET",
      }),
    }),
    getOneRecipient: builder.query({
      query: (id) => ({
        url: `/recipients/${id}`,
        method: "GET",
      }),
    }),
    updateRecipient: builder.mutation({
      query: ({ recipientData, id }) => ({
        url: `/recipients/edit/${id}`,
        method: "PUT",
        body: recipientData,
      }),
    }),
    deleteRecipient: builder.mutation({
      query: (id) => ({
        url: `/recipients/remove/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddRecipientMutation,
  useGetAllRecipientsQuery,
  useLazyGetAllRecipientsQuery,
  useGetOneRecipientQuery,
  useLazyGetOneRecipientQuery,
  useUpdateRecipientMutation,
  useDeleteRecipientMutation,
} = recipientApi;

export const {
  endpoints: {
    addRecipient,
    getAllRecipients,
    getOneRecipient,
    updateRecipient,
    deleteRecipient,
  },
} = recipientApi;
