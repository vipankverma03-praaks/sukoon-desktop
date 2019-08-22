import React, { useState } from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import styled from "styled-components";
import Details from "../elements/Details";
import Para from "../elements/Para";
import Banner from "../components/Banner";
import SVG from "../elements/SVG";
import Enquiry from "../elements/BookNowBtn";

// Images
import HeaderImg from "../images/Desktop-Header/HomeBanner.jpg";
import TherapyView from "../images/exp/bg_2.jpg";
import PartyTwo from "../images/iStock-968194620_2019-07-17/work-yoga.png";
import PartyOne from "../images/iStock-968194620_2019-07-17/yoga_for_runners.png";

//SQUARE FEET SECTION
const Feet = () => {
  return (
    <section id="Feet" className="pl-20 py-6">
        <div>
          <Title titleLight="1500" titleBold="Sq.Feet" />
          <h2 className="text-sukoon font-gilroyMedium text-v3xl mt-4">
            Spread Across 6 Floors
          </h2>
          <Para Class="py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Para>
        </div>
    </section>
  );
};

const PreviewCard = styled.div`
    background: white;
    top: 20%;
    right: 50px;
    padding: 50px;
`;

const PreviewNav = styled.div`
    background: white;
    margin: -30px 3rem 0 auto;
    position: relative;
      
    button:focus{
    outline: none;
    }
      
    ul li {
        margin-right: 10px;
        margin-left: 10px;
    }
`;

const NavItem = styled.button`
    cursor: pointer;
`;

const ViewContent = {
    consultingChambers: {
      image: TherapyView,
      Card: {
        about: 'opd',
        heading: 'consulting Chambers',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
      }
    },
  pharmacy: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'pharmacy',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  rtms: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'rtms',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  virtualTherapy: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'virtual therapy',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  cafeteria: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'cafeteria',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  lounge: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'lounge',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  artTherapy: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'art therapy',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
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
        <span className="font-semibold text-lg text-sukoon uppercase">{currentView.Card.about}</span>
        <h2 className="font-bold text-3xl text-sukoon capitalize">{currentView.Card.heading}</h2>
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
    <section className="py-6">
      <div className="ExperienceServices w-full">
        <View currentView={view}/>
        <PreviewNav className="bg-white relative py-6 mr-12 w-10/12 shadow-lg">
          <ul className="text-xl font-gilroyMedium flex justify-around px-4 uppercase text-sukoon">
            <li className="">
              <NavItem name="consultingChambers" type="text" onClick={changeView}>
                Consulting Chambers
              </NavItem>
            </li>
            <li className="">
              <NavItem name="pharmacy" type="text" onClick={changeView}>
                Pharmacy
              </NavItem>
              </li>
            <li className="">
              <NavItem name="rtms" type="text" onClick={changeView}>
                RTMS
            </NavItem></li>
            <li className="">
              <NavItem name="virtualTherapy" type="text" onClick={changeView}>
              VIRTUAL THERAPY ROOM
            </NavItem></li>
            <li className="">
                <NavItem name="cafeteria" type="text" onClick={changeView}>
                  CAFETERIA
                </NavItem>
            </li>
            <li className="">
              <NavItem name="lounge" type="text" onClick={changeView}>
                LOUNGE
              </NavItem>
            </li>
            <li className="">
              <NavItem name="artTherapy" type="text" onClick={changeView}>
                ART THERAPY
              </NavItem>
            </li>
          </ul>
        </PreviewNav>
      </div>
    </section>
  )
};

function InfrastructurePage(props) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Banner inner texture HeaderImg={HeaderImg} />
      <Feet />
      <Preview/>
      <section className="pl-12 py-12">
        <div className="w-full flex">
          <div className="w-2/5 pr-8 flex flex-col justify-between">
            <div>
              <Details open summary="Fitness Studio">
                <Para Class="py-4" width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries</Para>
              </Details>
              <Details summary="Art Studio">
                <Para Class="py-4" width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries</Para>
              </Details>
              <Details summary="Terrace Garden">
                <Para Class="py-4" width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries</Para>
              </Details>
            </div>
            <Enquiry wrapperClass=""><Link to="/">Enquiry</Link></Enquiry>
          </div>
          <div className="w-3/5 flex">
            <img src={PartyTwo} className="block viewOne" alt="Header"/>
            <img src={PartyOne} className="block ViewTwo" alt="Header"/>
          </div>
        </div>
      </section>
      <Preview />
    </Layout>
  );
}

export default InfrastructurePage;
