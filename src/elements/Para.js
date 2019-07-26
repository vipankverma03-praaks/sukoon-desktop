import React from "react";
import styled from "styled-components";

const Para = (props) =>{

    const Paragraph = styled.p`
        width: ${props.width || '23vw'};
        padding: ${props.padding || ''};
    `

    return(
        <Paragraph width={props.width} padding={props.padding} className="text-gray-600 block text-right">
            {props.content}
        </Paragraph>
    )
};

export default Para;