import React from "react";
import Cart from "../Cart/Cart";
import Medicines from "../Medicines/Medicines";

const Main = () => {
    return (
        <div className="row">
            <div className="mt-3 col-9">
                <Medicines></Medicines>
            </div>
            <div className="col-3">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;
