import { useState } from "react";
import {
	useStripe,
	useElements,
	PaymentElement,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
const CheckoutForm = () => {
	const cart = useSelector((storeState) => storeState.cart);
	let totalPrice = 0;
	cart.forEach((item) => {
		totalPrice += item.price * item.quantity;
	});

	const stripe = useStripe();
	const elements = useElements();
	const [errorMessage, setErrorMessage] = useState("");
	const [emailInput, setEmailInput] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (elements === null || stripe === null) return;
		const { error: submitError } = await elements.submit();
		if (submitError?.message) {
			setErrorMessage(submitError.message);
			return;
		}
		const res = await fetch(`${import.meta.env.VITE_STRIPE_BACKEND_URL}`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				amount: totalPrice * 100,
				currency: "usd",
			}),
		});
		const { client_secret: clientSecret } = await res.json();
		console.log(clientSecret);

		const { error } = await stripe.confirmPayment({
			elements,
			clientSecret,
			confirmParams: {
				return_url: `${window.location.origin}`,
			},
		});
		if (error) {
			setErrorMessage(error.message);
		}
	};
	return (
		<form onSubmit={handleSubmit} className="px-4">
			<div className="mb-3">
				<label htmlFor="email-input">Email</label>
				<div>
					<input
						value={emailInput}
						onChange={(e) => setEmailInput(e.target.value)}
						type="email"
						id="email-input"
						placeholder="johndoe@gmail.com"
					/>
				</div>
			</div>
			<PaymentElement />
			<button type="submit" disabled={!stripe || !elements}>
				Pay
			</button>

			{errorMessage && <div>{errorMessage}</div>}
		</form>
	);
};

export default CheckoutForm;
