import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import SukoonLogo from "../images/sukoon-logo/logo_dark@3x.png"
import HelpIcon from "../images/helpline/helpline copy 2@3x.jpg";
import SVG from "../elements/SVG";

const NavItem = styled.nav`
  
  .sukoon-top-logo {
    padding-left: 3vw;
  }
`;


const LogoLink = styled(Link)((props)=>{

    // for inner pages
    if(props.logoHighlighter){
        return`
         &::after{
            content: '';
            position: absolute;
            background: #f6e05e;
            height: 2px;
            width: 90px;
            transform: rotate(90deg);
            top: 110px;
            right: -22px; 
              
          }
          
          &::before{
               content: 'Psychotherapy Center';
            position: absolute;
            font-size: 14px;
            transform: rotate(-90deg);
            letter-spacing: 5px;
            top: 280px;
            width: 250px;
            font-family: gilroy-regular;
            right: -100px;
            color: #8E8E8D;
            
          }
    `
    }
    // for home page.
    else{
                return `
                `
    }

});

function Header(props) {

    return (
        <NavItem className="">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 ">
                <div className="w-full sukoon-top-logo flex justify-between">
                    <LogoLink to="/" logoHighlighter={props.logoHighlighter} className="flex w-12 relative  items-center no-underline ">
                        <img src={SukoonLogo} className="" alt="Sukoon Logo"/>
                        <h2 className="text-sukoon text-v3xl font-accanthisRegular ml-4">Sukoon</h2>
                    </LogoLink>
                    <div className="text-sukoon my-auto flex justify-end px-1">
                        <div className="flex ">
                            <div className="fit"><SVG display="inline-block" icon="helpline" width={'25px'} fill={'#12443e'} /></div>
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
