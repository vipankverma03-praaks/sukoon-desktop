import React from "react";
import styled from "styled-components";



const Paragraph = styled.p`
        width: ${props=> props.width || '100%'};
        padding: ${props => props.padding || ''};
        text-align: ${props => props.textAlign || 'left'};
        line-height: normal;
        font-size: 18px;
        @media screen and (max-width: 1600px){
            font-size: 16px;
        }
        @media screen and (max-width: 1400px){
            font-size: 14px;
        }
`;


const Para = (props) =>{
    return(
        <Paragraph width={props.width} padding={props.padding} lineHeigh={props.lineHeight} textAlign={props.textAlign} className={`${props.Class || ''} text-gray-600 my-1 font-gilroyMedium  block`}>
            {props.children || props.content}
        </Paragraph>
    )
};

export default Para;