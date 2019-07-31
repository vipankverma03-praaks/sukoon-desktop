import React from "react";
import styled from "styled-components";
import  {Link} from "gatsby";

import ArrowIcon from "../images/icons/arrow_right.svg";



const ButtonWrapper = styled.div`
    display: flex;
    margin: 10px 0;
`;

const Img = styled.img`
    width: 24px;
    height: 24px;
`;

const ArrowButtonLink = styled(Link)`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 50%;
    padding: 4px;
`


const ArrowButton = (props) =>{

    return(
        <ButtonWrapper>
            <ArrowButtonLink to="/about">
                <Img src={ArrowIcon} alt="arrow-icon"/>
            </ArrowButtonLink>
        </ButtonWrapper>
    )
};

export default ArrowButton;