import React, { Component } from "react";
import * as MSG from './../constants/Messages';

class Product extends Component {
    render() {
        var { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={ product.image }
                            className="img-fluid" alt={ product.name } />
                        <a href='/#'>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href='/#'>
                                    { product.name }
                                </a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            { this.showRating(product.rating) }
                        </ul>
                        <p className="card-text">
                            { product.description }
                        </p>
                        <div className="card-footer">
                            <span className="left">{ product.price }$</span>
                            <span className="right">
                                <a
                                    className="btn-floating blue-gradient"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="" data-original-title="Add to Cart"
                                    onClick={ () => this.onAddToCart(product) } // Khai báo sự kiện onClick có truyền tham số phải dùng arrow function
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showRating = (rating) => {
        var result = [], star = 5;
        while(star > 0) {
            if(rating > 0) {
                result.push(
                    <li key={ star }>
                        <i className="fa fa-star"></i>
                    </li>
                );
                rating--;
            }
            else {
                result.push(
                    <li key={ star }>
                        <i className="fa fa-star-o"></i>
                    </li>
                );
            }
            star--;
        }
        return result;
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(MSG.MSG_ADDED_PRODUCT);
    }
}

export default Product;