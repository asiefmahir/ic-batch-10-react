import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	collection,
	getDocs,
	addDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";

import { db } from "../../../firebase";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fakeBaseQuery(),
	tagTypes: ["products"],
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			queryFn: async () => {
				try {
					const productsRef = collection(db, "products");
					const data = await getDocs(productsRef);
					const productsArray = data.docs.map((doc) => ({
						...doc.data(),
						id: doc.id,
					}));
					return { data: productsArray };
				} catch (error) {
					// console.log(error);
					return { error: error };
				}
			},
			providesTags: ["products"],
		}),
		createProduct: builder.mutation({
			queryFn: async (product) => {
				try {
					await addDoc(collection(db, "products"), product);
					return { data: product };
				} catch (error) {
					return { error: error };
				}
			},
			invalidatesTags: ["products"],
		}),
		removeProduct: builder.mutation({
			queryFn: async (productId) => {
				try {
					const productDoc = doc(db, "products", productId);
					await deleteDoc(productDoc);
					return { data: productId };
				} catch (error) {
					return { error: error };
				}
			},
			invalidatesTags: ["products"],
		}),
	}),
});

export const {
	useGetAllProductsQuery,
	useCreateProductMutation,
	useRemoveProductMutation,
} = apiSlice;
