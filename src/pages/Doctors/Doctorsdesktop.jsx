import React, { useState } from "react";
import styled from "styled-components";
import {Link} from 'gatsby';

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop";
import Banner from "../../components/Banner/desktop";
import BookBtn from "../../elements/BookNowBtn/desktop";
import ArrowButton from "../../elements/ArrowButton/desktop";

// Images
import HeaderImg from "../../images/pacientes-mejora_2019-08-02/pacientes-mejora@3x.jpg";
import Doctor from "../../images/doctor/kalani.jpeg";
import Ila from "../../images/doctor/ila.jpeg";
import Jaiman from "../../images/doctor/jaiman.jpeg";
import Sharmeen from "../../images/doctor/Sharmeen.jpeg";
import Akshita from "../../images/doctor/akshita.jpeg";

const Intro = styled.div`
    .director-row{
      padding: 3vw 0;
      padding-bottom:0;
      width: 100%;
    }
`;

const DoctorImage = styled.img`
`;

const DoctorImageContainer = styled.div`
  width: 100%;
`;

const DoctorProfile = styled.img`
  width: 20vw;
  cursor: pointer;
`;

const Team = styled.section`
  
`;

const FollowUs = (props) =>{
  const Instagram = styled.a`
    background: linear-gradient(to right, #f8ec35, #cf2e8d 67%, #1b31f0);
    margin: 0 1rem;
    cursor: pointer;    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `;
  return(
    <div className="mt-4">
      <div className="text-lg  inline break-words">
        <a href="/" className="mr-4 text-blue-800 cursor-pointer">Facebook</a>
        <a href="/" className="mx-4 text-blue-400 cursor-pointer">Twitter</a>
        <Instagram href="/">Instagram</Instagram>
        <a href="/" className="mx-4 text-blue-600 cursor-pointer">Skype</a>
      </div>
    </div>
  )
};

const Content = [
  {
    doctors: [
      {
        name: "Dr. Sameer Kalani",
        image: Doctor,
        designation: {
          titleLight: "Center",
          titleBold: "Head",
          title: "Sr. Consultant Psychiatrist"
        },
        qualification: "MD (Psychiatry)",
        bio: {
          intro: `Dr. Sameer Kalani is a Psychiatrist by profession, helping people work out their emotional and behavioural difficulties. He predominantly works with children, adolescents and elderly. He treats patients with conditions like anxiety disorder, panic disorder, social phobia, specific phobia, post-traumatic stress disorder, bipolar disorder, Alzheimer’s disease, vascular dementia, anorexia nervosa, bulimia nervosa, major depressive disorder, stuttering, schizophrenia, and hyperactivity disorder.  He strongly believes that being free from mental illness is not just enough; we must strive towards a better and healthy state of mind and body. He has been blessed to have worked with the top most experts of India in the field of mental health and well-being in Mumbai and Delhi.`,
          summary: `He is an enthusiastic person with a keenness to keep himself up-to-date regarding new technological developments in the field of Psychiatry.`
        }
      },
      {
        name: "Dr. Shambhavi Jaiman",
        image: Jaiman,
        designation: {
          titleLight: "Clinical",
          titleBold: "Psychologist",
          title: "Consultant, Clinical Psychologist"
        },
        qualification: "MD (Psychiatry)",
        bio: {
          intro: `Dr. Shambhavi Jaiman, M.D., is a compassionate and dynamic psychiatrist. She has worked extensively with, and successfully managed individuals with severe mental illnesses. Dr. Jaiman has worked in, out-patient, in-patient as well as emergency psychiatry departments and has researched and published on topics of addiction and psychotic conditions.She has received specialized training in Child and Adolescent Psychiatry at NIMHANS, Bangalore while being posted there as part of her MD training. Her practice in de-addiction centres has inculcated a strong focus on patient empowerment and rehabilitative. `,
          summary: `Her gentle and empathetic manner makes her a great asset in the clinical team for both her patients as well as their caregivers.`
        }
      },
      {
        name: "Ms. Ila Kulshrestha",
        image: Ila,
        designation: {
          titleLight: "Clinical",
          titleBold: "Psychologist",
          title: "Consultant, Clinical Psychologist"
        },
        qualification: "M. Phil. Clinical Psychology",
        bio: {
          intro: `Ms. Ila Kulshrestha is a licensed clinical psychologist recognized by <a href="http://www.rehabcouncil.nic.in/" target="_blank" style="color: #636363;font-weight: 700;">Rehabilitation Council of India</a> and a CID- UNESCO certified Arts based Therapist. She uses an eclectic framework of psychotherapy to devise a personalized treatment plan for each individual. She is proficient in providing various psychological assessments including psycho-diagnostics, personality, neuropsychological, developmental and IQ assessments.`,
          summary: `She uses assessments, psychotherapy and expressive arts to work with adolescents and adults on a wide range of clinical, emotional, psychological, behavioural and adjustment issues. She recognizes the role intersectionality plays in an individual’s mental health and is passionate to work with LGBTQIA+ identities to help address their mental health concerns.Over the course of her career, she has worked with individuals, parents, couples and families to improve their quality of life and enhance their sense of wellbeing.`
        }
      },
      {
        name: "Ms. Akshita Shukla",
        image: Akshita,
        designation: {
          titleLight: "Clinical",
          titleBold: "Psychologist",
          title: "Consultant, Clinical Psychologist"
        },
        // qualification: "M. Phil. Clinical Psychology",
        bio: {
          intro: `Ms. Akshita Shukla is a Licensed Clinical Psychologist recognized by the <a href="http://www.rehabcouncil.nic.in/" target="_blank" style="color: #636363;font-weight: 700;">Rehabilitation Council of India.</a> She has worked at various hospitals and clinics across different states in India. Her expertise in psychological assessments and psychotherapy helps in devising the
          treatment plan for each individual. She believes that psychotherapy can help individuals most effectively use their resources to increase self-understanding, improve decision-making, solve problems, and create paths to the lives they want.`,
          summary: `She is keen to contribute by creating a safe environment that gives an individual the power to strive and deal with their problems effectively, thus helping them improve their overall well-being.`
        }
      },
      {
        name: "Sharmeen Kaur Khurana",
        image: Sharmeen,
        designation: {
          titleLight: "Clinical",
          titleBold: "Psychologist",
          title: "Consultant, Clinical Psychologist"
        },
        // qualification: "M. Phil. Clinical Psychology",
        bio: {
          intro: `Sharmeen Kaur Khurana is an Art Based Therapist certified by <a href="https://www.baat.org/" target="_blank" style="color: #636363;font-weight: 700;">British Association of ArtTherapy</a> and CID - UNESCO. She is a registered member of the <a href="https://www.hcpc-uk.org/" target="_blank" style="color: #636363;font-weight: 700;">Health and Care Professions Council (UK)</a> and The Art Therapy Association (India). She uses different modes of art such as visual arts, music, storytelling, creative writing, and movement in her therapeutic practice. Sharmeen has experience working with therapeutic groups in open studio approach in varied settings of art museums, schools and refugee charities.`,
          summary: `She is keen to contribute by creating a safe environment that gives an individual the power to strive and deal with their problems effectively, thus helping them improve their overall well-being.`
        }
      },
    ]
  },
];

// Doctors Profile Images row component
const TeamRow = (props)=>{

  return (Content.map((item,index) =>{

      return(
        <div id={`row-${index}`} className="flex flex-nowrap pb-8">
          {item.doctors.map(doctor=>{
            return(
              <div  className="flex flex-col mr-12">
                <DoctorProfile src={doctor.image} onClick={()=>{props.setDoctor(doctor); document.getElementById("doctor-info").scrollIntoView();}} alt="doctor" className=""/>
                <div className="text-white bg-sukoon text-center py-4">
                  <h3 className="text-vxl">{doctor.name}</h3>
                </div>
                {/* <BookBtn wrapperClass="mx-auto my-4" theme="green">Book Now</BookBtn> */}
              </div>
            )
          })}
        </div>
      )
    })
  );
};

const DoctorBio = ({doctor}) =>{

  if(doctor && doctor.designation){
    return(
      <section id="doctor-info" className="pl-20 py-12">
        <Title singleLine titleLight={doctor.designation.titleLight} titleBold={doctor.designation.titleBold} subHeading="MEET THE"/>
        <Intro className="">
          <div className="director-row flex">
            <div id="doctor-intro-image" className="w-30% mr-24">
              <DoctorImageContainer className="">
                <DoctorImage src={doctor.image} alt="doctor" className=""/>
              </DoctorImageContainer>
            </div>
            <div id="doctor-info" className="doctor-info pr-16 flex flex-col justify-between w-70%">
              <div>
                <h2 className="text-sukoon font-gilroyBold text-v5xl">{doctor.name}</h2>
                <h3 className='text-sukoon text-v3xl font-gilroyMedium mt-4'>{doctor.qualification}</h3>
                <h4 Class="mt-4 text-gray-600 text-v2xl">{doctor.designation.title}</h4>
                <Para Class="mt-4" padding="15px 4rem 0 0">
                  {/* {doctor.bio.intro}  */}
                  <div dangerouslySetInnerHTML={{__html: doctor.bio.intro}} ></div>
                  
                  <br/>
                  {doctor.bio.summary}
                </Para>
                <BookBtn wrapperClass="mt-5" theme="green">Book Now</BookBtn>
                {/* <div className="flex mt-8">
                  <Link to="/" className="text-lg text-sukoon font-gilroyRegular">Know More </Link>
                  <ArrowButton border={false} margin="0 12px"/>
                </div> */}
              </div>
              {/* <FollowUs /> */}
            </div>
          </div>
        </Intro>
      </section>
    )
  }
  else {
    return null;
  }

};

const DoctorInfo = (props) =>{

  return(
    <section id="doctor-info-container" className="">
      <div className="py-4">
        <h2 className="text-sukoon font-gilroyBold text-v4xl">{props.heading}</h2>
        <ul className="py-2">
          <li className="py-1">
            <Para Class="text-vlg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, quaerat?
            </Para>
          </li>
          <li className="py-1">
            <Para Class="text-vlg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, quaerat?
            </Para>
          </li>
          <li className="py-1">
            <Para Class="text-vlg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, quaerat?
            </Para>
          </li>
          <li className="py-1">
            <Para Class="text-vlg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, quaerat?
            </Para>
          </li>
          <li className="py-1">
            <Para Class="text-vlg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, quaerat?
            </Para>
          </li>
        </ul>
        <button className="text-sukoon text-vlg underline pointer">Read More</button>
      </div>
    </section>
  )
};

function DoctorsPage(props) {

  let temObj = {
    name: "Dr. Sameer Kalani",
    image: Doctor,
    designation: { titleLight: "Center", titleBold: "Head", title: 'Sr. Consultant Psychiatrist' },
    qualification: "MD (Psychiatry)",
    bio: {
      intro: `Dr. Sameer Kalani is a Psychiatrist by profession, helping people work out their emotional and behavioural difficulties. He predominantly works with children, adolescents and elderly. He treats patients with conditions like anxiety disorder, panic disorder, social phobia, specific phobia, post-traumatic stress disorder, bipolar disorder, Alzheimer’s disease, vascular dementia, anorexia nervosa, bulimia nervosa, major depressive disorder, stuttering, schizophrenia, and hyperactivity disorder.`,
      summary: `He has been leading the field of Neurosciences with his experience in Repetitive Tran cranial Magnetic Stimulation (rTMS) treatment modality, currently being used in very few centres all over India.`
    }
  };
  const[SelectedDoctor, setDoctor] = useState(temObj);
  const[doctorInfo, setView] = useState(false);

  return (
    <>
      <Banner para inner texture HeaderImg={HeaderImg}/>
      <DoctorBio doctor={SelectedDoctor}/>
      {doctorInfo ? null :
        <Team className="doctors-team py-12 pl-20">
          <Title singleLine titleLight="Meet The" titleBold="Experts" subHeading='our team'/>
          <div id="doctors-team-table" className="flex flex-col py-12">
            <TeamRow setDoctor={setDoctor} changeView={setView}/>
          </div>
          <Title singleLine titleLight="Meet The" titleBold="Experts" subHeading='our team'/>
          <div id="doctors-team-table" className="flex flex-col py-12">
            <TeamRow setDoctor={setDoctor} changeView={setView}/>
          </div>
        </Team> }
      {/*{*/}
      {/*  doctorInfo ?*/}
      {/*    <div className="pl-20 pb-12">*/}
      {/*      <DoctorInfo heading="Memberships"/>*/}
      {/*      <DoctorInfo heading="Education & Training"/>*/}
      {/*      <DoctorInfo heading="Awards Information"/>*/}
      {/*      <DoctorInfo heading="Research & Publication"/>*/}
      {/*    </div> : null}*/}
    </>
  );
}

export default DoctorsPage;
