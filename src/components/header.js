import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import SukoonLogo from "../images/sukoon-logo/logo_dark@3x.png"
import HelpIcon from "../images/helpline/helpline copy 2@3x.jpg";


const MenuWrapper = styled.div`
    top:16vw;
    left:0;
    z-index: 1;
    `;

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
    `;

const Psychotherapy = styled.h1`
        letter-spacing: .3rem;
        font-size: 8px;
    `;

const NavWrapper = styled.div`
  font-size: 18px;

  &::before{
    content:'';
    width: 42%;  
  }
  
  @media screen and (max-width: 1601px) and (min-width: 1504px){ 
      font-size: 18px;
    
      &::before{
        width: 42%;  
      }
  }
   @media screen  and (max-width: 1500px) {
      font-size: 15px;
    
      &::before{
        width: 36%;  
      }
  }
    @media screen  and (max-width: 1400px) {
      font-size: 15px;
    
      &::before{
        width: 36%;  
      }
  }
  @media screen and (max-width: 1200px){
      font-size: 13px;
    
      &::before{
        width: 31vw;  
      }
  }
`;

function Header() {

    return (
        <nav className="">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 ">
                <div className="w-full flex justify-between">
                    <Link to="/" className="flex w-20 relative  items-center no-underline ">
                        <img src={SukoonLogo} alt="Sukoon Logo"/>
                        <PsychotherapyWrapper className="absolute">
                            <Psychotherapy className="whitespace-no-wrap text-gray-250">Psychotherapy Center</Psychotherapy>
                        </PsychotherapyWrapper>
                    </Link>
                    <div className="text-sukoon mr-2 my-auto flex justify-end px-1">
                        <div className="flex ">
                            <div className="fit"><img src={HelpIcon} className="w-8" alt="Help Icon"/></div>
                            <span className="ml-4">1800 123 6789</span>
                        </div>
                    </div>
                </div>
                <MenuWrapper
                    className={`block items-center w-full `}
                >
                    <div className="text-sukoon h-full bg-white pr-4 text-xl pl-4">
                        <NavWrapper className="flex justify-between">
                            <Link
                                to="/services"
                                className="block inline-block mt-0 mr-6 no-underline"
                            >
                                Services
                            </Link>
                            <Link
                                to="/infrastructure"
                                className="block inline-block mt-0 mr-6 no-underline"
                            >
                                Infrastructure
                            </Link>
                            <Link
                                to="/experience"
                                className="block inline-block mt-0 mr-6 no-underline"
                            >
                                Experience
                            </Link>
                            <Link
                                to="/"
                                className="block inline-block mt-0 mr-6 no-underline"
                            >
                                Doctors
                            </Link>
                            <Link
                                to="/"
                                className="block inline-block mt-0 mr-6 no-underline"
                            >
                                International Patients
                            </Link>
                            <Link
                                to="/"
                                className="block inline-block mt-0 no-underline"
                            >
                                About
                            </Link>
                        </NavWrapper>
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
