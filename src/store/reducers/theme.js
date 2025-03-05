const themeInitState = {
	bgColor: "#fff",
	textColor: "#000",
};

export const themeReducer = (state = themeInitState, action) => {
	switch (action.type) {
		case "theme/changeBgColor": {
			return {
				...state,
				bgColor: action.payload,
			};
		}

		case "theme/changeTextColor": {
			return {
				...state,
				textColor: action.payload,
			};
		}

		case "theme/reset": {
			return themeInitState;
		}

		default: {
			return state;
		}
	}
};
