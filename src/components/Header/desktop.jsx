import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// Components
import SVG from "../../elements/SVG/desktop";

// Images
import SukoonLogo from "../../images/sukoon-logo/Logo_CB_NoText.png"

// import Tooltip from "../../elements/Tooltip/tooltip";

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
            top: 118px;
            right: auto; 
            left:-20px;
              
          }
          
          &::before{
            content: 'Psychotherapy Center';
            position: absolute;
            font-size: 13px;
            transform: rotate(-90deg);
            letter-spacing: 5px;
            top: 280px;
            width: 250px;
            right: auto; 
            left:-100px;
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
          <div>
            <LogoLink to="/" logoHighlighter={props.logoHighlighter} className="flex relative  items-center no-underline ">
              <img src={SukoonLogo} className="" style={{"width":"16em"}} alt="Sukoon Logo"/>            
              {/* <h2 className="text-sukoon text-v3xl font-accanthisRegular ml-4">Sukoon</h2>
              <img src={logoPart} className="" alt="Sukoon Logo"/> */}
            </LogoLink>
          </div>
          
          <div className="text-sukoon my-auto flex justify-end px-1">
            <div className="flex ">
              <div className="fit">
                {/*<Tooltip toolTipText={`1800 123 6789`}>*/}
                {/*  <SVG display="inline-block" icon="helpline" width={'25px'} fill={'#12443e'}/>*/}
                {/*</Tooltip>*/}
                <SVG display="inline-block" icon="helpline" width={'25px'} fill={'#12443e'} />
              </div>
              <span className="ml-4">+91 8448170041</span>
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
