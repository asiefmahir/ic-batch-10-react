/* eslint-disable react/prop-types */
import { useRemoveProductMutation } from "../store/features/api/apiSlice";
function ProductRow({ item }) {
	const [removeProduct] = useRemoveProductMutation();

	const removeHandler = () => {
		removeProduct(item.id);
		// deleteProduct(item.id);
	};
	return (
		<tr className="product-row d-flex justify-content-around align-items-center">
			<td>
				<img src={item.image} className="product-img" alt="" />
			</td>

			<td>
				<h2>{item.title}</h2>
			</td>
			<td>
				<h2>{item.price}</h2>
			</td>
			<td onClick={removeHandler}>x</td>
		</tr>
	);
}

export default ProductRow;
