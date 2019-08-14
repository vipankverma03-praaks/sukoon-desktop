import React, { useState } from "react";
import styled from "styled-components";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import Para from "../elements/Para";
import Banner from "../components/Banner";
import BookBtn from "../elements/BookNowBtn";

// Images
import HeaderImg from "../images/pacientes-mejora_2019-08-02/pacientes-mejora@3x.jpg";
import Doctor from "../images/doctor/doctor1.jpg";
import { Link } from "@reach/router";
import ArrowButton from "../elements/ArrowButton";


const Intro = styled.div`
    
    
    .director-row{
      padding: 3vw 1vw;
      width: 100%;
    }
`;

const DoctorImage = styled.img`
`;

const DoctorImageContainer = styled.div`
  width: 60%;
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
        name: "Dr. Abhishek",
        image: Doctor,
        designation: { titleLight: "Dr. Abhishek", titleBold: "Kapadia", title: 'Director, Mental Health and Behavioural Sciences' },
        qualification: "MBBS, DPM, MD (Psychiatry)",
        bio: {
          intro: `Dr. Pradeep Chowbey belongs to the cadre of the pioneer laparoscopic surgeons in India. One of the first
                to perform Laparoscopic cholecystectomy in North India, he has graphed his career with singular
                determination to develop, evaluate and propagate Minimal Access, Metabolic & Bariatric Surgery in India.
                The advent of Laparoscopic surgery with his hands became a point in India's medical history.`,
          summary: `Dr. Chowbey established the Minimal Access and Bariatric Surgery Centre, Sir Ganga Ram Hospital, New
                Delhi in 1996, which was the first of its kind in the Asian subcontinent. His Institute at Max
                Healthcare was the First Centre to receive the Center of excellence accreditations in India for`
        }
      },
      {
        name: "Dr. Abhishek Kapadia",
        image: Doctor,
        designation: { titleLight: "Medical", titleBold: "Director", title: 'Director, Mental Health and Behavioural Sciences' },
        qualification: "MBBS, DPM, MD (Psychiatry)",
        bio: {
          intro: `Dr. Pradeep Chowbey belongs to the cadre of the pioneer laparoscopic surgeons in India. One of the first
                to perform Laparoscopic cholecystectomy in North India, he has graphed his career with singular
                determination to develop, evaluate and propagate Minimal Access, Metabolic & Bariatric Surgery in India.
                The advent of Laparoscopic surgery with his hands became a point in India's medical history.`,
          summary: `Dr. Chowbey established the Minimal Access and Bariatric Surgery Centre, Sir Ganga Ram Hospital, New
                Delhi in 1996, which was the first of its kind in the Asian subcontinent. His Institute at Max
                Healthcare was the First Centre to receive the Center of excellence accreditations in India for`
        }

      },
      {
        name: "Dr. Abhishek Kapadia",
        image: Doctor,
        designation: { titleLight: "Medical", titleBold: "Director", title: 'Director, Mental Health and Behavioural Sciences' },
        qualification: "MBBS, DPM, MD (Psychiatry)",
        bio: {
          intro: `Dr. Pradeep Chowbey belongs to the cadre of the pioneer laparoscopic surgeons in India. One of the first
                to perform Laparoscopic cholecystectomy in North India, he has graphed his career with singular
                determination to develop, evaluate and propagate Minimal Access, Metabolic & Bariatric Surgery in India.
                The advent of Laparoscopic surgery with his hands became a point in India's medical history.`,
          summary: `Dr. Chowbey established the Minimal Access and Bariatric Surgery Centre, Sir Ganga Ram Hospital, New
                Delhi in 1996, which was the first of its kind in the Asian subcontinent. His Institute at Max
                Healthcare was the First Centre to receive the Center of excellence accreditations in India for`
        }
      },
      {
        name: "Dr. Abhishek Kapadia",
        image: Doctor,
        designation: { titleLight: "Medical", titleBold: "Director", title: 'Director, Mental Health and Behavioural Sciences' },
        qualification: "MBBS, DPM, MD (Psychiatry)",
        bio: {
          intro: `Dr. Pradeep Chowbey belongs to the cadre of the pioneer laparoscopic surgeons in India. One of the first
                to perform Laparoscopic cholecystectomy in North India, he has graphed his career with singular
                determination to develop, evaluate and propagate Minimal Access, Metabolic & Bariatric Surgery in India.
                The advent of Laparoscopic surgery with his hands became a point in India's medical history.`,
          summary: `Dr. Chowbey established the Minimal Access and Bariatric Surgery Centre, Sir Ganga Ram Hospital, New
                Delhi in 1996, which was the first of its kind in the Asian subcontinent. His Institute at Max
                Healthcare was the First Centre to receive the Center of excellence accreditations in India for`
        }
      }
    ]
  },
  {
    doctors: [
      {
        name: "Dr. Abhishek Kapadia",
        image: Doctor,
        designation: { titleLight: "Medical", titleBold: "Director", title: 'Director, Mental Health and Behavioural Sciences' },
        qualification: "MBBS, DPM, MD (Psychiatry)",
        bio: {
          intro: `Dr. Pradeep Chowbey belongs to the cadre of the pioneer laparoscopic surgeons in India. One of the first
                to perform Laparoscopic cholecystectomy in North India, he has graphed his career with singular
                determination to develop, evaluate and propagate Minimal Access, Metabolic & Bariatric Surgery in India.
                The advent of Laparoscopic surgery with his hands became a point in India's medical history.`,
          summary: `Dr. Chowbey established the Minimal Access and Bariatric Surgery Centre, Sir Ganga Ram Hospital, New
                Delhi in 1996, which was the first of its kind in the Asian subcontinent. His Institute at Max
                Healthcare was the First Centre to receive the Center of excellence accreditations in India for`
        }
      },
      {
        name: "Dr. Abhishek Kapadia",
        image: Doctor,
        designation: { titleLight: "Medical", titleBold: "Director" ,title: 'Director, Mental Health and Behavioural Sciences'},
        qualification: "MBBS, DPM, MD (Psychiatry)",
        bio: {
          intro: `Dr. Pradeep Chowbey belongs to the cadre of the pioneer laparoscopic surgeons in India. One of the first
                to perform Laparoscopic cholecystectomy in North India, he has graphed his career with singular
                determination to develop, evaluate and propagate Minimal Access, Metabolic & Bariatric Surgery in India.
                The advent of Laparoscopic surgery with his hands became a point in India's medical history.`,
          summary: `Dr. Chowbey established the Minimal Access and Bariatric Surgery Centre, Sir Ganga Ram Hospital, New
                Delhi in 1996, which was the first of its kind in the Asian subcontinent. His Institute at Max
                Healthcare was the First Centre to receive the Center of excellence accreditations in India for`
        }
      },
      {
        name: "Dr. Abhishek Kapadia",
        image: Doctor,
        designation: { titleLight: "Medical", titleBold: "Director" ,title: 'Director, Mental Health and Behavioural Sciences'},
        qualification: "MBBS, DPM, MD (Psychiatry)",
        bio: {
          intro: `Dr. Pradeep Chowbey belongs to the cadre of the pioneer laparoscopic surgeons in India. One of the first
                to perform Laparoscopic cholecystectomy in North India, he has graphed his career with singular
                determination to develop, evaluate and propagate Minimal Access, Metabolic & Bariatric Surgery in India.
                The advent of Laparoscopic surgery with his hands became a point in India's medical history.`,
          summary: `Dr. Chowbey established the Minimal Access and Bariatric Surgery Centre, Sir Ganga Ram Hospital, New
                Delhi in 1996, which was the first of its kind in the Asian subcontinent. His Institute at Max
                Healthcare was the First Centre to receive the Center of excellence accreditations in India for`
        }
      },
      {
        name: "Dr. Abhishek Kapadia",
        image: Doctor,
        designation: { titleLight: "Medical", titleBold: "Director", title: 'Director, Mental Health and Behavioural Sciences' },
        qualification: "MBBS, DPM, MD (Psychiatry)",
        bio: {
          intro: `Dr. Pradeep Chowbey belongs to the cadre of the pioneer laparoscopic surgeons in India. One of the first
                to perform Laparoscopic cholecystectomy in North India, he has graphed his career with singular
                determination to develop, evaluate and propagate Minimal Access, Metabolic & Bariatric Surgery in India.
                The advent of Laparoscopic surgery with his hands became a point in India's medical history.`,
          summary: `Dr. Chowbey established the Minimal Access and Bariatric Surgery Centre, Sir Ganga Ram Hospital, New
                Delhi in 1996, which was the first of its kind in the Asian subcontinent. His Institute at Max
                Healthcare was the First Centre to receive the Center of excellence accreditations in India for`
        }
      }
    ]
  }
];

// Doctors Profile Images row component
const TeamRow = (props)=>{

   return (Content.map((item,index) =>{

        return(
              <div id={`row-${index}`} className="flex flex-nowrap pb-8">
                {item.doctors.map(doctor=>{
                  return(
                    <div  className="flex flex-col mr-12">
                      <DoctorProfile src={doctor.image} onClick={()=>{props.setDoctor(doctor); props.changeView(true);}} alt="doctor" className=""/>
                      <div className="text-white bg-sukoon py-4 text-center">
                        <h3 className="text-vxl">{doctor.name}</h3>
                      </div>
                      <BookBtn wrapperClass="mx-auto my-4" theme="green">Book Now</BookBtn>
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
        <section className="pl-20 py-12">
          <Title titleLight={doctor.designation.titleLight} titleBold={doctor.designation.titleBold} subHeading="MEET THE"/>
          <Intro className="">
            <div className="director-row flex">
              <div id="doctor-intro-image" className="w-1/2">
                <DoctorImageContainer className="ml-4">
                  <DoctorImage src={doctor.image} alt="doctor" className=""/>
                </DoctorImageContainer>
              </div>
              <div id="doctor-info" className="doctor-info pr-16 flex flex-col justify-between w-1/2">
                <div>
                  <h2 className="text-sukoon font-gilroyBold text-v5xl">{doctor.name}</h2>
                  <h3 className='text-sukoon text-v3xl font-gilroyMedium mt-4'>{doctor.qualification}</h3>
                  <Para Class="mt-4 text-vxl">{doctor.designation.title}</Para>
                  <Para Class="mt-4" lineHeight="1.3" padding="15px 0 0 0">
                    {doctor.bio.intro}
                    <br/>
                    <br/>
                    {doctor.bio.summary}
                  </Para>
                  <div className="flex mt-8">
                    <Link to="/" className="text-lg text-sukoon font-gilroyRegular border-b border-sukoon pb-1">Know More </Link>
                    <ArrowButton border={false} margin="0 12px"/>
                  </div>
                </div>
                <FollowUs />
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
    name: "Dr. Abhishek Kapadia",
    image: Doctor,
    designation: { titleLight: "Medical", titleBold: "Director", title: 'Director, Mental Health and Behavioural Sciences' },
    qualification: "MBBS, DPM, MD (Psychiatry)",
    bio: {
      intro: `Dr. Pradeep Chowbey belongs to the cadre of the pioneer laparoscopic surgeons in India. One of the first
                to perform Laparoscopic cholecystectomy in North India, he has graphed his career with singular
                determination to develop, evaluate and propagate Minimal Access, Metabolic & Bariatric Surgery in India.
                The advent of Laparoscopic surgery with his hands became a point in India's medical history.`,
      summary: `Dr. Chowbey established the Minimal Access and Bariatric Surgery Centre, Sir Ganga Ram Hospital, New
                Delhi in 1996, which was the first of its kind in the Asian subcontinent. His Institute at Max
                Healthcare was the First Centre to receive the Center of excellence accreditations in India for`
    }
  };
  const[SelectedDoctor, setDoctor] = useState(temObj);
  const[doctorInfo, setView] = useState(false);

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Banner para inner texture HeaderImg={HeaderImg}/>
      <DoctorBio doctor={SelectedDoctor}/>
      {doctorInfo ? null :
      <Team className="doctors-team py-12 pl-20">
        <Title titleLight="Meet The" titleBold="Experts" subHeading='our TEAM'/>
        <div id="doctors-team-table" className="flex flex-col py-12">
          <TeamRow setDoctor={setDoctor} changeView={setView}/>
        </div>
      </Team> }
      {
        doctorInfo ?
      <div className="pl-20 pb-12">
        <DoctorInfo heading="Memberships"/>
        <DoctorInfo heading="Education & Training"/>
        <DoctorInfo heading="Awards Information"/>
        <DoctorInfo heading="Research & Publication"/>
      </div> : null}
    </Layout>
  );
}

export default DoctorsPage;
