import { rootApi } from "./index";

const productApi = rootApi.injectEndpoints({
	endpoints: (build) => ({
		getAllProducts: build.query({
			query: () => `/products`,
		}),
	}),
});

export const { useGetAllProductsQuery } = productApi;
