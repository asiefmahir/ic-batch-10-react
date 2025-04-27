"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addProduct = async (formData) => {
	const product = {
		title: formData.get("title"),
		price: Number(formData.get("price")),
		description: formData.get("description"),
		image: formData.get("image"),
	};
	console.log(product, "product");

	await fetch(`http://localhost:4000/products`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(product),
	});
	revalidatePath("/shop");
	redirect("/shop");
};
