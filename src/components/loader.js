import React from "react";
import styled from "styled-components";

import SukoonLogo from "../images/sukoon-logo/logo_dark@3x.png";


const Wrapper = styled.div`
    
    .image-loader {
      transform: scale(2);
      transition: transform 1s ease-in;
    }
`;

const Loader = () => {

  return(
    <Wrapper style={{color: 'red', margin: 'auto'}}>
      <img src={SukoonLogo} className="image-loader w-12" alt="Sukoon Logo"/>
    </Wrapper>
  )
};

export default Loader;