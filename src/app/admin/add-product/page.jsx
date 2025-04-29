// "use client";
// import { useState } from "react";
import { addProduct } from "@/app/actions/product";
// import { useAddProductMutation } from "../store/features/api/apiSlice";
// import { toast } from "react-toastify";
// import { useCreateProductMutation } from "../store/features/api/apiSlice";
// import { useCreateProduct } from "../hooks/server-states/useProduct";

// const initProduct = {
// 	title: "",
// 	description: "",
// 	price: "",
// 	image: "",
// };

const AddProduct = () => {
	console.log("I am rendering as a form");

	// const [product, setProduct] = useState(initProduct);
	// // const [addProduct] = useCreateProductMutation();

	// const handleChange = (e) => {
	// 	console.log(e.target.name);
	// 	console.log(typeof e.target.value);
	// 	const value =
	// 		e.target.name === "price" ? Number(e.target.value) : e.target.value;
	// 	// '658'
	// 	setProduct({ ...product, [e.target.name]: value });
	// 	// setProduct({...product, })
	// 	// setProduct({...product, price: 45})
	// };

	// const submitHandler = async (e) => {
	// 	e.preventDefault();
	// 	addProduct(product);
	// 	// addProduct(product);
	// 	// addProduct(product);
	// 	// toast("Product Created Successfully");
	// 	// createProductMutation.mutate(product);
	// 	setProduct(initProduct);
	// 	// useCreateProductMutation()
	// };

	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
				action={addProduct}
			>
				<p>Title</p>
				<input
					type="text"
					name="title"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Description</p>
				<input
					type="text"
					name="description"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Price</p>
				<input
					type="number"
					name="price"
					required
					style={{ display: "block", width: "70%" }}
				/>
				<br />
				<p>Image</p>

				<input
					required
					style={{ display: "block", width: "70%" }}
					type="text"
					name="image"
				/>
				<br />

				<input type="submit" />
			</form>
		</>
	);
};

export default AddProduct;
