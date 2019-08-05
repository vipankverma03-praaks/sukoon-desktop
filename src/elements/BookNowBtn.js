import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  border: ${props => props.type === 'white' ? '1px solid white': '1px solid #12443e'};
  padding: ${props => props.border ? '2px' : props.type === 'white' ? '5px' : ''};
  background: ${props => props.border ? 'white' : (props.type === 'white' ? 'transparent' : '#12443e')};
`;
const Button = (props) =>{

  return(
    <Wrapper border={props.border}  type={props.type} className={`${props.type === 'white' ? 'float-right' : ''} w-fit`}>
      <button
        className={`${props.type === 'white' ? 'bg-white text-sukoon font-bold': 'bg-sukoon'} block relative font-gilroyMedium outline-none text-sm items-center py-2 px-4  text-white`}>
        {props.children}
      </button>
    </Wrapper>
  )
};

export default Button;