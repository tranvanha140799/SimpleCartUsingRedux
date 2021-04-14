import * as types from './../constants/ActionTypes';

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    };
};

export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    };
};