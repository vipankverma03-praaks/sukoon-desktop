import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  border: 1px solid #12443e;
  padding: ${props => props.border ? '2px' : ''};
  background: ${props => props.border ? 'white' : '#12443e'};
`;
const Button = (props) =>{

  return(
    <Wrapper border={props.border} className="w-fit">
      <button
        className="block relative outline-none text-sm items-center py-2 px-4 bg-sukoon text-white">
        {props.children}
      </button>
    </Wrapper>
  )
};

export default Button;