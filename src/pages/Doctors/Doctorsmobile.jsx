import React, {useState} from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile";
import Banner from "../../components/Banner/mobile";
import Carousel from "../../components/Carousel/mobile";
import BookBtn from "../../elements/BookNowBtn/mobile";
import MeetExperts from "../../components/MeetExperts/mobile";

// Images
import HeaderBg from "../../images/mobile_header.jpg";
import MedicalDoc from "../../images/doctor/doctor1.jpg";
import Samir_Kalani from "../../images/doctor/kalani.jpeg";
import Ila from "../../images/doctor/ila.jpeg";
import Jaiman from "../../images/doctor/jaiman.jpeg";
import Sharmeen from "../../images/doctor/Sharmeen.jpeg";
import Akshita from "../../images/doctor/akshita.jpeg";


const Caption = (props) => {
  return (
    <div className="my-4">
      <h2 className="text-sukoon text-lg font-normal font-bold block">
        {props.subHeading || ''}
      </h2>
      <Para>
        {props.para || ''}
      </Para>
    </div>

  )
};

const Intro = (props) => {
  return (
    <section id="why-sukoon" className="why-sukoon p-4">
      <Title subHeading="MEET THE" titleLight="Center" titleBold="Head" />
    </section>
  )
};

const DocCard = styled.div`
    width:75vw;
    margin-right: 20px;
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

const CarouselItems = (item) =>{
  return(
    <DocCard className="">
      <div className="DocImgSec">
        <img src={item.image} alt="doctor"/>
        <h3 className="bg-sukoon text-white p-2 text-center text-xl">{item.name}</h3>
      </div>
      <BookBtn border wrapperClass="mx-auto mt-3">Book Appointment</BookBtn>
    </DocCard>
  )
};

const InPatientServices = (props) => {

  return (
    <section id="inpatient-services" className="p-4">
      <Title singleLine subHeading="Meet" titleLight="Our" titleBold="Doctors" display="block"/>
      <Carousel container  cardFn={CarouselItems} content={Doctors}/>
    </section>
  )
};

function DoctorsPage(props) {
  return (
    <>
      <Banner overlay={props.overlay} backgroundImg={HeaderBg}/>
      <Intro/>
      <section className="MedicalDirectorSection p-4 pt-0">
        <div className="MedicalDocImg">
          <img src={Samir_Kalani} />
        </div>
        <div className="MedicalDocInfo pt-4">
          <h3 className="text-sukoon text-3xl font-Gilroy-Bold">Center Head</h3>
          <Para wrapperClass={`m-0`} width="100%">MD (Psychiatry)</Para>
          <Para width="100%">Sr. Consultant Psychiatrist</Para>
          <Para>Dr. Sameer Kalani is a Psychiatrist by profession, helping people work out their emotional and behavioural difficulties. He predominantly works with children, adolescents and elderly. He treats patients with conditions like anxiety disorder, panic disorder, social phobia, specific phobia, post-traumatic stress disorder, bipolar disorder, Alzheimer’s disease, vascular dementia, anorexia nervosa, bulimia nervosa, major depressive disorder, stuttering, schizophrenia, and hyperactivity disorder.</Para>
          <Para>He has been leading the field of Neurosciences with his experience in Repetitive Tran cranial Magnetic Stimulation (rTMS) treatment modality, currently being used in very few centres all over India.</Para>
        </div>
      </section>
      {/* <InPatientServices/> */}
      <MeetExperts/>
    </>
  );
}

export default DoctorsPage;
