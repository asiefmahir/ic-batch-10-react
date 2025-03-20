import { rootApi } from "./index";

const noteApi = rootApi.injectEndpoints({
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
	}),
});

export const {
	useGetNotesQuery,
	useCreateNoteMutation,
	useRemoveNoteMutation,
} = noteApi;
