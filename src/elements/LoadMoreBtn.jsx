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
border: 1px solid rgb(171, 171, 171);;
color: rgb(171, 171, 171);;
text-align: center;
font-size: 15px;
font-family: Montserrat, sans-serif;
font-weight: 500;
&:hover{
    color: rgb(248, 119, 124); 
    border-color: rgb(248, 119, 124); 
}
`;


const load = (props) =>{
  return(
    <LoadMoreBtn>Load More
    </LoadMoreBtn>
  )
};

export default load;