import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Medicine = (props) => {
    const { medicine, handleBuyNow } = props;
    const { name, category, contains, manufacturer, picture, price } = medicine;
    return (
        <div className="col">
            <div className="p-2 rounded shadow border-primary card h-100">
                <img
                    src={picture}
                    className="p-3 mx-auto rounded-circle alert-primary"
                    alt="med-img"
                    height="160"
                    width="160"
                />
                <div className="card-body">
                    <h5 className="card-title text-primary">{name}</h5>
                    <p>
                        <span className="fw-bold">Category:</span> {category}
                    </p>
                    <p className="card-text">{contains}</p>
                    <p>
                        <span className="fw-bold">Manufacturer:</span>{" "}
                        {manufacturer}
                    </p>
                    <h4>
                        Price:
                        <small>
                            <span className="text-primary"> TK. </span>
                            {price}
                        </small>
                    </h4>
                </div>
                <button
                    onClick={() => handleBuyNow(medicine)}
                    className="btn btn-primary"
                >
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    {" Buy Now"}
                </button>
            </div>
        </div>
    );
};

export default Medicine;
