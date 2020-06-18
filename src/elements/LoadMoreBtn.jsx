import React from "react";
import styled from "styled-components";

const LoadMoreBtn=styled.button`
display: flex;
justify-content: center;
align-items: center;
min-width: auto;
min-height: auto;
padding-left:10px;
padding-right:10px;
line-height: 2rem;
border-radius: 3px;
border: 1px solid rgb(197,215,201);
color: #12443e;
text-align: center;
font-size: 15px;
font-family: Roboto, sans-serif;
font-weight: 400;
&:hover{
    border-color:#12443e
}
`;


const load = (props) =>{
  return(
    <LoadMoreBtn>Load More
    </LoadMoreBtn>
  )
};

export default load;