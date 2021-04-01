import * as Types from '../constants/ActionTypes'

const initialState = {
    id: '',
    name: '',
    numberPhone: '',
    department: 1
};
const myReducer = (state = initialState, action) => {
    let payload = action.payload;
    let type = action.type;

    switch (type) {
        case Types.GET_PRESENT_USER:
            state = {
                ...state,
                id: payload.id,
                name: payload.name,
                numberPhone: payload.numberPhone,
                department: payload.department
            }
            
            return {...state};
        default:
            return state;
    }
}

export default myReducer;