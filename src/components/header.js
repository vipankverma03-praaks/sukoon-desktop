import {Link} from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";

import SukoonLogo from "../images/sukoon-logo/logo_dark@3x.png"

function Header() {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <nav>
            <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
                <div className="w-12">
                    <Link to="/" className="flex items-center no-underline ">
                        <img src={SukoonLogo} alt="Sukoon Logo"/>
                    </Link>
                </div>
                <div className="flex">
                    <button
                        className="block md:hidden relative outline-none flex items-center py-2 px-4 mr-2 bg-sukoon text-white">
                        <span className="text-sm font-bold">Book Appointment</span>
                    </button>
                    <button
                        className="block md:hidden relative outline-none flex items-center px-3 pb-2 rounded text-sukoon"
                        onClick={() => toggleExpansion(!isExpanded)}>
                        <span id="menu-hamburger-icon" className="text-sm font-bold">MENU</span>
                    </button>
                </div>
                <div
                    className={`${
                        isExpanded ? `block` : `hidden`
                        } md:block md:flex md:items-center w-full md:w-auto`}
                >
                    <div className="text-sm">
                        <Link
                            to="/"
                            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
