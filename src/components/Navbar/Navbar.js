import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav class="px-5 navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <FontAwesomeIcon icon={faClinicMedical} />
                    {" E-Pharma"}
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="/home"
                            >
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button class="btn btn-primary" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
