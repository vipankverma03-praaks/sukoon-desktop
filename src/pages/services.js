import React from "react";
import "../css/style.css";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading"
import styled from "styled-components";
import Para from "../elements/Para"

// Images
import HeaderImg from "../images/Desktop-Header/pacientes-mejora.png"
import Slider from "react-slick";
import Physician from "../images/physician_retail_web_2019-07-29/physician_retail_web@3x.jpg";
import Img from "../images/a.jpg";

// Intro Section
const Heading = () => {
    return (
        <div className="text-sukoon text-v6xl">
            <h2 className="font-light block">
                Don't Just Stay,
            </h2>
            <span className="font-extrabold block">
                Live Here !
            </span>
        </div>
    )
};

const HeaderIntroLeft = styled.div`
        top:  10vw;
        left: -18vw;
       
       @media screen and (max-width: 1600px){
       left: -16vw;
       }
       @media screen and (max-width: 1400px){
       left: -14vw;
       }
       @media screen and (max-width: 1200px){
       left: -10vw;
       }
       
   
    `;
const HeaderIntroRight = styled.div`
    
    `;

const HeaderIntro = () => {

    return (
        <section id="header-intro" className="w-full">
            <div id="header-intro-container" className="flex relative">
                <div className="w-2/5">
                </div>
                <HeaderIntroRight id="header-intro-right" className="relative">
                    <HeaderIntroLeft id="header-intro-left" className="absolute w-fit">
                        <Heading/>

                        <div className="book-now-container mt-4">

                            <div className="my-4">
                               <ul>
                                   <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                      <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                               </ul>
                            </div>
                        </div>

                    </HeaderIntroLeft>
                    <img src={HeaderImg} className="block" alt="Header"/>
                </HeaderIntroRight>
            </div>
        </section>
    )
};


const InPatient = () => {
    return (

        <section id="In-patient" className="In-patient p-12">
            <div className="flex">
                <div className="w-4/5">

                    <Title titleLight="In Patient" titleBold="Care Services" display="block" /></div>
                <div className="colour w-1/5">
                    <img src={Img} className="block" alt="Header"/>
                    <p>jadnsk</p></div></div>

            <div className="flex justify-between p-6">
            <div className="mains w-2/5 p-8  ">
                <span className="text-sukoon text-2xl ">
                <ul className="mt-2 ">

                      <li>Acute Psychiatry Care - </li>
                    <li>Intensive Care Unit</li>
                    <li>Alcohol, Drug, And Habit De-addiction Programs</li>
                    <li>Day Care - </li>
                    <li>Counselling, And Immersive Therapy Programs</li>
                    <li>Off-site IPD Setup - </li>
                    <li>At Home Services</li>
                    <li>Geriatric Psychiatry -</li>
                    <li>Age Related Mental Health Issues</li>
                    <li>Special Ward For Women - </li>
                    <li>Female Staff Only</li>
                    <li>Continuity Of Treatment Via Virtual Therapy</li>
                    <li>All OPD Services Are Inculcated Into The IPD Program</li>
                </ul>
            </span>
            </div>
                <div className="w-3/5 p-8 ">
                    <span className="text-sukoon text-2xl ">


                       <p className="font-black  text-3xl">Acute Psychiatry Services</p>
                        <p>Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
                            crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. </p>
                        <div className="py-2"><span className="bg-10 text-3xl font-black">  Services</span>

                            <p>24-hour walk-in crisis intervention and treatment of behavioral .</p></div>

                        <div className="py-2"><span className="bg-10 text-3xl font-black"> Our Treatment Team</span>


                            <p>Our treatment team includes psychiatrists, psychologists, psychiatric social workers, </p></div>
                            <div className="py-2"><span className="bg-10 text-3xl font-black">Treatment Goals</span>

                                <p>To provide immediate and around-the clock assistance to emotionally disturbed persons</p></div>
                    </span>
                </div>

            </div>
        </section>
    )
};

const OutPatientService = () => {
    return (
        <section id="Out-patient" className="Out-patient p-12">

                    <Title titleLight="Out Patient" titleBold="Care Services" display="block" />


            <div className="flex justify-between p-6">
                <div className="mainService w-2/5 p-8 " >
                <span className="text-sukoon text-2xl ">
                <ul className="mt-2">

                      <li>Acute Psychiatry Care - </li>
                    <li>Intensive Care Unit</li>
                    <li>Alcohol, Drug, And Habit De-addiction Programs</li>
                    <li>Day Care - </li>
                    <li>Counselling, And Immersive Therapy Programs</li>
                    <li>Off-site IPD Setup - </li>
                    <li>At Home Services</li>
                    <li>Geriatric Psychiatry -</li>
                    <li>Age Related Mental Health Issues</li>
                    <li>Special Ward For Women - </li>
                    <li>Female Staff Only</li>
                    <li>Continuity Of Treatment Via Virtual Therapy</li>
                    <li>All OPD Services Are Inculcated Into The IPD Program</li>
                </ul>
            </span>
                </div>
                <div className="w-3/5 p-8">
                    <span className="text-sukoon text-2xl ">


                       <p className="font-black  text-3xl">Acute Psychiatry Services</p>
                        <p>Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
                            crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. </p>
                        <div className="py-2"><span className="bg-10 text-3xl font-black">  Services</span>

                            <p>24-hour walk-in crisis intervention and treatment of behavioral .</p></div>

                        <div className="py-2"><span className="bg-10 text-3xl font-black"> Our Treatment Team</span>


                            <p>Our treatment team includes psychiatrists, psychologists, psychiatric social workers, </p></div>
                            <div className="py-2"><span className="bg-10 text-3xl font-black">Treatment Goals</span>

                                <p>To provide immediate and around-the clock assistance to emotionally disturbed persons</p></div>
                    </span>
                </div>

            </div>
        </section>
    )
};



























const CarouselParenWrapper = styled.div`
  text-align: center;
`;

const CarouselImgWrapper = styled.div`
  width: 18vw;
  height: 16vw;
  position: relative;
  
  > img{
    opacity: 0.71;
    margin: 10px 0;
    object-fit: cover;
    height: 100%;
  }
`;

const Ovarlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.31);
`;

const MeetExpertsCarousel = () =>{
    const settings = {
        slidesToScroll: true,
        swipe: true,
        arrow:false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "1rem",
        slidesToShow: 3,
        speed: 500,
        adaptiveHeight: true,
        variableWidth: true,
    };

    return(
        <div>
            <Slider {...settings}>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto opacity-1" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
            </Slider>
        </div>
    )
};

const MeetExperts = (props) => {
    return (
        <section id="meet-experts" className="p-6 relative">
            <Title titleLight="Meet" titleBold="Experts"/>
            <Para content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s" />
            <MeetExpertsCarousel />
        </section>
    )
};





const Caption = (props) => {
    return (
        <div className="my-2 pr-4">
            <h2 className="text-sukoon text-xl font-bold block">
                {props.subHeading || ''}
            </h2>
            <Para className=" py-2 pr-16">
                {props.para || ''}
            </Para>
        </div>

    )
};

function IndexPage(props) {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <HeaderIntro/>
            <InPatient/>
            <OutPatientService/>


            <MeetExperts/>


        </Layout>

    );
}

export default IndexPage;
