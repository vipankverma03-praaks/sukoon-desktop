import React from "react";
import styled, { ThemeProvider } from "styled-components";


const Wrapper = styled.div`
  padding: 4px;
  background: ${props=> props.theme.fg};
  border: 1px solid ${props => props.theme.bg};

`;

const ThemedButton = styled.button`
  padding: ${props => props.buttonPadding || '10px 20px'};
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
`;

const green = {
  bg: '#12443e',
  fg: '#fff',
  paleMint:'#C2DCD3',
};

const white = ({bg,fg})=>({
    bg: fg,
    fg: bg,
});

const mint ={
  bg:'#C2DCD3',
  fg: '#12443e',
};

const Button = (props) =>{

  const theme = props.theme === 'green' ? green : props.theme === 'mint' ? mint : props.theme === 'white' ? white : green;

  return(
    <ThemeProvider theme={theme}>
      <Wrapper className={`${props.wrapperClass || ''} w-fit`}>
        <ThemedButton buttonPadding={props.buttonPadding}
          className={`${props.buttonClass || ''} block relative font-gilroyMedium outline-none text-lg items-center`}>
          {props.children}
        </ThemedButton>
      </Wrapper>
    </ThemeProvider>

  )
};

export default Button;