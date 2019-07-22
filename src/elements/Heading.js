import React from "react";
import styled from "styled-components";

const Title = (props) =>{

 const Wrapper = styled.div`
    
 `

const Explore = styled.div`
    border-left: 3px solid #ffc300;
    color: #12443d;
    padding-left: 8px;
`

const HeadingWrapper = styled.div`
    
`
const HeadingLight = styled.span`
     display: ${props => props.display || 'inline'};
`
const HeadingBold = styled.span`
     display: ${props => props.display || 'inline'};
`

    return(
        <Wrapper className={props.wrapperClass}>
            <Explore>Explore</Explore>
            <HeadingWrapper className="text-sukoon inline text-4xl w-full">
                <HeadingLight className="font-light mr-2" display={props.display}>{props.titleLight || ''}</HeadingLight>
                <HeadingBold className="font-semibold" display={props.display}>{props.titleBold || ''}</HeadingBold>
            </HeadingWrapper>
        </Wrapper>
    )
}

export default Title;