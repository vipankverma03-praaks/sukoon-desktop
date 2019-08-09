import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  
  padding: ${props => props.border ? '2px' : ''};
  background: ${props => props.border ? props.bg || 'white' : '#12443e'};
  border: ${props=> props.borderTransparent ? '1px solid transparent' : '1px solid #12443e'};

  
  button{
  padding: 5px 10px;
  }
`;
const Button = (props) =>{

  return(
    <Wrapper borderTransparent={props.borderTransparent} bg={props.bg} border={props.border} className={`${props.wrapperClass || ''} w-fit`}>
      <button
        className={`${props.buttonClass || ''} block relative font-gilroyMedium outline-none text-vsm items-center bg-sukoon text-white`}>
        {props.children}
      </button>
    </Wrapper>
  )
};

export default Button;