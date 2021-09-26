import React from "react";

const Cart = (props) => {
    const { cart } = props;

    const total = cart.reduce(
        (previous, current) => previous + current.price,
        0
    );

    const itemList = {};
    cart.forEach((med) => {
        const exist = itemList[med.name];
        if (!exist) {
            itemList[med.name] = 1;
        } else {
            itemList[med.name]++;
        }
    });
    let names = Object.keys(itemList);

    return (
        <div className="p-3 mt-3 border shadow me-3 border-light bg-light">
            <h3 className="text-center text-danger">Ordered Medicines</h3>
            <h4>
                <span className="text-primary">Items: </span>
                {cart.length}
            </h4>
            <p className="fs-3">
                <span className="fw-bold text-primary">Total Cost: </span>
                {total} TK.
            </p>
            <ol>
                {names.map((name) => (
                    <li>
                        {name} (Quantity: {itemList[name]})
                    </li>
                ))}
            </ol>
            <div className="text-center">
                <button className="btn btn-primary">Place Order</button>
            </div>
        </div>
    );
};

export default Cart;
