import React, { useState } from "react";
import styled from "styled-components";

// Components
import Para from "../../elements/Para/desktop";

// Images
import TherapyView from "../../images/exp/bg_2.jpg";
import Title from "../../elements/Heading/desktop";
import consultingChambersImg from "../../images/experience/consulting_chambers.jpg";
import pharmacyImg from "../../images/experience/pharmacy.jpg";
import rTMSImg from "../../images/exp/bg_2.jpg";
import videoConsultImg from "../../images/experience/video_consult.jpeg";
import cafeImg from "../../images/experience/cafetaria.jpg";
import waitingImg from "../../images/experience/waiting_area.jpg";
import artTherapyImg from "../../images/experience/art_therapy.png";

const PreviewNav = styled.div`
    background: white;
    margin: 30px 3rem -6px auto;
    position: relative;
    z-index: 2;
      
    button:focus{
    outline: none;
    }
      
    ul li {
        margin-right: 10px;
        margin-left: 10px;
    }
    
    .selected{
      border-bottom: 2px solid #f6e05e;
    }
`;

const NavItem = styled.button`
    cursor: pointer;
    text-transform: capitalize;
    height: 30px;
    
    &:hover{
    border-bottom: 2px solid #f6e05e;
    
    }
`;

const PreviewCard = styled.div`
    background: white;
    top: 10%;
    right: 50px;
    padding: 50px;
`;

const ViewContent = {
  consultingChambers: {
    image: consultingChambersImg,
    Card: {
      about: 'opd',
      heading: 'consulting Chambers',
      summary: `Speak with your doctor in a private and comfortable environment. With sophisticated details such as wooden floors and lounge seating, our chambers are designed to have a calming effect.`
    }
  },
  pharmacy: {
    image: pharmacyImg,
    Card: {
      about: 'opd',
      heading: 'Pharmacy',
      summary: `You can always find your prescribed medications at Sukoon. No more running around the town to find them. We truly are a one-stop destination for all your psychiatric and mental health needs.`
    }
  },
  rtms: {
    image: rTMSImg,
    Card: {
      about: 'opd',
      heading: 'rtms',
      summary: `Receive repetitive Transcranial Magnetic Stimulation therapy in a plush room. We only work with the latest equipment to offer you an India-first world class treatment for all behavioural and emotional disorders`
    }
  },
  virtualTherapy: {
    image: videoConsultImg,
    Card: {
      about: 'opd',
      heading: 'Video Consultation',
      summary: `Connect with your psychiatric, psychologist, therapist, counsellor, or doctor no matter where you are. Continue your treatment plan and receive expert psychiatric care via chat, phone calls, or video calls`
    }
  },
  cafeteria: {
    image: cafeImg,
    Card: {
      about: 'opd',
      heading: 'cafeteria',
      summary: `Take advantage of any of our two fully-equipped cafeterias that serve Indian and Continental cuisines.  Indulge in some delicious snacks, or grab a cup of coffee while you wait.`
    }
  },
  lounge: {
    image: waitingImg,
    Card: {
      about: 'opd',
      heading: 'Waiting Area',
      summary: `At Sukoon, your healing begins the moment you walk in. Get inspired by some great art, or relax in the lush-green environment. Our waiting areas will make you feel right at home!`
    }
  },
  artTherapy: {
    image: artTherapyImg,
    Card: {
      about: 'opd',
      heading: 'art therapy',
      summary: `Our doctors actively advocate alternate forms of therapy for a sustain healing process. We have licensed art therapists that have developed an effective clinical program.`
    }
  },

};

const View = ({currentView}) =>{

  return(
    <div className="w-full flex relative">
      <div className="w-3/5">
        <img src={currentView.image} className="block object-cover w-full object-center" alt="Header"/>
      </div>
      <div className="w-2/5">
      </div>
      <PreviewCard className="w-2/5 absolute shadow-lg">
        <Title headingClass={`text-3xl capitalize`} subHeading={currentView.Card.about}  titleBold={currentView.Card.heading}/>
        <Para Class="py-4" width="100%">{currentView.Card.summary}</Para>
      </PreviewCard>
    </div>
  )
};

function Preview (props) {

  const [view , setView] = useState(ViewContent.consultingChambers);

  const changeView = (e) => {
    setView(ViewContent[e.target.name]);
  };

  return(
    <section className="pt-6 pb-16">
      <div className="ExperienceServices w-full">
        <PreviewNav className="bg-white relative py-8  mr-12 w-11/12 shadow-lg">
          <ul className="text-xl font-gilroyMedium flex justify-around px-4 text-sukoon">
            <li className="">
              <NavItem name="consultingChambers"  className={`${view === ViewContent.consultingChambers ? 'selected' : ''}`} type="text" onClick={changeView}>
                Consulting Chambers
              </NavItem>
            </li>
            <li className="">
              <NavItem name="pharmacy" type="text" className={`${view === ViewContent.pharmacy ? 'selected' : ''}`} onClick={changeView}>
                Pharmacy
              </NavItem>
            </li>
            <li className="">
              <NavItem name="rtms" type="text" className={`${view === ViewContent.rtms ? 'selected' : ''}`}onClick={changeView}>
                rtms
              </NavItem></li>
            <li className="">
              <NavItem name="virtualTherapy" type="text" className={`${view === ViewContent.virtualTherapy ? 'selected' : ''}`} onClick={changeView}>
                Video Consultation
              </NavItem></li>
            <li className="">
              <NavItem name="cafeteria" type="text" className={`${view === ViewContent.cafeteria ? 'selected' : ''}`} onClick={changeView}>
                Cafetaria
              </NavItem>
            </li>
            <li className="">
              <NavItem name="lounge" type="text" className={`${view === ViewContent.lounge ? 'selected' : ''}`} onClick={changeView}>
                Waiting Area
              </NavItem>
            </li>
            <li className="">
              <NavItem name="artTherapy" type="text" className={`${view === ViewContent.artTherapy ? 'selected' : ''}`} onClick={changeView}>
                Art Therapy
              </NavItem>
            </li>
          </ul>
        </PreviewNav>
        <View currentView={view}/>
      </div>
    </section>
  )
};

export default Preview;
