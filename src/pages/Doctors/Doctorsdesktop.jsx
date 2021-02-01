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
import HeaderImg from "../../images/teamimage_db.jpg";
import Doctor from "../../images/doctor/kalani.jpeg";
import Ila from "../../images/doctor/ila.jpeg";
import Deepika from "../../images/doctor/Deepika.jpeg";
import Jaiman from "../../images/doctor/jaiman.jpeg";
import Sharmeen from "../../images/doctor/Sharmeen.jpeg";
import Akshita from "../../images/doctor/akshita.jpeg";
import Chandni from "../../images/cs.jpeg";
import Mantosh from "../../images/mk.jpeg";

import Kamna from "../../images/fortis-team/Kamna.jpg"
import Divya from "../../images/fortis-team/Divya.jpg"
import Mimansa from "../../images/fortis-team/Mimansa.jpg"
import Nishtha from "../../images/fortis-team/Nishtha.jpg"
import Aditi from "../../images/fortis-team/Aditi.jpg"
import Tara from "../../images/fortis-team/Tara.jpg"
import Samir from "../../images/fortis-team/Samir.jpg"

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
const FortisContent = [
  {
    doctors:[
      {
        name: "Dr. Samir Parikh",
        image: Samir,
        designation: {
          titleLight: "Director",
          titleBold: "Mental Health & Behavioural Sciences, Fortis Healthcare",
          title: "Director - Mental Health & Behavioural Sciences, Fortis Healthcare"
        },
        qualification: "MD (Psychiatry)",
        bio: {
          intro: `Dr. Samir Parikh is an eminent Psychiatrist and the Director of <a href="https://www.fortishealthcare.com/india/clinical-speciality/mental-health-and-behavioural-sciences-268" target="_blank" style="color: #636363;font-weight: 700;">Dept. of Mental Health and Behavioural Sciences</a>, Fortis Healthcare. He is one of the leading academic experts in the field of mental health and conducts training programmes and courses for doctors, Psychologists and allied specialities, and has initiated several awareness campaigns for the community. He is a very well known speaker, due to his expressive communicative style and in-depth knowledge of mental health and Indian culture with comprehensive experience in the field of clinical and community mental health, he has been a speaker at various national and international forums on mental health issues.`,
          summary: `Dr. Samir Parikh also has a prominent presence in the media with various columns in newspapers and a presence on television channels and websites. He has played a key role in enhancing the image of mental health in the country and his views are widely appreciated. `
        }
      },
      {
        name: "Kamna Chhibber",
        image: Kamna,
        designation: {
          titleLight: "Head",
          titleBold: "Mental Health",
          title: "Head - Mental Health"
        },
        qualification: "M. Phil. Clinical Psychology",
        bio: {
          intro: `Kamna Chhibber, M.Phil in Clinical Psychology is a Cognitive Behaviour Therapist with the <a href="https://www.fortishealthcare.com/india/clinical-speciality/mental-health-and-behavioural-sciences-268" target="_blank" style="color: #636363;font-weight: 700;">Dept. of Mental Health and Behavioural Sciences</a>, Fortis Healthcare. She has a particular interest in relationships, trauma, abuse and the impact of personality related variables on mental health. She works extensively with schools, corporate organizations and NGO’s and has a strong focus on generating awareness relating to mental health. Through her writing, blogs and media interactions she is working towards the larger goals of inclusiveness, removal of stigma and busting of misconceptions relating to mental health.`,
          // summary: `Dr. Samir Parikh also has a prominent presence in the media with various columns in newspapers and a presence on television channels and websites. He has played a key role in enhancing the image of mental health in the country and his views are widely appreciated. `
        }
      },
      {
        name: "Divya Jain",
        image: Divya,
        designation: {
          titleLight: "Head",
          titleBold: "Psychological Services",
          title: "Head - Psychological Services"
        },
        qualification: "MA Psychology, Board Certified Sport Psychologist",
        bio: {
          intro: `Divya Jain is the Head of Psychological Services for the <a href="https://www.fortishealthcare.com/india/clinical-speciality/mental-health-and-behavioural-sciences-268" target="_blank" style="color: #636363;font-weight: 700;">Dept. of Mental Health and Behavioural Sciences</a>, Fortis National Mental Health Program. She holds a Master’s Degree in Clinical Psychology from the University of Delhi and is a Board-Certified Sport Psychologist from the <a href="http://americanboardofsportpsychology.org/" target="_blank" style="color: #636363;font-weight: 700;">American Board of Sport Psychology.</a> She works within an eclectic framework for the treatment of clinical as well as stress and lifestyle related problems. She also specializes in psychological skills training for performance enhancement and mentoring for elite and young sportspersons and is an Instructor with the American Board of Sport Psychology.`,
          // summary: `Dr. Samir Parikh also has a prominent presence in the media with various columns in newspapers and a presence on television channels and websites. He has played a key role in enhancing the image of mental health in the country and his views are widely appreciated. `
        }
      },
      {
        name: "Mimansa Singh Tanwar",
        image: Mimansa,
        designation: {
          titleLight: "Coordinator",
          titleBold: "Fortis School Mental Health Program",
          title: "Coordinator, Fortis School Mental Health Program"
        },
        qualification: "M. Phil. Clinical Psychology",
        bio: {
          intro: `Mimansa Singh Tanwar has an M.Phil degree in Clinical Psychology. She is a Cognitive Behavioural Therapist with a keen interest in adolescent mental health. She takes parent and teacher training workshops on addressing adolescent related issues. She also conducts academic workshops for students of psychology and mental health practitioners. She is the coordinator for the <a href="https://www.fortishealthcare.com/school-mental-health-programme" target="_blank" style="color: #636363;font-weight: 700;">Fortis School Mental Health Program.</a>`,
          // summary: `Dr. Samir Parikh also has a prominent presence in the media with various columns in newspapers and a presence on television channels and websites. He has played a key role in enhancing the image of mental health in the country and his views are widely appreciated. `
        }
      },
      {
        name: "Nishtha Narula",
        image: Nishtha,
        designation: {
          titleLight: "Program Manager",
          titleBold: "Fortis National Mental Health Program",
          title: "Program Manager - Fortis National Mental Health Program"
        },
        qualification: "Lead - Counselling Psychology ",
        bio: {
          // intro: `Mimansa Singh Tanwar has an M.Phil degree in Clinical Psychology. She is a Cognitive Behavioural Therapist with a keen interest in adolescent mental health. She takes parent and teacher training workshops on addressing adolescent related issues. She also conducts academic workshops for students of psychology and mental health practitioners. She is the coordinator for the <a href="https://www.fortishealthcare.com/school-mental-health-programme" target="_blank" style="color: #636363;font-weight: 700;">Fortis School Mental Health Program.</a>`,
          // summary: `Dr. Samir Parikh also has a prominent presence in the media with various columns in newspapers and a presence on television channels and websites. He has played a key role in enhancing the image of mental health in the country and his views are widely appreciated. `
        }
      },
      {
        name: "Aditi Kaul",
        image: Aditi,
        designation: {
          titleLight: "",
          titleBold: "",
          title: ""
        },
        // qualification: "",
        bio: {
          intro: `Aditi Kaul completed her Post-Graduation in Counselling from the Tata Institute of Social Sciences, and is a UNESCO and CID certified creative arts therapist with a focus in movement based work. Using art, movement, drama, writing and music, she works with both children and adults.`,
          // summary: `Dr. Samir Parikh also has a prominent presence in the media with various columns in newspapers and a presence on television channels and websites. He has played a key role in enhancing the image of mental health in the country and his views are widely appreciated. `
        }
      },
      {
        name: "Tara Mehta",
        image: Tara,
        designation: {
          titleLight: "",
          titleBold: "",
          title: ""
        },
        qualification: "M. Phil. Clinical Psychology",
        bio: {
          intro: `Ms. Tara Mehta  has M. Phil in Clinical Psychology and over a decade of experience under her belt.  She works with people to improve their decision making and stress management, giving each individual her undivided attention. Tara Mehta also helps in developing skills to improve both the personal and professional lives of people.`,
          // summary: `Dr. Samir Parikh also has a prominent presence in the media with various columns in newspapers and a presence on television channels and websites. He has played a key role in enhancing the image of mental health in the country and his views are widely appreciated. `
        }
      },
    ]
  }
]
const Content = [
  {
    doctors: [
      {
        name: "Dr. Sameer Kalani",
        image: Doctor,
        designation: {
          titleLight: "Center",
          titleBold: "Head",
          title: "Director - Mental Health & Behavioural Sciences, Fortis Healthcare"
        },
        qualification: "MD (Psychiatry)",
        bio: {
          intro: `Dr. Sameer Kalani is a Psychiatrist by profession, helping people work out their emotional and behavioural difficulties. He predominantly works with children, adolescents and elderly. He treats patients with conditions like anxiety disorder, panic disorder, social phobia, specific phobia, post-traumatic stress disorder, bipolar disorder, Alzheimer’s disease, vascular dementia, anorexia nervosa, bulimia nervosa, major depressive disorder, stuttering, schizophrenia, and hyperactivity disorder.`,
          summary: `He has been leading the field of Neurosciences with his experience in Repetitive Tran cranial Magnetic Stimulation (rTMS) treatment modality, currently being used in very few centres all over India.`
        }   
      },
      {
        name: "Dr. Mantosh Kumar",
        image: Mantosh,
        designation: {
          titleLight: "Sr. Consultant",
          titleBold: "Psychiatrist",
          title: "Sr. Consultant Psychiatrist"
        },
        // qualification: "MD (Psychiatry)",
        bio: {
          intro: `Dr. Mantosh Kumar is a Psychiatrist by profession, with over ten years of clinical and research experience. He has worked in Dept. of Psychiatry at <a href="http://ihbas.delhigovt.nic.in/wps/wcm/connect/DOIT_IHBAS1/ihbas/home" target="_blank" style="color: #636363;font-weight: 700;">IHBAS</a> (New Delhi) and as a Consultant in <a href="https://nayatihealthcare.com/about-nayati/vimhans-nayati-super-speciality-hospital-new-delhi" target="_blank" style="color: #636363;font-weight: 700;">VIMHANS</a> (New Delhi), both being pioneer centres in treating patients with mental illness and drug addictions. He has also had an experience in drug trials in psychiatry as a medical monitor supervising the trial of the drug in sixteen centres across India.`,
          summary: `Currently working with Sukoon Healthcare, he aims to make mental healthcare an accessible experience for both national and international patients.`
        }
      },
      {
        name: "Dr. Shambhavi Jaiman",
        image: Jaiman,
        designation: {
          titleLight: "Consultant",
          titleBold: "Psychologist",
          title: "Consultant Psychologist"
        },
        qualification: "MD (Psychiatry)",
        bio: {
          intro: `Dr. Shambhavi Jaiman, M.D., is a compassionate and dynamic psychiatrist. She has worked extensively with, and successfully managed individuals with severe mental illnesses. Dr. Jaiman has worked in, out-patient, in-patient as well as emergency psychiatry departments and has researched and published on topics of addiction and psychotic conditions.She has received specialized training in Child and Adolescent Psychiatry at NIMHANS, Bangalore while being posted there as part of her MD training. Her practice in de-addiction centres has inculcated a strong focus on patient empowerment and rehabilitative. `,
          summary: `Her gentle and empathetic manner makes her a great asset in the clinical team for both her patients as well as their caregivers.`
        }
      },
      // {
      //   name: "Ms. Ila Kulshrestha",
      //   image: Ila,
      //   designation: {
      //     titleLight: "Clinical",
      //     titleBold: "Psychologist",
      //     title: "Consultant, Clinical Psychologist"
      //   },
      //   qualification: "M. Phil. Clinical Psychology",
      //   bio: {
      //     intro: `Ms. Ila Kulshrestha is a licensed clinical psychologist recognized by <a href="http://www.rehabcouncil.nic.in/" target="_blank" style="color: #636363;font-weight: 700;">Rehabilitation Council of India</a> and a CID- UNESCO certified Arts based Therapist. She uses an eclectic framework of psychotherapy to devise a personalized treatment plan for each individual. She is proficient in providing various psychological assessments including psycho-diagnostics, personality, neuropsychological, developmental and IQ assessments.`,
      //     summary: `She uses assessments, psychotherapy and expressive arts to work with adolescents and adults on a wide range of clinical, emotional, psychological, behavioural and adjustment issues. She recognizes the role intersectionality plays in an individual’s mental health and is passionate to work with LGBTQIA+ identities to help address their mental health concerns.`
      //   }
      // },

      {
        name: "Dr. Deepika Singh",
        image: Deepika,
        designation: {
          titleLight: "Consultant",
          titleBold: "Psychiatrist",
          title: "Consultant Psychiatrist"
        },
        qualification: "MD (Psychiatry)",
        bio: {
          intro: `Dr. Deepika Singh is a renowned psychiatrist who has worked at the premier hospitals of the country. She has pursued an International ECP Fellowship from Ain Shams University, Cairo and  a Diploma in Evidence-Based Medicine from Lundbeck Institute, Skodsborg, Denmark. We are happy to have a psychiatrist amongst us who has been awarded the 'Young Psychiatry Research Investigator' at Rebamp, Taiwan.<br>She has 9+ years of experience & holds an MD in Psychiatry from the prestigious Seth GS Medical College & King Edward Memorial Hospital (KEM), Mumbai.She is a member of Psychiatry Academy, Massacheusetts General hospital, Boston, USA as well as Indian Psychiatric Society and Indian Association for Geriatric Mental Health. She has an extensive experience in dealing with patients of depression, anxiety, substance abuse, psychotic disorder & childhood onset disorders. `,
          summary: `She has done many interviews on current mental health issues with different digital media platforms and is actively involved in mental health awareness activities by collaborating with NGOs, corporate houses and schools.`
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
      // {
      //   name: "Sharmeen Kaur Khurana",
      //   image: Sharmeen,
      //   designation: {
      //     titleLight: "Consultant",
      //     titleBold: "Art Based Therapist",
      //     title: "Consultant, Art Based Therapist"
      //   },
      //   // qualification: "M. Phil. Clinical Psychology",
      //   bio: {
      //     intro: `Sharmeen Kaur Khurana is an Art Based Therapist certified by <a href="https://www.baat.org/" target="_blank" style="color: #636363;font-weight: 700;">British Association of ArtTherapy</a> and CID - UNESCO. She is a registered member of the <a href="https://www.hcpc-uk.org/" target="_blank" style="color: #636363;font-weight: 700;">Health and Care Professions Council (UK)</a> and The Art Therapy Association (India). She uses different modes of art such as visual arts, music, storytelling, creative writing, and movement in her therapeutic practice. Sharmeen has experience working with therapeutic groups in open studio approach in varied settings of art museums, schools and refugee charities.`,
      //     summary: `She is keen to contribute by creating a safe environment that gives an individual the power to strive and deal with their problems effectively, thus helping them improve their overall well-being.`
      //   }
      // },
      {
        name: "Chandni Sharma",
        image: Chandni,
        designation: {
          titleLight: "Consultant",
          titleBold: "Art Based Therapist",
          title: "Consultant, Art Based Therapist"
        },
        // qualification: "M. Phil. Clinical Psychology",
        bio: {
          intro: `Chandni Sharma is a certified arts based therapist, a UNESCO - CID certified movement therapist and holds an M.A. in Clinical Psychology. She integrates her practice of the arts like drama, movement, dance, visual art, music, story telling and writing into psychotherapy. She believes in empowering and directing individuals to heal themselves through the integration of the mind and body. Healthy expression and processing are at the core of her inclusive practice of psychotherapy.`,
          summary: `She has experience in working with trauma, children and adults with psychiatric illnesses & adjustment issues and prisons.`
        }
      },
    ]
  },
];

// Doctors Profile Images row component
const TeamRow = (props)=>{

  return (Content.map((item,index) =>{

      return(
        <div id={`row-${index}`} className="">
          {item.doctors.map(doctor=>{
            return(
              <div  className="flex flex-col mr-8 mb-5" style={{"width":"16.5%","display":"inline-block"}}>
                <DoctorProfile src={doctor.image} onClick={()=>{props.setDoctor(doctor); document.getElementById("doctor-info").scrollIntoView();}} alt="doctor" className=""/>
                <div className="text-white bg-sukoon text-center flex flex-col" style={{"margin":"auto","flex-direction":"column","height":"3.5em","justify-content":"center"}}>
                  <h3 className="text-vxl" >{doctor.name}</h3>
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
const FortisTeamRow = (props)=>{

  return (FortisContent.map((item,index) =>{

      return(
        <div id={`row-${index}`} className="pb-8">
          {item.doctors.map(doctor=>{
            return(
              <div className="flex flex-col mr-8 mb-5" style={{"width":"17%","display":"inline-block"}}>
                <DoctorProfile src={doctor.image} onClick={()=>{props.setDoctor(doctor); document.getElementById("doctor-info-fortis").scrollIntoView();}} alt="doctor" className="" />
                <div className="text-white bg-sukoon text-center flex flex-col" style={{"margin":"auto","flex-direction":"column","height":"3.5em","justify-content":"center"}}>
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
const FortisDoctorBio = ({doctor}) =>{

  if(doctor && doctor.designation){
    return(
      <section id="doctor-info-fortis" className="pl-20 pt-4 pb-10">
        <Title singleLine titleLight="Fortis" titleBold="Team" subHeading="MEET THE"/>
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
                {/* <BookBtn wrapperClass="mt-5" theme="green">Book Now</BookBtn> */}
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
  let temFortisObj = {
    name: "Dr. Samir Parikh",
        image: Samir,
        designation: {
          titleLight: "Director",
          titleBold: "Mental Health & Behavioural Sciences, Fortis Healthcare",
          title: "Director - Mental Health & Behavioural Sciences, Fortis Healthcare"
        },
        qualification: "MD (Psychiatry)",
        bio: {
          intro: `Dr. Samir Parikh is an eminent Psychiatrist and the Director of <a href="https://www.fortishealthcare.com/india/clinical-speciality/mental-health-and-behavioural-sciences-268" target="_blank" style="color: #636363;font-weight: 700;">Dept. of Mental Health and Behavioural Sciences</a>, Fortis Healthcare. He is one of the leading academic experts in the field of mental health and conducts training programmes and courses for doctors, Psychologists and allied specialities, and has initiated several awareness campaigns for the community. He is a very well known speaker, due to his expressive communicative style and in-depth knowledge of mental health and Indian culture with comprehensive experience in the field of clinical and community mental health, he has been a speaker at various national and international forums on mental health issues.`,
          summary: `Dr. Samir Parikh also has a prominent presence in the media with various columns in newspapers and a presence on television channels and websites. He has played a key role in enhancing the image of mental health in the country and his views are widely appreciated. `
        }
  };
  const[SelectedDoctor, setDoctor] = useState(temObj);
  const[doctorInfo, setView] = useState(false);
  const[SelectedFortisDoctor, setFortisDoctor] = useState(temFortisObj);
  const[doctorInfoFortis, setViewFortis] = useState(false);

  return (
    <>
      <Banner para inner texture HeaderImg={HeaderImg} style={{"height":"80vh"}}/>
      <DoctorBio doctor={SelectedDoctor}/>
      {doctorInfo ? null :
        <Team className="doctors-team py-12 pl-20">
          <Title singleLine titleLight="Meet The" titleBold="Experts" subHeading='our team'/>
          <div id="doctors-team-table" className="flex flex-col py-12">
            <TeamRow setDoctor={setDoctor} changeView={setView}/>
          </div>
        </Team> }
        <FortisDoctorBio doctor={SelectedFortisDoctor}/>
        {doctorInfoFortis ? null :
        <Team className="doctors-team py-12 pl-20">
          <Title singleLine titleLight="Meet The" titleBold="Fortis Team" subHeading='our team'/>
          <div id="doctors-team-table" className="flex flex-col py-12">
            <FortisTeamRow setDoctor={setFortisDoctor} changeView={setViewFortis}/>
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
