import { useState } from "react";
// import { useAddProductMutation } from "../store/features/api/apiSlice";
import { toast } from "react-toastify";
import { useCreateProductMutation } from "../store/features/api/apiSlice";
// import { useCreateProduct } from "../hooks/server-states/useProduct";

const initProduct = {
	title: "",
	description: "",
	price: "",
	image: "",
};

const AddProduct = () => {
	const [product, setProduct] = useState(initProduct);
	const [addProduct] = useCreateProductMutation();

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

	const submitHandler = async (e) => {
		e.preventDefault();
		// addProduct(product);
		addProduct(product);
		toast("Product Created Successfully");
		// createProductMutation.mutate(product);
		setProduct(initProduct);
		// useCreateProductMutation()
	};

	const handleImageChange = async (e) => {
		const file = e.target.files[0];
		console.log(file, "file");
		const data = new FormData();

		data.append("file", file);
		data.append("could_name", "dcdga3gke");
		data.append("upload_preset", "our-react-project");

		const res = await fetch(
			`https://api.cloudinary.com/v1_1/dcdga3gke/image/upload`,
			{
				method: "POST",
				body: data,
			},
		);

		const result = await res.json();
		console.log(result, "result");
		setProduct({ ...product, image: result.secure_url });
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

				<input type="file" name="image" onChange={handleImageChange} />
				<br />
				<p>Image Preview</p>
				{product.image && (
					<img
						style={{ width: "100px" }}
						src={product.image}
						alt={product.title}
					/>
				)}
				<br />

				<input type="submit" disabled={product.image === ""} />
			</form>
		</>
	);
};

export default AddProduct;
