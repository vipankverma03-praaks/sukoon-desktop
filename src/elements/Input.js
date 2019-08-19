import React from "react";
import styled from "styled-components";

// Material UI imports
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// To customize the input text field component of material ui.
const useStyles = makeStyles(theme => ({
  root: {
    color: '#efefef',
    background: 'white',
    fontFamily: 'gilroy-regular'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  // Main root class
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    color: 'white'
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


const Wrapper = styled.div`
  
  //  Root class  
  .textField {
  
  }  
  
  // input tag inside the textfield. 
  .textField .MuiInputBase-input{
    color: white;
    font-family: gilroy-medium;
  }
   // Border bottom class
   .textField .MuiInput-underline:before{
   border-color: #ffffff;
   }
  
  .textField .MuiInput-underline:hover:not(.Mui-disabled):before{
  border-bottom: 2px solid #f6e05e;
  }
  // Border bottom on hover 
  .textField .MuiInput-underline:after{
    border-bottom: 2px solid #f6e05e;
  }
  
  // focused 
  .textField .MuiFormLabel-root.Mui-focused{
    color: #f6e05e;
  }
`;

const countries = [
  {
    value: 'India',
    label: 'Value',
  },
  {
    value: 'USA',
    label: 'Value',
  },
];

const TextInput = ({classes,defaultValue,textarea,placeholder}) => {

  return(
    <TextField
      required
      id="standard-required"
      label="Required"
      defaultValue={defaultValue}
      multiline={textarea ? true : null}
      placeholder={placeholder}
      type={ textarea ? 'textarea' : 'text'}
      className={classes}
      margin="normal"
      helperText=""
    />
  )
};



const SelectInput = ({classes}) => {

  return(
    <TextField
      id="standard-select"
      label="select"
      select
      defaultValue="Enter details"
      className={classes}
      value="Enter age"
      margin="normal"
      helperText="Select Your Country"
      SelectProps={{
        MenuProps: {
          className: classes.menu,
        },
      }}
    > {countries.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}</TextField>
  )
};

const setInput = (classes, props) => {

  switch(props.type){
    case 'name':
    return <TextInput placeholder={props.placeholder} defaultValue={props.defaultValue} textarea={props.textarea} classes={classes}/>;
    case 'select':
      return <SelectInput classes={classes}/>;
      break;
    default:
      return <TextInput classes={classes}/>;
      break;
  }
};

const Input = (props) => {
  const classes = useStyles();

  return(
    <Wrapper>
      {setInput(classes, props)}
    </Wrapper>

  )
};

export default Input;