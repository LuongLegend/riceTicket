import * as Types from '../constants/ActionTypes';

//order
export const getOrder = orders => {
    return {
        type: Types.GET_ORDER,
        payload: orders
    }
}
//user
export const getPresentUser = presentUser => {
    return {
        type: Types.GET_PRESENT_USER,
        payload: presentUser
    }
}