import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
	reducerPath: "rootApi",
	baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000` }),
	tagTypes: ["notes", "products"],
	endpoints: (build) => ({
		getNotes: build.query({
			query: () => `/notes`,
			providesTags: ["notes"],
		}),
		createNote: build.mutation({
			query: (obj) => ({
				url: `/notes`,
				method: "POST",
				body: obj,
			}),
			invalidatesTags: ["notes"],
		}),
		removeNote: build.mutation({
			query: (noteId) => ({
				url: `/notes/${noteId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["notes"],
		}),

		getAllProducts: build.query({
			query: () => `/products`,
		}),
		// `http://localhost:3000/notes`
		// `http://localhost:3000/notes`
	}),
});
export const {
	useGetNotesQuery,
	useCreateNoteMutation,
	useRemoveNoteMutation,
	useGetAllProductsQuery,
} = rootApi;

// useGetNotesQuery
