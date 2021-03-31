import { GET_USER } from '../constants/ActionTypes'
const initialState = [];
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return [...action.data];
        default:
            return state;
    }
}

export default userReducer