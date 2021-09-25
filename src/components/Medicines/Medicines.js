import React, { useEffect, useState } from "react";
import Medicine from "../Medicine/Medicine";

const Medicines = () => {
    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        fetch("./medicinesData.json")
            .then((res) => res.json())
            .then((data) => setMedicines(data));
    }, []);
    // console.log(medicines);

    return (
        <div className="container row row-cols-1 row-cols-md-3 g-4">
            {medicines.map((medicine) => (
                <Medicine medicine={medicine}></Medicine>
            ))}
        </div>
    );
};

export default Medicines;
