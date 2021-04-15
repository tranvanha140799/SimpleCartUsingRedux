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

export const removeProduct = (product) => {
    return {
        type: types.REMOVE_PRODUCT,
        product
    };
};

export const increaseProduct = (product) => {
    return {
        type: types.INCREASE_PRODUCT,
        product
    };
};

export const decreaseProduct = (product) => {
    return {
        type: types.DECREASE_PRODUCT,
        product
    };
};