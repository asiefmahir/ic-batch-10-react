import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";

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
	}),
});

export const { useGetAllProductsQuery } = apiSlice;
