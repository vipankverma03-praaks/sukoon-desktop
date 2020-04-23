import React from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile";

// Images
import Carousel from ".././Carousel/mobile";

// Images
import Samir_Kalani from "../../images/doctor/kalani.jpeg";
import Ila from "../../images/doctor/ila.jpeg";
import Jaiman from "../../images/doctor/Jaiman.jpeg";
import Sharmeen from "../../images/doctor/Sharmeen.jpeg";
import Akshita from "../../images/doctor/akshita.jpeg";
import NursesImg from "../../images/physician_retail_web_2019-07-29/physician_retail_web.jpg";

const MeetExpertsWrapper = styled.section`
  
`;


const Doctors = [
  {
    name: 'Dr. Sameer Kalani',
    image: Samir_Kalani,
  },
  {
    name: 'Ms. Ila Kulshrestha',
    image: Ila,
  },
  {
    name: 'Dr. Shambhavi Jaiman',
    image: Jaiman,
  },
  {
    name: 'Ms. Akshita Shukla',
    image: Akshita,
  },
  {
    name: 'Sharmeen Kaur Khurana',
    image: Sharmeen,
  },
];

const Nurses = styled.div`
    width:75vw;
    margin-right: 20px;
`;

const CarouselItems = (item) =>{
  return(
    <Nurses className="">
      <div className="DocImgSec">
        <img src={item.image} alt="doctor"/>
        <h3 className="bg-sukoon text-white p-2 text-center text-xl">{item.name}</h3>
      </div>
    </Nurses>
  )
};

const MeetExperts = (props) => {
  return (
    <MeetExpertsWrapper id="meet-experts" className="p-4 relative">
      <Title singleLine subHeading="Team" titleLight="Our" titleBold="Doctors"/>
      <Para width="100%"
            content="With a team of experienced psychiatrists, clinical psychologists, counselling psychologists, and art therapists led by Dr Samir Parikh of Fortis Healthcare, we can assure you that everybody is in good hands here."/>
      <Carousel container  cardFn={CarouselItems} content={Doctors}/>
    </MeetExpertsWrapper>
  )
};

export default MeetExperts;