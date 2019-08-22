import  React  from "react";
import styled from "styled-components";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Radio from "../elements/RadioButton";
import moment from "moment";
import {Link} from 'gatsby';
import BookingBtn from "../elements/BookNowBtn";



// Images
import BookingBg from "../images/bookingBg.png";
import SukoonLogo from "../images/logo_light.svg";
import Calender from "../images/cal.svg";
import Edit from "../images/edit_icon.png";
import Timer from "../images/clock.svg";
import SVG from "../elements/SVG";
import Input from "../elements/Input";


const Form = styled.form`
  font-family: gilroy-regular;
  
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

const HomeLink = styled.div`
     top: 0;
     left: 0;
`;

const TimerWrapper = styled.div`
    margin-right: 2rem;
    border-radius: 5px;
    padding: 15px 10px;
`;

const TopLogo = styled.img`
  width: 6vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6vw;
`;

const BookingFields = (props) =>{
  return(
    <div>
      {props.children}
    </div>
  );
};
  


const BookingWrapper = styled.section`
  background-image: url(${BookingBg});
  height: 100vh;
  overflow-y: scroll;
  .BookingInput{
    position: relative;
  }
    
  .BookingInput input{
    padding: 10px;
    border-radius: 5px;
    width: 15vw;
  }
  
  .BookingInput::after{
    content: '';
    width: 30px;
    height: 35px;
    position: absolute;
    top: 5px;
    right: 10px;
    background-image: url(${Calender});
    background-repeat: no-repeat;
  }
`;

const LogoRow = styled.div`
  
  > div > h1{
    padding-top: 20px;
  }
`;

const Date = (props) =>{

  let selectedDate = props.selectedDate ? props.selectedDate : '';

  return(
    <div className="flex justify-around">
      <div className="mt-12">
        <h2 className="text-white mb-2 text-vlg">Pick your Date.</h2>
        <DayPickerInput selectedDay={selectedDate} onDayChange={props.handleDate} style={{background: 'white'}}
                        classNames={{container: 'BookingInput', ovarlayWrapper: 'DateContainer'}}/>
      </div>
    </div>
  )
};





const Time =  (props) => {

  const handleTime = (event, view,time) =>{
    props.updateState('view',view);
    props.updateState('time', time);
    props.updateState('bookingFieldKey', Math.random());
  };

  return(
    <section>
      <div className="p-8">
        <span className="text-gray-400 text-vlg mr-4">Your appointment is on</span>
        <button onClick={(event)=>{handleTime(event,'Date')}}  className="text-white border-solid border-white border-0 border-b text-vlg">
          {moment(props.date).format("Do MMMM YY")}
          <img src={Edit} className="inline-block w-4 ml-4" alt="edit icon"/>
        </button>
      </div>
      <div className="flex flex-col font-gilroyRegular p-8 text-vsm flex-no-wrap">
        <div className="mx-auto flex">
          <TimerWrapper className="flex items-center bg-white mr-4">
            <Radio spanText="03:00 PM - 05:00 PM" handleButton={handleTime} arguments={['Info','03:00 PM - 05:00 PM']} />
            <img src={Timer} className="w-6 inline-block" alt="timer icon"/>
          </TimerWrapper>
          <TimerWrapper className="flex items-center bg-white mr-4">
            <Radio spanText="03:00 PM - 05:00 PM" handleButton={handleTime} arguments={['Info','03:00 PM - 05:00 PM']} />
            <img src={Timer} className="w-6 inline-block" alt="timer icon"/>
          </TimerWrapper>
          <TimerWrapper className="flex items-center bg-white mr-4">
            <Radio spanText="03:00 PM - 05:00 PM" handleButton={handleTime} arguments={['Info','03:00 PM - 05:00 PM']} />
            <img src={Timer} className="w-6 inline-block" alt="timer icon"/>
          </TimerWrapper>
        </div>
        <div className="mx-auto flex mt-8">
          <TimerWrapper className="flex items-center bg-white mr-4">
            <Radio spanText="03:00 PM - 05:00 PM" handleButton={handleTime} arguments={['Info','03:00 PM - 05:00 PM']} />
            <img src={Timer} className="w-6 inline-block" alt="timer icon"/>
          </TimerWrapper>
          <TimerWrapper className="flex items-center bg-white mr-4">
            <Radio spanText="03:00 PM - 05:00 PM" handleTime={handleTime} arguments={['Info','03:00 PM - 05:00 PM']} />
            <img src={Timer} className="w-6 inline-block" alt="timer icon"/>
          </TimerWrapper>
        </div>

      </div>
    </section>
  )
};

// User information component.
const Information = (props) =>{

  const handleRadioButton = (event, sex) =>{

  };

  const handleTime = (event, view) =>{
    props.updateState('view',view);
    props.updateState('bookingFieldKey', Math.random());
  };

  return (
    <section className="p-8 flex flex-col">
      <div>
        <div>
          <span className="text-gray-250 text-vlg mr-4">Your Appoinment is on</span>
          <button className="text-white text-vlg underline">
            {moment(props.date).format("Do MMMM YY")}
            <img src={Edit} onClick={(event)=>{handleTime(event,'Date')}} className="inline-block w-4 ml-4" alt="edit icon" />
          </button>
        </div>
        <div className="mt-4">
          <span className="text-gray-250 text-vlg mr-4">At</span>
          <button className="text-white text-vlg underline">
            {props.time}
            <img src={Edit} onClick={(event)=>{handleTime(event,'Time')}} className="inline-block w-4 ml-4" alt="edit icon" />
          </button>
        </div>
      </div>
      <Form action="" className="text-white">
        <h2 className="text-white font-gilroyMedium font-medium text-v4xl">Enter Information</h2>
        <div className="flex py-4 justify-between">
          <div id="left-information" className="flex justify-between flex-col w-1/2 mr-4">
            <Input type="name" required={true} defaultValue={``} wrapperClass="my-2 w-full " label="First Name"/>
            <div className="my-2">
              <span>Sex :</span>
              <Radio display="inline-block" handleButton={handleRadioButton} arguments={['M']} spanClass="text-white mx-4" spanText="Male"/>
              <Radio display="inline-block" handleButton={handleRadioButton} spanClass="text-white mx-4" arguments={['F']} spanText="Female"/>
            </div>
            <Input type="name" required={true} defaultValue={``} wrapperClass="w-full " label="Email"/>
          </div>
          <div id="right-information" className="pl-4 justify-between w-1/2">
            <Input type="name" required={true} defaultValue={``} wrapperClass="my-2 w-full " label="Last Name"/>
            <div className="flex my-2 items-center">
              <span className="mr-2 self-end">DOB :</span>
              <Input type="select" wrapperClass="inline-block mr-8 w-1/9" label="Year" placeholder=""/>
              <Input type="select" wrapperClass="inline-block mr-8 w-1/9" label="Month" placeholder=""/>
              <Input type="select" wrapperClass="inline-block w-1/9" label="Day" placeholder=""/>
            </div>
            <Input type="name" required={true} wrapperClass="w-full" label="Phone Number" defaultValue={``}/>
          </div>
        </div>
        <BookingBtn wrapperClass="float-right" theme="white" padding="5px">Book and Pay</BookingBtn>
      </Form>
    </section>
  );
};

// Main component
export default class BookingPage extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        view: 'Date',
        selectedDate: '',
        bookingFieldKey: Math.random(),
        time: '',
      };
    }

  //   function to State update.
  updateState = (stateName, value) =>{
      this.setState({[stateName]: value});
  };

  handleDate = (selectedDay) => {
      if(selectedDay !== 'undefined' && selectedDay){
        this.setState({selectedDate: selectedDay});
        this.setState({view: 'Time'})
      }
      else{
        this.setState({view: ''});
      }
  };

    render(){

      return(
        <BookingWrapper className="relative">
          <HomeLink className="text-gray-250 absolute mt-12  ml-8">
            <SVG margin="0 10px 0 0" rotate display="inline-block" icon="arrow" width={'30px'} fill={'#8e8e8e'} />
            <Link to="/" className="text-vlg border-b border-gray-250 pb-2">Back to Home</Link>
          </HomeLink>
          <LogoRow className="flex justify-center my-auto">
            <div className="text-center">
              <TopLogo src={SukoonLogo} alt="Sukoon Logo"/>
              <h1 className="text-white text-v4xl font-accanthisRegular">Sukoon</h1>
            </div>
          </LogoRow>
          <BookingFields key={this.state.bookingFieldKey}>
            {this.state.view === 'Date'? <Date handleDate={this.handleDate} selectedDate={this.state.selectedDate}/>
            :this.state.view === 'Time' ? <Time date={this.state.selectedDate} updateState={this.updateState}/>
            :this.state.view === 'Info' ? <Information date={this.state.selectedDate} time={this.state.time} updateState={this.updateState}/>
            : null}
          </BookingFields>
        </BookingWrapper>
      )
    }

}






