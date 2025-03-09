/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	modifyQuantityOfAnItem,
	removeItemFromCart,
} from "../store/actions/cart";

function CartItem({ item }) {
	const [itemQuantity, setItemQuantity] = useState(item.quantity);
	const dispatch = useDispatch();
	return (
		<tr>
			<td>
				<div className="product">
					<img
						src={item.image}
						className="product-img"
						alt={item.title}
					/>
				</div>
			</td>
			<td>
				<p>{item.title}</p>
			</td>
			<td>$ {item.price}</td>
			<td>
				<div className="qty_input">
					<button
						onClick={() => {
							if (itemQuantity > 1) {
								dispatch(
									modifyQuantityOfAnItem({
										id: item.id,
										quantity: itemQuantity - 1,
									}),
								);
								setItemQuantity(itemQuantity - 1);
							} else {
								dispatch(removeItemFromCart(item.id));
								// dispatch({
								// 	type: "cart/removeItemFromCart",
								// 	payload: item.id,
								// });
							}
						}}
						className="qty-count qty-count--minus"
						data-action="minus"
						type="button"
					>
						<figure>-</figure>
					</button>
					<input
						className="product-qty"
						type="number"
						name="product-qty"
						min="1"
						value={itemQuantity}
						onChange={(event) => {
							dispatch(
								modifyQuantityOfAnItem({
									id: item.id,
									quantity: Number(event.target.value),
								}),
							);
							setItemQuantity(Number(event.target.value));
						}}
					/>
					<button
						className="qty-count qty-count--add"
						data-action="add"
						type="button"
						onClick={() => {
							dispatch(
								modifyQuantityOfAnItem({
									id: item.id,
									quantity: itemQuantity + 1,
								}),
							);
							setItemQuantity(itemQuantity + 1);
						}}
					>
						<figure>+</figure>
					</button>
				</div>
			</td>
			<td>$ {item.price * item.quantity}</td>
			<td>
				<button
					onClick={() => dispatch(removeItemFromCart(item.id))}
					className="cross-icon"
				>
					x
				</button>
			</td>
		</tr>
	);
}

export default CartItem;
