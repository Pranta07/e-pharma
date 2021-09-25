import React from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Medicines from "../Medicines/Medicines";

const Main = () => {
    const [cart, setCart] = useState([]);
    const handleBuyNow = (product) => {
        setCart([...cart, product]);
        // console.log(product);
    };

    return (
        <div className="row">
            <div className="mt-3 col-9">
                <Medicines handleBuyNow={handleBuyNow}></Medicines>
            </div>
            <div className="col-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;
