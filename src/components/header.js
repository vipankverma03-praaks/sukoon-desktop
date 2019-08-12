import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import SukoonLogo from "../images/sukoon-logo/logo_dark@3x.png"
import HelpIcon from "../images/helpline/helpline copy 2@3x.jpg";


const PsychotherapyWrapper = styled.div`
        top: 260px;
        transform: rotate(-90deg);
        left: -100%;
        z-index: 10;
        
        &::before{
            content: '';
            position:  absolute;
            top: 50%;
            width: 50px;
            height: 2px;
            right: -60px;
            background: #ffc300;
           }
    `;

const Psychotherapy = styled.h1`
        letter-spacing: .3rem;
        font-size: 14px;
    `;


const NavItem = styled.nav`
  
  .sukoon-top-logo {
    padding-left: 3vw;
  }
`;

function Header(props) {

    return (
        <NavItem className="">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 ">
                <div className="w-full sukoon-top-logo flex justify-between">
                    <Link to="/" className="flex w-20 relative  items-center no-underline ">
                        <img src={SukoonLogo} className="" alt="Sukoon Logo"/>
                        <h2 className="text-sukoon text-v3xl font-accanthisRegular ml-4">Sukoon</h2>
                        {props.logoHighlighter ?
                        <PsychotherapyWrapper className="absolute font-gilroyRegular">
                            <Psychotherapy className="whitespace-no-wrap text-gray-250">Psychotherapy Center</Psychotherapy>
                        </PsychotherapyWrapper> : null }
                    </Link>
                    <div className="text-sukoon my-auto flex justify-end px-1">
                        <div className="flex ">
                            <div className="fit"><img src={HelpIcon} className="w-8" alt="Help Icon"/></div>
                            <span className="ml-4">1800 123 6789</span>
                        </div>
                    </div>
                </div>
            </div>
        </NavItem>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
