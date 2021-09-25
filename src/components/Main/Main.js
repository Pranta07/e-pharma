import React from "react";
import Cart from "../Cart/Cart";
import Medicines from "../Medicines/Medicines";

const Main = () => {
    return (
        <div>
            <div>
                <Medicines></Medicines>
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;
