import React from "react";
import "./Header.css";
const Header = () => {
    return (
        <div className="p-3 m-2 mx-auto text-center text-white rounded w-75 header">
            <h1>
                Welcome to <span className="text-info">E-Pharma!</span>
            </h1>
            <p>We Provide Best Medicines for You and Your Family!</p>
            <p>Thanks for visiting our Shop!</p>
            <h3 className="text-info">
                Total Medicines Available:
                <span className="text-warning"> 9</span>
            </h3>
        </div>
    );
};

export default Header;
