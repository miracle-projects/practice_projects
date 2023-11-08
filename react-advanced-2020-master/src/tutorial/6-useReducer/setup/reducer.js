export const reducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const newPeople = [...state.people, action.payload];
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: "Item Added",
		};
	}
	if (action.type === "NO_VALUE") {
		return {
			...state,
			isModalOpen: true,
			modalContent: "Please enter a value",
		};
	}
	if (action.type === "CLOSE_MODAL") {
		return { ...state, isModalOpen: false };
	}
	if (action.type === "REMOVE_ITEM") {
		const removePeople = state.people.filter((p) => p.id !== action.payload);
		return { ...state, people: removePeople, modalContent: "item removed" };
	}
	throw new Error("no matching action type");
};
