import * as Types from '../constants/ActionTypes'

const initialState = [];
const myReducer = (state = initialState, action) => {
    let type = action.type;
    let payload = action.payload;

    switch (type) {
        case Types.GET_ORDERS:
            return [...payload];
        default:
            return state;
    }
}

export default myReducer;