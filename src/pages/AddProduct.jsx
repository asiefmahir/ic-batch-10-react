import { useState } from "react";
import { useCreateProduct } from "../hooks/server-states/useProduct";

const initProduct = {
	title: "",
	description: "",
	price: "",
	image: "",
};

const AddProduct = () => {
	const [product, setProduct] = useState(initProduct);
	const { createProductMutation } = useCreateProduct();

	const handleChange = (e) => {
		console.log(e.target.name);
		console.log(typeof e.target.value);
		const value =
			e.target.name === "price" ? Number(e.target.value) : e.target.value;
		// '658'
		setProduct({ ...product, [e.target.name]: value });
		// setProduct({...product, })
		// setProduct({...product, price: 45})
	};

	const submitHandler = (e) => {
		e.preventDefault();
		createProductMutation.mutate(product);
		setProduct(initProduct);
		// useCreateProductMutation()
	};

	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
				onSubmit={submitHandler}
			>
				<p>Title</p>
				<input
					value={product.title}
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<br />
				<p>Description</p>
				<input
					value={product.description}
					type="text"
					name="description"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<br />
				<p>Price</p>
				<input
					value={product.price}
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<br />
				<p>Image</p>
				<input
					value={product.image}
					type="text"
					name="image"
					required
					style={{ display: "block", width: "70%" }}
					onChange={handleChange}
				/>
				<input type="submit" />
			</form>
		</>
	);
};

export default AddProduct;
