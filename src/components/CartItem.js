import React, { Component } from "react";
import * as MSG from './../constants/Messages';

class CartItem extends Component {
    render() {
        var { item } = this.props;

        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onDecreaseProduct(item.product)}
                        >
                            <a>—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onIncreaseProduct(item.product)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => this.onRemoveProduct(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

    onRemoveProduct = (product) => {
        var { onRemoveProduct } = this.props;
        onRemoveProduct(product);
        this.props.onChangeMessage(MSG.MSG_REMOVED_PRODUCT);
    }
    
    onIncreaseProduct = (product) => {
        var { onIncreaseProduct } = this.props;
        onIncreaseProduct(product);
        this.props.onChangeMessage(MSG.MSG_ADDED_PRODUCT);
    }

    onDecreaseProduct = (product) => {
        var { onDecreaseProduct } = this.props;
        onDecreaseProduct(product);
        this.props.onChangeMessage(MSG.MSG_REMOVED_PRODUCT);
    }
}

export default CartItem;