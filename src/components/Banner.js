import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

import BookBtn from "../elements/BookNowBtn"
import ArrowButton from "../elements/ArrowButton";

// Intro Section
const Heading = () => {
    return (
        <HeadingWrapper className="text-sukoon  text-v6xl">
            <span className="block font-gilroyLight">
                Don't Just Stay,
            </span>
            <span className="font-gilroyBold block">
                Live Here !
            </span>
        </HeadingWrapper>
    )
};

// Header Main heading
const HeadingWrapper = styled.div`
  line-height: 1.1;
`;

// Header Text Container  position
const HeaderIntroLeft = styled.div`
        top:  5vw;
        left: -20vw;
        width: 35vw;
        z-index: 100;
       
       @media screen and (max-width: 1600px) and (min-width: 1450px){
        top: 7vw;
        left: -16vw;
       }
       @media screen and (max-width: 1450px) and (min-width: 1370px){
        top: 6vw;
        left: -16vw;
       }
        @media screen and (max-width: 1370px) and (min-width: 1300px){
        top: 3vw;
        left: -14vw;
       }
       @media screen and (min-width: 1200px) and (max-width: 1300px){
        top: 4vw;
        left: -13vw;
       }
    `;


// Header Image
const Img = styled.img`
    height: 71vh;
    width: 100%;
    object-fit: cover;
    object-position: top -2vw left 0px;
    position: relative;
    display: block;
       
     &::before{
     display: block;
     content: '';
     background: #f6e05e;
     width: 100%;
     height: 100px;
     
     }
    @media screen and (max-width: 1600px) and (min-width: 1450px){
       height: 72vh;
       }
       @media screen and (max-width: 1450px) and (min-width: 1370px){
       height: 68vh;
       }
        @media screen and (max-width: 1370px) and (min-width: 1300px){
       height: 62vh;
       }
       @media screen and (min-width: 1200px) and (max-width: 1300px){
       height: 64vh;
       }
`;


// Main section component
const Header = styled.section`

`;


const Booking = (props) =>{

    return(
        <div className="md:mt-12 xs:mt-8 sm:mt-8 sm:text-vlg xs:text-vxl">
            <div id="contact-info-container" className="p-4 bg-sukoon font-gilroyMedium w-full flex">
                <select name="appointment" id="appointment-type"
                        className="block p-2  bg-sukoon text-white outline-none w-2/5 appointment-type mx-2 font-medium"
                        value="">
                    <option value="" selected>Appointment Type</option>
                    <option value="">In House</option>
                    <option value="">Online Consulting</option>
                </select>
                <input type="text" placeholder="Email / Phone"
                       className="block bg-transparent outline-none customer-contact-info p-2 ml-4 text-white"/>
            </div>
            <div className="md:mt-12 xs:mt-8 sm:mt-8 font-gilroyMedium">
                <div className="inline-block">
                  <BookBtn border bg="transparent" wrapperClass="">
                    Book Now
                  </BookBtn>
                </div>
                <Link to="/" className="text-sukoon ml-4">or Call at +91 9876543210</Link>
            </div>
          { props.discover ?
            <div className="md:mt-16 xs:mt-12 sm:mt-12 font-gilroyMedium flex">
              <Link to="/" className="underline">Explore Appointments</Link>
              <ArrowButton border={false} margin="0 12px"/>
            </div> : null}
        </div>


    )
};



const HeaderIntroRight = styled.div`
      position: relative;
    `;

const ParagraphSection = (props) =>{
    return(
        <p Class="mt-8 text-sukoon my-1 font-gilroyMedium text-vlg leading-relaxed block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquam, architecto culpa
          deleniti doloribus dolorum ea esse est ex, expedita labore laboriosam minima neque nihil omnis perferendis
          praesentium, rem repellendus repudiandae sequi similique tempora tenetur ut velit veritatis!
        </p>
    )
};

const ButtonSection = (props) =>{
  return(
    <div>
      <p className="mt-8 text-gray-600 my-1 font-gilroyMedium text-vlg leading-relaxed block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquam, architecto culpa
        deleniti doloribus dolorum ea esse est ex, expedita labore laboriosam minima neque nihil omnis perferendis
        praesentium, rem repellendus repudiandae sequi similique tempora tenetur ut velit veritatis!
      </p>
      <BookBtn wrapperClass="inline-block mt-8 mr-12" border>Book An Appointment</BookBtn>
      <BookBtn wrapperClass="inline-block" border>Book a Tour</BookBtn>
    </div>

  )
};

const HeaderIntro = (props) => {

    return (
        <Header id="header-intro" className="w-full">
            <div id="header-intro-container" className="flex relative">
                <div className="w-2/5">
                </div>
                <HeaderIntroRight id="header-intro-right" className="relative">
                    <HeaderIntroLeft id="header-intro-left" className="absolute w-fit">
                        <Heading/>
                        {props.booking ?
                            <Booking discover={props.discover}/>
                            : props.para ? <ParagraphSection/> :
                              <ButtonSection/>
                        }
                    </HeaderIntroLeft>
                    <Img src={props.HeaderImg} className="block shadow-xl" alt="Header"/>
                </HeaderIntroRight>
            </div>
        </Header>
    )
};


export default HeaderIntro;