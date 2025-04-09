import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

// import { useGetProducts } from "../hooks/server-states/useProduct";

const Shop = () => {
	// const { products } = useGetProducts();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const productsRef = collection(db, "products");
			const data = await getDocs(productsRef);
			const productsArray = data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setProducts(productsArray);
			console.log(productsArray, "data");
		};
		getProducts();
	}, []);

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
							{products?.map((product) => (
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

export default Shop;
