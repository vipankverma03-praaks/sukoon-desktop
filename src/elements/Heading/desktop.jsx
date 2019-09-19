import React from "react";
import styled from "styled-components";

const Title = (props) =>{

  const Wrapper = styled.div`
    
 `;

  const Explore = styled.div`
    ${props => props.borderRight ? 'border-right' : 'border-left'}: 3px solid #ffc300;
    color: #12443d;
    text-align: ${props => props.textAlign || 'left'};
     ${props => props.borderRight ? 'padding-right' : 'padding-left'}: 8px;
     margin-bottom: 10px;
`;

  const HeadingWrapper = styled.div`
    line-height: 1;
    text-align: ${props => props.textAlign || 'left'};
`;
  const HeadingLight = styled.span`
     display: ${props => props.display };
`;
  const HeadingBold = styled.span`
     display: ${props => props.display };
`;

  return(
    <Wrapper className={props.wrapperClass} >
      <Explore textAlign={props.textAlign} className="font-normal uppercase" borderRight={props.borderRight}>{props.subHeading || 'Explore'}</Explore>
      <HeadingWrapper textAlign={props.textAlign} className="text-sukoon inline text-v5xl w-full">
        <HeadingLight className="font-normal mt-3 mr-2" display={props.display}>{props.titleLight || ''}</HeadingLight>
        <HeadingBold className={`font-bold mb-3 ${props.addClass}`} display={props.display}>{props.titleBold || ''}</HeadingBold>
      </HeadingWrapper>
    </Wrapper>
  )
};

export default Title;