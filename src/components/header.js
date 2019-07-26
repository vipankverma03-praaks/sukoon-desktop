import {Link} from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styled from "styled-components";

import SukoonLogo from "../images/sukoon-logo/logo_dark@3x.png"
import HelpIcon from "../images/helpline copy 2_2019-07-22/helpline copy 2@3x.jpg";

function Header() {
    const [isExpanded, toggleExpansion] = useState(false);

    const MenuWrapper = styled.div`
    top:16vw;
    left:0;
    z-index: 1;
    `
    const PsychotherapyWrapper = styled.div`
        top: 236px;
        transform: rotate(-90deg);
        left: -62%;
        
        &::before{
            content: '';
            position:  absolute;
            top: 50%;
            width: 4rem;
            height: 2px;
            right: -4rem;
            background: #ffc300;
           }
    `
    const Psychotherapy = styled.h1`
        letter-spacing: .3rem;
        font-size: 8px;
    `

    return (
        <nav className="relative lg:static">
            <div className="flex flex-wrap items-center justify-between max-w-4xl lg:max-w-full mx-auto lg:m-0 p-4 md:p-8">
                <div className="w-12 lg:w-20 lg:relative">
                    <Link to="/" className="flex items-center no-underline ">
                        <img src={SukoonLogo} alt="Sukoon Logo"/>
                        <PsychotherapyWrapper className="lg:absolute hidden lg:block">
                            <Psychotherapy className="lg:whitespace-no-wrap	text-gray-250">Psychotherapy Center</Psychotherapy>
                        </PsychotherapyWrapper>
                    </Link>
                </div>
                <div className="flex lg:hidden">
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
                <MenuWrapper
                    className={`${
                        isExpanded ? `block` : `hidden`
                        } md:block md:items-center h-screen lg:h-auto absolute lg:static w-full md:w-auto`}
                >
                    <div className="text-sm text-sukoon h-full bg-white lg:pr-4 text-xl pl-4">
                        <div className="text-sukoon mr-2 my-2 flex lg:justify-end px-1">
                            <div className="lg:flex ">
                                <div className="fit"><img src={HelpIcon} className="w-8" alt="Help Icon"/></div>
                                <span className="ml-4">1800 123 6789</span>
                            </div>
                        </div>
                        <div>
                            <Link
                                to="/"
                                className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline"
                            >
                                Services
                            </Link>
                            <Link
                                to="/"
                                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline"
                            >
                                Infrastructure
                            </Link>
                            <Link
                                to="/"
                                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline"
                            >
                                Experience Sukoon
                            </Link>
                            <Link
                                to="/"
                                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline"
                            >
                                Doctors
                            </Link>
                            <Link
                                to="/"
                                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline"
                            >
                                International Patients
                            </Link>
                            <Link
                                to="/"
                                className="block md:inline-block mt-4 md:mt-0 no-underline"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                </MenuWrapper>
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
