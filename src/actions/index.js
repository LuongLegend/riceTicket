import {
    GET_ORDER, 
    GET_USER
} from '../constants/ActionTypes';

//order
export const getOrder = (order) => {
    return {
        type: GET_ORDER,
        data: order
    }
}
//user
export const getUser = (user) => {
    return {
        type: GET_USER,
        data: user
    }
}