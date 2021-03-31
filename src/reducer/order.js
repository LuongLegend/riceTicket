import { GET_ORDER } from '../constants/ActionTypes'
const initialState = [];
const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
            return [...action.data];
        default:
            return state;
    }
}

export default orderReducer