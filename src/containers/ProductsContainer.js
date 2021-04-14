import React, { Component } from "react";
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import { addToCart, changeMessage } from './../actions/index';

class ProductsContainer extends Component {
    render() {

        return (
            <Products>
                {this.showProducts()}
            </Products>
        );
    }

    showProducts = () => {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        
        if (this.props.products.length > 0) {
            result = this.props.products.map((product, index) => {
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            });
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onAddToCart: (product) => {
            dispatchEvent(addToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatchEvent(changeMessage(message));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);