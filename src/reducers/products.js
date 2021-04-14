var initialState = [
    {
        id: 0,
        name: 'iPhone 12 mini',
        description: 'The newest iPhone',
        image: 'https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-iphone-12-mini-3.png',
        price: 99,
        inventory: 45,
        rating: 4
    },
    {
        id: 1,
        name: 'airPods Pro',
        description: 'The newest iPods',
        image: 'https://hoanghamobile.com/Uploads/2020/09/22/Tai%20nghe%20Apple%20AirPods%20Pro.png',
        price: 59,
        inventory: 74,
        rating: 5
    },
    {
        id: 2,
        name: 'iPad Pro Cellular',
        description: 'The newest iPad',
        image: 'https://cdn.tgdd.vn/Products/Images/522/221774/ipad-pro-11-inch-wifi-cellular-128gb-2020-bac-600x600-1-600x600.jpg',
        price: 139,
        inventory: 156,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default:
            return [...state];
    }
};

export default products;