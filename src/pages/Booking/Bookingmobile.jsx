import  React  from "react";
import styled from "styled-components";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {Link} from 'gatsby';

//  Components
import Radio from "../../elements/RadioButton/mobile";
import moment from "moment";
import BookingBtn from "../../elements/BookNowBtn/mobile";

// Images
import BookingBg from "../../images/bookingBg.png";
import DocImg from "../../images/doctor/doc_mobile.png";
import SukoonLogo from "../../images/logo_light.svg";
import Calender from "../../images/cal.svg";
import Edit from "../../images/edit_icon.png";
import Timer from "../../images/clock.svg";
import SVG from "../../elements/SVG";
import Input from "../../elements/Input";


const Form = styled.form`
  font-family: gilroy-regular;
  
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
  background-size:cover;
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

// updated_design=============>>>>>>>>>>>>>>>>>>>>>


// date_picker_style====>>

const BookLogo = styled.img`
    margin: 0 auto;
    padding-top: 25px;
    max-width: 80px;
    display:block;
`;

const InputIcon = styled.img`
    max-width: 80px;
`;

const Main_sec = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content:space-between;
    align-items:center;
`;
// date_picker_style  END   ====>>

// doctor_listing   ====>>

const DoctorListing = styled.div`

ul {
  display:flex;
  flex-flow:wrap;
  max-height: 380px;
  overflow-x: hidden;
  overflow-y: auto;
}
ul li {
  width:50%;
}
.DocCard {
  margin:0px 15px 25px 15px
}
.DocCard img {
  width:100%;
}
.DocCard p {
    width: 100%;
    display: block;
    padding: 6px;
    font-size: 13px;
    background: #12443E;
    color: #fff;
    text-align: center;
}

`;

// doctor_listing  END   ====>>

// doctor_slot   ====>>

const DocSlotImg = styled.img`

display:block;
object-fit:cover;

`;

const DateSlot = styled.ul`
  display: flex;
    width: 480px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 5px;
  li{
    width: 44px;
    height: 40px;
    background: white;
    padding: 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.3;
    margin-right:20px;
  }
  li:last-child{
    margin-right:0px;
  }
  li::after{
    content: '';
    display: block;
    width: 52px;
    height: 48px;
    background: none;
    border: 1px solid #fff;
    top: -4px;
    position: absolute;
    left: -4px;
  }

`;

const TimeSlot = styled.div`

    display: flex;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    flex-flow: wrap;
    margin-top:25px;

.slot{
  width:50%;
}
.slot div {
  margin:5px;
}

`;

// doctor_slot  END  ====>>




// add_material UI date picker
const DatePicker = () =>{

  return (
    <Main_sec className="">
      <div>
      <BookLogo  src={`${SukoonLogo}`} alt=""/>
      <p className="font-accanthisRegular text-white text-base mt-2">Sukoon</p>
      </div>
      <div className="py-5 text-center text-white relative">
        <input className="bg-transparent text-xs w-64 p-3" type="Name" placeholder="Pick Your Date" />
      </div>
      <BookingBtn wrapperClass="w-full" buttonClass={'w-full'} theme="mint" padding="8px">Submit</BookingBtn>
    </Main_sec>
  )

};

const Doclist = () =>{

  return (
    <Main_sec className="">
      <h2 className="pt-5 text-white text-xl w-full pl-5">Choose An Expert</h2>
      <DoctorListing className="">
        <ul>
          <li>
            <div className="DocCard">
            <img src={`${DocImg}`} alt="" />
            <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
            <img src={`${DocImg}`} alt="" />
            <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
            <img src={`${DocImg}`} alt="" />
            <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
            <img src={`${DocImg}`} alt="" />
            <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
            <img src={`${DocImg}`} alt="" />
            <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
            <img src={`${DocImg}`} alt="" />
            <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
            <img src={`${DocImg}`} alt="" />
            <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
            <img src={`${DocImg}`} alt="" />
            <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
            <img src={`${DocImg}`} alt="" />
            <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
            <img src={`${DocImg}`} alt="" />
            <p>Dr. Samir Parikh</p>
            </div>
          </li>
        </ul>
      </DoctorListing>
      <BookingBtn wrapperClass="w-full" buttonClass={'w-full'} theme="mint" padding="8px">Submit</BookingBtn>
    </Main_sec>
  )

};

const DocBookSlot = () =>{

return (

  <Main_sec className="">
      
      <div className="SetDocSlot w-full p-3">
        <div className="w-full flex flex-wrap">
          <DocSlotImg className="w-4/12" src={`${DocImg}`} alt="" />
          <p className="w-8/12 pl-5">
            <h2 className="text-2xl text-white leading-tight font-semibold">Dr. Samir Parikh</h2>
            <h5 className="text-sm text-white font-medium">MBBS, DPM, MD (Psychiatry)</h5>
            <span className="text-xs text-white font-regular mt-2 leading-tight block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
          </p>
          <div className="w-full flex my-6 text-white justify-between">
            <h4>Schedule My Booking For ? </h4>
            <Input type="select" />
          </div>
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <DateSlot className="">
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
            </DateSlot>
          </div>
          <TimeSlot className="w-full">
            <div className="slot">
              <TimerWrapper className="flex items-center bg-white">
                <Radio spanText="03:00 - 05:00 PM" handleButton={''} arguments={['Info','03:00 - 05:00 PM']} />
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center bg-white">
                <Radio spanText="03:00 - 05:00 PM" handleButton={''} arguments={['Info','03:00 - 05:00 PM']} />
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center bg-white">
                <Radio spanText="03:00 - 05:00 PM" handleButton={''} arguments={['Info','03:00 - 05:00 PM']} />
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center bg-white">
                <Radio spanText="03:00 - 05:00 PM" handleButton={''} arguments={['Info','03:00 - 05:00 PM']} />
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center bg-white">
                <Radio spanText="03:00 - 05:00 PM" handleButton={''} arguments={['Info','03:00 - 05:00 PM']} />
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center bg-white">
                <Radio spanText="03:00 - 05:00 PM" handleButton={''} arguments={['Info','03:00 - 05:00 PM']} />
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center bg-white">
                <Radio spanText="03:00 - 05:00 PM" handleButton={''} arguments={['Info','03:00 - 05:00 PM']} />
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center bg-white">
                <Radio spanText="03:00 - 05:00 PM" handleButton={''} arguments={['Info','03:00 - 05:00 PM']} />
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center bg-white">
                <Radio spanText="03:00 - 05:00 PM" handleButton={''} arguments={['Info','03:00 - 05:00 PM']} />
              </TimerWrapper>
            </div>
          </TimeSlot>
        </div>
        
      </div>
      <BookingBtn wrapperClass="w-full" buttonClass={'w-full'} theme="mint" padding="8px">Book Now</BookingBtn>
    </Main_sec>

  )
  
};

const PatientForm = () =>{

const handleRadioButton = () => {
  return null;
}


return (

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
        <BookingBtn wrapperClass="w-full" buttonClass={'w-full'} theme="mint" padding="8px">Pay Now</BookingBtn>
      </Form>
  </div>

)

};



const ThankYou = () =>{

  return(
    <div className="p-5 justify-between flex h-full flex-wrap items-center">
      <div className="w-full">
        <h2 className="text-white text-5xl font-bold text-center">Thank You</h2>
        <h4 className="text-white text-sm text-center">Your video appointment is on<br/>  
        <b>24th March, 2019</b><br/> 
        With Dr. Samir Parikh<br/> 
        From <b>9:00 - 9:15 AM</b></h4>
      </div>
      <div className="w-full">
        <p className="text-white text-xs text-center">Your appointment details have also been sent 
        via your preferred communication
        (SMS or Email). Find out more about <a className="text-blue-500">our online 
        consultation process here.</a></p>
      </div> 
      <div className="w-full">
        <p className="text-white text-xs text-center">Kindly reach us at <a className="text-blue-500">9910911092 </a>in case of any queries.</p>
      </div>  
    </div>
  )

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
        {/* <DatePicker /> */}
        {/* <Doclist /> */}
        <DocBookSlot />        
        {/* <PatientForm /> */}
        {/* <ThankYou /> */}

        {/* <HomeLink className="text-gray-250 absolute mt-12  ml-8">
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
        </BookingFields> */}
      </BookingWrapper>
    )
  }

}






