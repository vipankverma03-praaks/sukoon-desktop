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
import HeaderBg from "../../images/team-pic.jpg";
import MedicalDoc from "../../images/doctor/doctor1.jpg";
import Samir_Kalani from "../../images/doctor/kalani.jpeg";
import Ila from "../../images/doctor/ila.jpeg";
import DrNavyaSaluja from "../../images/doctor/DrNavyaSaluja.jpeg";
import Jaiman from "../../images/doctor/jaiman.jpeg";
import Sharmeen from "../../images/doctor/Sharmeen.jpeg";
import Akshita from "../../images/doctor/akshita.jpeg";
import Chandni from "../../images/cs.jpeg";
import Kritika from "../../images/doctor/Kritika.jpeg";
import Gayatri from "../../images/doctor/Gayatri.jpeg";
import Varsha from "../../images/doctor/Varsha.jpg";
import Kritik from "../../images/doctor/Kritika Saxena.jpeg";
import Kamana from "../../images/doctor/Kamna Sarin.jpg";
import Mantosh from "../../images/mk.jpeg";

import Kamna from "../../images/fortis-team/Kamna.jpg"
import Divya from "../../images/fortis-team/Divya.jpg"
import Mimansa from "../../images/fortis-team/Mimansa.jpg"
import Nishtha from "../../images/fortis-team/Nishtha.jpg"
import Aditi from "../../images/fortis-team/Aditi.jpg"
import Tara from "../../images/fortis-team/Tara.jpg"
import Samir from "../../images/fortis-team/Samir.jpg"


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

const FortisDoctors = [
  {
    name: 'Dr. Samir Parikh',
    image: Samir,
  },
  {
    name: 'Kamna Chhibber',
    image: Kamna,
  },
  {
    name: 'Divya Jain',
    image: Divya,
  },
  {
    name: 'Mimansa Singh Tanwar',
    image: Mimansa,
  },
  {
    name: 'Nishtha Narula',
    image: Nishtha,
  },
  {
    name: 'Aditi Kaul',
    image: Aditi,
  },
  {
    name: 'Tara Mehta',
    image: Tara,
  },
];
const Doctors = [
  {
    name: 'Dr. Sameer Kalani',
    image: Samir_Kalani,
  },
  {
    name: 'Dr. Mantosh Kumar',
    image: Mantosh,
  },
  // {
  //   name: 'Ms. Ila Kulshrestha',
  //   image: Ila,
  // },
  {
    name: 'Dr. Shambhavi Jaiman',
    image: Jaiman,
  },
  {
    name: 'Dr. Navya Saluja',
    image: DrNavyaSaluja,
  },
  {
    name: 'Ms. Akshita Shukla',
    image: Akshita,
  },
  // {
  //   name: 'Sharmeen Kaur Khurana',
  //   image: Sharmeen,
  // },
  // {
  //   name: 'Chandni Sharma',
  //   image: Chandni,
  // },
  {
    name: 'Varsha Punarvasu',
    image: Varsha,
  },
  {
    name: 'Ms. Kritika Zutshi',
    image: Kritika,
  },

  {
    name: 'Ms. Gayatri Broota',
    image: Gayatri,
  },

  {
    name: 'Kritika Saxena',
    image: Kritik,
  },

  {
    name: 'Ms. Kamna Sarin',
    image: Kamana,
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
      <Title singleLine subHeading="Meet The" titleLight="" titleBold="Experts" display="block"/>
      <Carousel container  cardFn={CarouselItems} content={Doctors}/>
      <div className="MedicalDocImg mt-4">
          <img src={Samir} />
        </div>
      <div className="MedicalDocInfo pt-4">
          <h3 className="text-sukoon text-3xl font-Gilroy-Bold">Dr. Samir Parikh</h3>
          <Para wrapperClass={`m-0`} width="100%">MD (Psychiatry)</Para>
          <Para width="100%">Director - Mental Health & Behavioural Sciences, Fortis Healthcare</Para>
          <Para>Dr. Samir Parikh is an eminent Psychiatrist and the Director of Dept. of Mental Health and Behavioural Sciences, Fortis Healthcare. He is one of the leading academic experts in the field of mental health and conducts training programmes and courses for doctors, Psychologists and allied specialities, and has initiated several awareness campaigns for the community. He is a very well known speaker, due to his expressive communicative style and in-depth knowledge of mental health and Indian culture with comprehensive experience in the field of clinical and community mental health, he has been a speaker at various national and international forums on mental health issues.</Para>
          <Para>Dr. Samir Parikh also has a prominent presence in the media with various columns in newspapers and a presence on television channels and websites. He has played a key role in enhancing the image of mental health in the country and his views are widely appreciated.</Para>
        </div>
      <Title className="mt-4" singleLine subHeading="Meet The" titleLight="" titleBold="Fortis Team" display="block"/>
      <Carousel container  cardFn={CarouselItems} content={FortisDoctors}/>
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
          <h3 className="text-sukoon text-3xl font-Gilroy-Bold">Dr. Sameer Kalani</h3>
          <Para wrapperClass={`m-0`} width="100%">MD (Psychiatry)</Para>
          <Para width="100%">Sr. Consultant Psychiatrist</Para>
          <Para>Dr. Sameer Kalani is a Psychiatrist by profession, helping people work out their emotional and behavioural difficulties. He predominantly works with children, adolescents and elderly. He treats patients with conditions like anxiety disorder, panic disorder, social phobia, specific phobia, post-traumatic stress disorder, bipolar disorder, Alzheimer’s disease, vascular dementia, anorexia nervosa, bulimia nervosa, major depressive disorder, stuttering, schizophrenia, and hyperactivity disorder.</Para>
          <Para>He has been leading the field of Neurosciences with his experience in Repetitive Tran cranial Magnetic Stimulation (rTMS) treatment modality, currently being used in very few centres all over India.</Para>
        </div>
      </section>
      <InPatientServices/>
      {/* <MeetExperts/>
      <MeetExperts/> */}
    </>
  );
}

export default DoctorsPage;
