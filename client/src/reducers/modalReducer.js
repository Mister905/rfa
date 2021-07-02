import { TIME_LOADED } from "../actions/types";

const initialState = {
    display_modal: false,
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                display_modal: !state.display_modal
            };
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
}