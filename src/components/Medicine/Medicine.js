import React from "react";

const Medicine = (props) => {
    const { medicine } = props;
    const { name, category, contains, manufacturer, picture, price } = medicine;
    return (
        <div className="col">
            <div className="border-0 rounded shadow card h-100">
                <img
                    src={picture}
                    className="card-img-top"
                    alt="med-img"
                    height="200"
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
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
                        <span className="text-info"> TK. </span>
                        {price}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Medicine;
