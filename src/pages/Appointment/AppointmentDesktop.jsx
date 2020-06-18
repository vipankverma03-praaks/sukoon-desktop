import React from "react";
import styled from "styled-components";

import Radio from "../../elements/RadioButton/desktop";
import BookingBtn from "../../elements/BookNowBtn/desktop";
import Input from "../../elements/Input/desktop";
import ChooseDate from "../../elements/datePicker/datePicker";

// Images
import BookingBg from "../../images/bookingBg.png";
import SukoonLogo from "../../images/logo_light.svg";
import Calender from "../../images/cal.svg";
import DocImg from "../../images/doctor/doctor1.jpg";
// Components

// Images

// Styled Components

const Wrapper = styled.div`
  
`;
const Form = styled.form`
  margin: 40px 10vw 0 10vw;
  
  input, select{
  padding-bottom: 10px;
  font-size: 18px;
  background: transparent;
  outline: none;
  }
  
  select{
  padding: 0 1.5vw;
  }
  
  input::placeholder{
    opacity: 1;
  }
  select{
  margin: 0 10px;
  border-bottom: 1px solid white;
  padding-bottom: 5px;
  text-align: left;
  }
  select option{
  background-color: transparent;
  }
 
`;
const BookingWrapper = styled.section`
  background-image: url(${BookingBg});
  height: 100vh;
  `;
const PatientForm = (props) =>{

  const handleRadioButton = () => {
    return null;
  };
  
  function handleSubmit (stateName, value, updateState) {
    updateState(stateName, value);
  };
  return (
  <BookingWrapper>  
    <div className="h-full flex p-5">
      <Form action="" className="text-white m-0 w-full">
          <h2 className="text-white font-Bold text-4xl">Patient Details</h2>
          <div className="overflow-hidden">
            <div id="left-information" className="">
              <Input type="name" required={true} defaultValue={``} wrapperClass="my-2 w-full " label="First Name"/>
              <Input type="name" required={true} defaultValue={``} wrapperClass="my-2 w-full " label="Last Name"/>
              <div className="my-2">
                <span>Sex :</span>
                <Radio display="inline-block" handleButton={handleRadioButton} arguments={['M']} spanClass="text-white mx-4" spanText="Male"/>
                <Radio display="inline-block" handleButton={handleRadioButton} spanClass="text-white mx-4" arguments={['F']} spanText="Female"/>
              </div>
            </div>
            <div id="right-information" className="justify-between">
              <div className="flex my-2 items-center">
                <span className="mr-2 self-end">DOB :</span>
                <Input type="select" wrapperClass="inline-block" label="Year" placeholder=""/>
                <Input type="select" wrapperClass="inline-block mr-2" label="Month" placeholder=""/>
                <Input type="select" wrapperClass="inline-block" label="Day" placeholder=""/>
              </div>
              <Input type="name" required={true} defaultValue={``} wrapperClass="w-full " label="Email"/>
              <Input type="name" required={true} wrapperClass="w-full" label="Phone Number" defaultValue={``}/>
            </div>
          </div>
          <div className="flex w-full justify-end mt-12">
          <BookingBtn wrapperClass="" buttonClass={''} theme="mint" padding="8px" clickFn={handleSubmit} buttonArguments={['view', 'thank you', props.updateState]}>Pay Now</BookingBtn>
          </div>
        </Form>
    </div>
  </BookingWrapper>
  )
  
  };
  
function AppointmentDesktop(props) {

  return (
    <>
      <Wrapper className={`flex`}>
        <h1 className={`text-sukoon mt-16 mx-auto`}>Welcome to video appointment</h1>
      </Wrapper>
      <PatientForm></PatientForm>
    </>
  );
}

export default AppointmentDesktop;
