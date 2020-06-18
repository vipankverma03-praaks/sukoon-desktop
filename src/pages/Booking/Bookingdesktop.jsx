import  React,{useState,useEffect }  from "react";
import styled from "styled-components";
import 'react-day-picker/lib/style.css';
import axios from "axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import LocalStorageService from "../LocalStorageService";
import Loader from "../../components/loader";
//  Components
import Radio from "../../elements/RadioButton/desktop";
import BookingBtn from "../../elements/BookNowBtn/desktop";
import Input from "../../elements/Input/desktop";
import ChooseDate from "../../elements/datePicker/datePicker";

// Images
import BookingBg from "../../images/bookingBg.png";
import SukoonLogo from "../../images/logo_light.svg";
import Calender from "../../images/cal.svg";
import DocImg from "../../images/doctor/doctor1.jpg";

import Sameer from "../../images/doctor/kalani.jpeg";
import Ila from "../../images/doctor/ila.jpeg";
import Jaiman from "../../images/doctor/jaiman.jpeg";
import Sharmeen from "../../images/doctor/Sharmeen.jpeg";
import Akshita from "../../images/doctor/akshita.jpeg";

const localStorageService = LocalStorageService.getService();

// axios.interceptors.request.use(
//   config => {
//       const token = localStorageService.getAccessToken();
//       if (token) {
//           config.headers['request_handler_key'] = token;
//       }
//       config.headers['Content-Type'] = 'application/json';
//       return config;
//   },
//   error => {
//       Promise.reject(error)
//   });

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

const HomeLink = styled.div`
     top: 0;
     left: 0;
`;

const TimerWrapper = styled.div`
    margin-right: 2rem;
    /* border-radius: 5px; */
    padding: 5px 10px;
    curson:pointer;
    /* text-align:center; */
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

const BookLogo = styled.img`
    margin: 0 auto;
    padding-top: 25px;
    max-width: 80px;
    display:block;
`;

const MainSec = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content:space-evenly;
    align-items:center;
    padding:0% 8%;
`;

const DoctorListing = styled.div`

ul {
  display:flex;
  flex-flow:wrap;
  max-height: 35vw;
  overflow-x: hidden;
  overflow-y: auto;
}
ul li {
  width:20%;
  cursor:pointer;
}

.DocCard {
  margin:0px 15px 25px 0;
  padding:3px;
}
.DocCard img {
  width:100%;
  object-fit:cover;
}
.DocCard p {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 6px;
    font-size: 16px;
    background: #12443E;
    color: #fff;
    text-align: center;
    height:65px;
    margin-bottom:0;
}
.DocCard:hover{
  border:3px solid #fff;
}
.DocCard.border{
  border:3px solid #fff;
}


`;

const DocSlotImg = styled.img`

max-width:100%;
max-height: 225px;
    object-fit: cover;

`;

const DateSlot = styled.ul`
  display: flex;
  justify-content:space-between;
`;

const TimeSlot = styled.div`
    display: flex;
    overflow-x: hidden;
    overflow-y: auto;
    flex-flow: wrap;
    margin-top:25px;
    margin-bottom:25px;
    height:fit-content;

.slot{
  width:25%;
  height:fit-content;
}
.slot div {
  margin:5px;
    border: 1px solid #fff;
    color: #fff;
}
`;

const ThankSec = styled.div`
display:flex;
flex-flow:column;
justify-content:center;

`;

const DoctorsContent = [
  {
    doctors: [
      {
        name: "Dr. Sameer Kalani",
        image: Sameer,
        designation:"Center Head, Sr. Consultant Psychiatrist",          
        qualification: "MD (Psychiatry)",
        bio: `Dr. Sameer Kalani is a Psychiatrist by profession, helping people work out their emotional and behavioural difficulties. He predominantly works with children, adolescents and elderly. He treats patients with conditions like anxiety disorder, panic disorder, social phobia, specific phobia, post-traumatic stress disorder, bipolar disorder, Alzheimer’s disease, vascular dementia, anorexia nervosa, bulimia nervosa, major depressive disorder, stuttering, schizophrenia, and hyperactivity disorder.  He strongly believes that being free from mental illness is not just enough; we must strive towards a better and healthy state of mind and body. He has been blessed to have worked with the top most experts of India in the field of mental health and well-being in Mumbai and Delhi.` ,
        id:"DOC00140"
      },
      {
        name: "Dr. Shambhavi Jaiman",
        image: Jaiman,
        designation:"Consultant,Clinical Psychologist" ,          
        qualification: "MD (Psychiatry)",
        bio: `Dr. Shambhavi Jaiman, M.D., is a compassionate and dynamic psychiatrist. She has worked extensively with, and successfully managed individuals with severe mental illnesses. Dr. Jaiman has worked in, out-patient, in-patient as well as emergency psychiatry departments and has researched and published on topics of addiction and psychotic conditions.She has received specialized training in Child and Adolescent Psychiatry at NIMHANS, Bangalore while being posted there as part of her MD training. Her practice in de-addiction centres has inculcated a strong focus on patient empowerment and rehabilitative. `,
        id:"DOC00141"
      },
      {
        name: "Ms. Ila Kulshrestha",
        image: Ila,
        designation:"Consultant,Clinical Psychologist" ,  
        qualification: "M. Phil. Clinical Psychology",
        bio: `Ms. Ila Kulshrestha is a licensed clinical psychologist recognized by <a href="http://www.rehabcouncil.nic.in/" target="_blank" style="color: #fff;font-weight: 700;">Rehabilitation Council of India</a> and a CID- UNESCO certified Arts based Therapist. She uses an eclectic framework of psychotherapy to devise a personalized treatment plan for each individual. She is proficient in providing various psychological assessments including psycho-diagnostics, personality, neuropsychological, developmental and IQ assessments.`,
        id:"DOC00142"
      },
      {
        name: "Ms. Akshita Shukla",
        image: Akshita,
        designation:"Consultant,Clinical Psychologist" ,  
        qualification: "",
        bio: `Ms. Akshita Shukla is a Licensed Clinical Psychologist recognized by the <a href="http://www.rehabcouncil.nic.in/" target="_blank" style="color: #fff;font-weight: 700;">Rehabilitation Council of India.</a> She has worked at various hospitals and clinics across different states in India. Her expertise in psychological assessments and psychotherapy helps in devising the
          treatment plan for each individual. She believes that psychotherapy can help individuals most effectively use their resources to increase self-understanding, improve decision-making, solve problems, and create paths to the lives they want.`,
        id:"DOC00143"
      },
      {
        name: "Sharmeen Kaur Khurana",
        image: Sharmeen,
        designation:"Consultant,Clinical Psychologist" ,  
        qualification: "",
        bio: `Sharmeen Kaur Khurana is an Art Based Therapist certified by <a href="https://www.baat.org/" target="_blank" style="color: #fff;font-weight: 700;">British Association of ArtTherapy</a> and CID - UNESCO. She is a registered member of the <a href="https://www.hcpc-uk.org/" target="_blank" style="color: #fff;font-weight: 700;">Health and Care Professions Council (UK)</a> and The Art Therapy Association (India). She uses different modes of art such as visual arts, music, storytelling, creative writing, and movement in her therapeutic practice. Sharmeen has experience working with therapeutic groups in open studio approach in varied settings of art museums, schools and refugee charities.`,
        id:"DOC00144"
      },
    ]
  },
];
// Function to change the view after submit button.
function handleSubmit (stateName, value, updateState) {
    updateState(stateName, value);  
};
function handleDocSlotSubmit(stateName, value, updateState,checkStateVariable)
{
  if(checkStateVariable){
    updateState(stateName, value);
  }
  else{}
}
function handleSubmitDoctor(stateName, value, updateState,checkStateVariable)
{
  if(checkStateVariable){
    updateState(stateName, value);
  }
  else{}
}
function handleDateSubmit(date, updateState)
{
  if(date){
    updateState('selectedDate',date)
    updateState('view','Doctor List')
  }    
}

// add_material UI date picker
const DatePicker = (props) =>{
  let datepicked
  function getData(date){   
      props.updateState('selectedDate',date)    
  }
  return (
    <MainSec className="">
      <div>
      <BookLogo  src={`${SukoonLogo}`} alt=""/>
      <p className="font-accanthisRegular text-white text-base mt-2">Sukoon</p>
      </div>
      <div className="py-5 text-center text-white relative">
        <ChooseDate getData={getData}/>
      </div>
      <BookingBtn wrapperClass="self-end mt-32 mr-64" buttonClass={''} theme="mint" padding="8px"  clickFn={handleDateSubmit} buttonArguments={[props.date,props.updateState]}>Submit</BookingBtn>
    </MainSec>
  )

};

const Doclist = (props) =>{
  // const [doctorID, setDoctorID] = useState( '' );
  return (
    <MainSec className="">
      <h2 className="pt-16 pb-4 text-white text-2xl w-full font-bold">Choose An Expert</h2>
      <DoctorListing className="">
        <ul>
          {DoctorsContent.map((item,index) =>{
              return(              
                item.doctors.map(doctor=>{            
                  return(
                    <li  className="doc-list-item">
                      <div className={`DocCard ${props.doctorID==doctor.id? "border":""}`} 
                        onClick={() => {props.updateState('doctorID',doctor.id),
                                          props.updateState('doctorName',doctor.name),
                                          props.updateState('doctorDesignation',doctor.designation),
                                          props.updateState('doctorQualification',doctor.qualification),
                                          props.updateState('doctorBio',doctor.bio)
                                          props.updateState('doctorImage',doctor.image)}}>
                          <img src={`${doctor.image}`} alt="" />
                          <p>{doctor.name}</p> 
                      </div>
                    </li>
                  )
                })
              )              
            })}
        </ul>
      </DoctorListing>
      <div className="w-full justify-end flex">
      <BookingBtn wrapperClass="" buttonClass={''} theme="mint" padding="8px" clickFn={handleSubmitDoctor} buttonArguments={['view', 'Doctor Slots', props.updateState,props.doctorID]}>Submit</BookingBtn>
      </div>
    </MainSec>
  )

};

  const DocBookSlot = (props) =>{
    //state to display loader
    const[loading,setLoading]=useState(false);
  // Add a request interceptor
  axios.interceptors.request.use(    
  config => {
      setLoading(true)   
      config.headers['request_handler_key'] = localStorage.getItem('key');  
      config.headers['Content-Type'] = 'application/json';
      config.headers['x-insta-auth'] = 'APIUser:APIUser';
      return config;
  },
  error => {
    setLoading(false)
      Promise.reject(error)
  });
  // Add a response interceptor
  axios.interceptors.response.use((response) => {
      setLoading(false)
      return response
    }, function (error) {
    const originalRequest = error.config;
    
    if (error.response.status === 400 && !originalRequest._retry) {
        // Promise.reject(error);
        console.log("error 40")
        originalRequest._retry = true;        
        return axios(loginCall)
            .then(res => {
                if (res.status === 200) {
                    localStorageService.setToken(res.data.request_handler_key);
                    localStorage.setItem('key',res.data.request_handler_key)
                    
                    axios.defaults.headers.common['request_handler_key'] = localStorage.getItem('key');                    
                    return axios(originalRequest);
                }
            })
    }
    return Promise.reject(error);
 });

const loginCall = {
  method: 'get',
  url: 'https://desolate-lake-58891.herokuapp.com/https://api.instahealthsolutions.com/demo/Customer/Login.do',
  headers: {'Content-Type': 'application/json','x-insta-auth': 'APIUser:APIUser',},
  params : {'_method': 'login','hospital_name':'indiademo'}
} 
  
  const dateArray=[]  //array to store next 7 days
  const propsDate=props.date
  //function to generated next 7 days from today and store in array
  function next7Days () {
    let index=0;      
    for (index =0;index<7;index++)
    {
      const currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)*index);      
      dateArray.push(currentDate)  
    }
 }
 //call function to display next seven days from today
 next7Days()
 //function to compare date to datepicker - used to pre highlight date, on page load, if matches
 function dateCompare(date1){
  const dateCompare1 = date1.getDate() + "-"+ parseInt(date1.getMonth()+1) +"-"+date1.getFullYear();
  const dateCompare2 = propsDate.getDate() + "-"+ parseInt(propsDate.getMonth()+1) +"-"+propsDate.getFullYear();
  if(dateCompare1==dateCompare2){
    return true
  }
  else return false
 }
 
 //functon to convert date to day and dayname
 function convertDatetoDay(date){  
  //  date=new Date(date)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = date.getDate()
  const dayName= days[date.getDay()]
  const month = date.getMonth()+1
  const year = date.getFullYear()
  const dayDetails=[{'day':day,'dayName':dayName}];
  return dayDetails
 }
 //funtion to convert date to time in Am/Pm format for time slot display
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
//function to segregate morning/afternoon/evening session slots
function sessionSegretation(date)
{  
  let hours = date.getHours();    
  switch(true) {
    case hours <12 && hours>4:      
      return 'morning';
    case hours >12 && hours <16:
      return 'afternoon';
    case hours >16 && hours <21:
      return 'evening';
    default:
      return 'night';
  }
}
//function to convert incoming doctor slot data to the correct time zone
function timeZoneConversion(date)
{
  let startTime = new Date(date);
  return startTime
}

 //highlight chosen date if it exists on the page 
 let categoryState="";
 for (let index=0;index<7;index++)
 {
   if(dateCompare(dateArray[index],index+1))
   {
     categoryState="category"+(index+1)
   }
 }
 //active state css ..highlight on click
 const[activeCategory, setCategory] = useState(categoryState);
 const [activeTimeSlot, setActiveTimeSlot] = useState();

 //utility state for setting time slot
 const [timeSlots, setTimeSlots] = useState([]);
 const availableTimes=[];

 useEffect(() => {    
    //call API for selected datepicker date
    callAxiosDocAvailablility('DOC0140', props.date)
  }, []);

  function convertSelectedDateTimeZoneFormatted(date){
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);
    let formattedDate=date.getFullYear()+"-"+parseInt(date.getMonth()+1)+"-"+date.getDate();
    return formattedDate
  }
  const setView = (view,updatedDate ) =>{
    props.updateState('selectedDate',updatedDate)  
    //add 5hours 30mins due to time zone error
    let correctedDate=convertSelectedDateTimeZoneFormatted(updatedDate)    
    //change to props.doctorID
    callAxiosDocAvailablility('DOC0140',correctedDate)
    setCategory(view);
    setActiveTimeSlot('')
  };
  function callAxiosDocAvailablility(doctorID, date) {
    const getDoctorAppointmentCall = {
      method: 'get',
      url: 'https://desolate-lake-58891.herokuapp.com/https://api.instahealthsolutions.com/demo/Customer/doctorscheduler.do',
      params : {'_method': 'getDoctorAvailabilitySlots',
                'resource_id':doctorID,
                'appointment_date': date,
                'center_id':'',
                'booked_slot':'',
              }
    }
    axios(getDoctorAppointmentCall).then(response => { 
        if(!response.data.doctor_available_times){
          console.log("no time slots for this day")
        }
        response.data.doctor_available_times.map(function(slot, index){
          availableTimes.push(slot);        
        })      
          setTimeSlots(availableTimes)    
        })     
        .catch(error => {
            console.log(error.response)
        });
  }
  
  
return (
  <MainSec className="">
      <div className="SetDocSlot pt-8 w-full">
        <div className="w-full flex flex-wrap">
          <div className="w-1/4">
          <DocSlotImg src={`${props.doctorImage}`} alt="" />
          </div>
          <div className="w-3/4 pl-5">
          <p>
            <h2 className="text-2xl text-white leading-tight font-semibold">{props.doctorName}</h2>
            <h5 className="text-sm text-white font-medium">{props.doctorDesignation}, {props.doctorQualification}</h5>
            {/* <span >{props.doctorBio}</span>
            <span className></span> */}
            <span dangerouslySetInnerHTML={{__html: props.doctorBio}} className="text-xs text-white font-regular mt-2 leading-tight block"></span>
            <div className="w-full mt-8 overflow-y-hidden">
            <DateSlot className=""> 
              {/* if  */}
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category1' ? '': '2px'} theme="white" transparent={activeCategory != 'category1'} buttonArguments={['category1',dateArray[0]]} clickFn={setView}>{convertDatetoDay(dateArray[0]).map((details,index) =>(details.day))}<br/>{convertDatetoDay(dateArray[0]).map((details,index) =>(details.dayName))}</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category2' ? '': '2px'} theme="white" transparent={activeCategory != 'category2'} buttonArguments={['category2',dateArray[1]]} clickFn={setView}>{convertDatetoDay(dateArray[1]).map((details,index) =>(details.day))}<br/>{convertDatetoDay(dateArray[1]).map((details,index) =>(details.dayName))}</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category3' ? '': '2px'} theme="white" transparent={activeCategory != 'category3'} buttonArguments={['category3',dateArray[2]]} clickFn={setView}>{convertDatetoDay(dateArray[2]).map((details,index) =>(details.day))}<br/>{convertDatetoDay(dateArray[2]).map((details,index) =>(details.dayName))}</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category4' ? '': '2px'} theme="white" transparent={activeCategory != 'category4'} buttonArguments={['category4',dateArray[3]]} clickFn={setView}>{convertDatetoDay(dateArray[3]).map((details,index) =>(details.day))}<br/>{convertDatetoDay(dateArray[3]).map((details,index) =>(details.dayName))}</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category5' ? '': '2px'} theme="white" transparent={activeCategory != 'category5'} buttonArguments={['category5',dateArray[4]]} clickFn={setView}>{convertDatetoDay(dateArray[4]).map((details,index) =>(details.day))}<br/>{convertDatetoDay(dateArray[4]).map((details,index) =>(details.dayName))}</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category6' ? '': '2px'} theme="white" transparent={activeCategory != 'category6'} buttonArguments={['category6',dateArray[5]]} clickFn={setView}>{convertDatetoDay(dateArray[5]).map((details,index) =>(details.day))}<br/>{convertDatetoDay(dateArray[5]).map((details,index) =>(details.dayName))}</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category7' ? '': '2px'} theme="white" transparent={activeCategory != 'category7'} buttonArguments={['category7',dateArray[6]]} clickFn={setView}>{convertDatetoDay(dateArray[6]).map((details,index) =>(details.day))}<br/>{convertDatetoDay(dateArray[6]).map((details,index) =>(details.dayName))}</BookingBtn>
            </DateSlot>
          </div>
          <div className="w-full flex mt-6 text-white">
            <h4 className="mr-5">Schedule My Booking For ? </h4>
            <Input type="select" />
          </div>
          </p>
          </div>
          {loading ? 
            <Loader></Loader>
            : <TimeSlot className="w-full">
            <div className="flex my-5">
            <div className="SlotTiming w-1/4 text-white text-right pr-12">Time Slots</div>
            <div className="w-3/4 flex flex-wrap h-fit">
            
            {timeSlots.map(function(slot, index){
              
                return <div className="slot h-fit">              
                <TimerWrapper style={{"cursor":"pointer"}} className={`flex items-center ${activeTimeSlot=="timeSlot-"+index ? "bg-white text-sukoon": ""}`}>               
                  <span 
                    className="font-light block text-center w-full block text-center w-full"
                    onClick={() => {props.updateState('appointmentDate',slot);setActiveTimeSlot("timeSlot-"+index)}}>
                    {formatAMPM(timeZoneConversion(slot))}
                  </span>
                </TimerWrapper>
              </div> ;
            })}
            </div>
            </div>
          </TimeSlot>
            }
          
        </div>
      </div>
      <div className="flex justify-end w-full">
      <BookingBtn wrapperClass="" buttonClass={''} theme="mint" padding="8px" clickFn={handleDocSlotSubmit} buttonArguments={['view', 'Patient Info', props.updateState,props.appointmentDate]}>Book Now</BookingBtn>
      </div>
    </MainSec>

  )

};

const PatientForm = (props) =>{

const handleRadioButton = () => {
  return null;
};


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
        <div className="flex w-full justify-end mt-12">
        <BookingBtn wrapperClass="" buttonClass={''} theme="mint" padding="8px" clickFn={handleSubmit} buttonArguments={['view', 'thank you', props.updateState]}>Pay Now</BookingBtn>
        </div>
      </Form>
  </div>

)

};

const ThankYou = (props) =>{

  return(
    <ThankSec className="p-5 h-full items-center">
      <div className="w-full">
        <h2 className="text-white text-6xl font-bold text-center">Thank You</h2>
        <h4 className="text-white text-base text-center">Your video appointment is on
        <span className={`font-bold text-sukoonYellow`}> 24th March, 2019</span><br/>
        With Dr. Samir Parikh
        From <span className={`font-bold text-sukoonYellow`}>9:00 - 9:15 AM</span></h4>
      </div>
      <div className="w-full mt-16">
        <p className="text-white text-sm text-center">Your appointment details have also been sent
        via your preferred communication
        (SMS or Email).<br />Find out more about <a className="text-blue-500">our online
        consultation process here.</a></p>
      </div>
      <div className="w-full mt-10">
        <p className="text-white text-sm text-center">Kindly reach us at <a className="text-blue-500">9910911092 </a>in case of any queries.</p>
      </div>
    </ThankSec>
  )

};

// Main component
export default class BookingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view: 'ChooseDate',
      selectedDate: '',
      appointmentDate:'',
      bookingFieldKey: Math.random(),
      time: '',
      doctorID: '',
      doctorName: '',
      doctorDesignation: '',
      doctorQualification: '',
      doctorBio: '',
      doctorImage: '',
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
        </HomeLink>
           <BookingFields key={this.state.bookingFieldKey}>
           {this.state.view === 'ChooseDate'? <DatePicker updateState={this.updateState} date={this.state.selectedDate} />
             :this.state.view === 'Doctor List' ? <Doclist date={this.state.selectedDate} doctorID={this.state.doctorID} updateState={this.updateState}/>
               :this.state.view === 'Doctor Slots' ? <DocBookSlot date={this.state.selectedDate} appointmentDate={this.state.appointmentDate} doctorName={this.state.doctorName} doctorBio={this.state.doctorBio} doctorDesignation={this.state.doctorDesignation} doctorQualification={this.state.doctorQualification} doctorImage={this.state.doctorImage} updateState={this.updateState}/>
                 :this.state.view === 'Patient Info' ? <PatientForm date={this.state.selectedDate} time={this.state.time} updateState={this.updateState}/>
                   :this.state.view === 'thank you' ? <ThankYou date={this.state.selectedDate} time={this.state.time} updateState={this.updateState}/>
                     : null}
        </BookingFields>
      </BookingWrapper>
    )
  }

}






