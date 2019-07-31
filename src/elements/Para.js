import React from "react";
import styled from "styled-components";

const Para = (props) =>{

    const Paragraph = styled.p`
        width: ${props.width || '23vw'};
        padding: ${props.padding || ''};
        text-align: ${props => props.textAlign || 'left'};
    `

    return(
        <Paragraph width={props.width} padding={props.padding} textAlign={props.textAlign} className="text-gray-600 my-1 text-vlg block">
            {props.children || props.content}
        </Paragraph>
    )
};

export default Para;