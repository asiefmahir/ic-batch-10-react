import ProductCard from "@/app/components/ProductCard";

// import { useGetAllProductsQuery } from "../store/features/api/apiSlice";

const Shop = async () => {
	const res = await fetch(`http://localhost:4000/products`);
	const data = await res.json();
	// const { data } = useGetAllProductsQuery();

	return (
		<div>
			<div className="page-banner">
				<div className="page-banner__details">
					<div className="page-banner__details__title">
						<h1>Our E-commerce Website</h1>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="section__head">
						<div className="product__details__title">
							<h2>All Products</h2>
						</div>
					</div>
					<div className="section__content">
						<div className="grid three">
							{data?.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// export const getStaticProps

export default Shop;
