import React from "react";
import styled from "styled-components";



const Paragraph = styled.p`
        width: ${props=> props.width || '100%'};
        padding: ${props => props.padding || ''};
        text-align: ${props => props.textAlign || 'left'};
        line-height: ${props => props.lineHeight || '1.1vw'};
`;


const Para = (props) =>{
    return(
        <Paragraph width={props.width} padding={props.padding} lineHeigh={props.lineHeight} textAlign={props.textAlign} className={`${props.Class || 'text-vsm'} text-gray-600 my-1 font-gilroyMedium  block`}>
            {props.children || props.content}
        </Paragraph>
    )
};

export default Para;