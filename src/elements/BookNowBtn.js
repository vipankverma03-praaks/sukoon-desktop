import React from "react";
import styled, { ThemeProvider } from "styled-components";


const Wrapper = styled.div`
  padding: 4px;
  background: ${props=> props.transparent ? '' : props.theme.fg};
  border:  ${props => props.transparent ? '' : `1px solid ${props.theme.bg}`};
  
  button:focus{
    outline: none;
  }
`;

const ThemedButton = styled.button`
  
  padding: ${props => props.buttonPadding || '10px 20px'};
  color: ${props => props.transparent ? '#12443e' :props.theme.fg};
  background: ${props => props.transparent ?  'transparent' : props.theme.bg};
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
      <Wrapper transparent={props.transparent} className={`${props.wrapperClass || ''} w-fit`}>
        <ThemedButton onClick={()=>{props.clickFn(...props.arguments)}} transparent={props.transparent} buttonPadding={props.buttonPadding}
          className={`${props.buttonClass || ''} block relative font-gilroyMedium outline-none text-lg items-center`}>
          {props.children}
        </ThemedButton>
      </Wrapper>
    </ThemeProvider>

  )
};

export default Button;