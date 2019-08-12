import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

import BookBtn from "../elements/BookNowBtn"
import ArrowButton from "../elements/ArrowButton";

import Texture from "../images/texture.png";

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
const BannerText = styled.div`
        top:  25%;
        left: ${props => props.inner ? '-25vw': '-20vw'};
        width: 35vw;
        z-index: 100;
       
       @media screen and (max-width: 1600px) {
        left: ${props => props.inner ? '-25vw': '-20vw'};
       }
       @media screen and (max-width: 1449px) and (min-width: 1370px){
        left: ${props => props.inner ? '-25vw': '-20vw'};
       }
        @media screen and (max-width: 1366px) and (min-width: 1300px){
        left: ${props => props.inner ? '-25vw': '-20vw'};
       }
       @media screen and (max-width: 1299px) and (min-width: 1200px){
        left: ${props => props.inner ? '-25vw': '-13vw'};
       }
       @media screen and (max-width: 1200px) and (min-width: 1000px){
        left: ${props => props.inner ? '-25vw': '-18vw'};
       }
    `;


// Header Image
const Img = styled.img`
    height: ${props => props.inner ? '52vh': '71vh'};
    width: 100%;
    object-fit: cover;
    object-position: top -2vw left 0px;
    position: relative;
    display: block;
       
    @media screen and (max-width: 1600px) and (min-width: 1450px){
       height:  ${props => props.inner ? '51vh': '72vh'};
       }
       @media screen and (max-width: 1450px) and (min-width: 1370px){
       height:  ${props => props.inner ? '50vh': '68vh'};
       }
        @media screen and (max-width: 1370px) and (min-width: 1300px){
       height:  ${props => props.inner ? '53vh': '62vh'};
       }
       @media screen and (min-width: 1200px) and (max-width: 1300px){
       height:  ${props => props.inner ? '48vh': '64vh'};
       }
`;


// Main section component
const Header = styled.section`

`;


const Booking = (props) =>{

    return(
        <div className="md:mt-12 mt-8 sm:mt-8 sm:text-vlg xs:text-vxl">
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
            <div className="md:mt-12 mt-8 sm:mt-8 font-gilroyMedium">
                <div className="inline-block">
                  <BookBtn theme="green" wrapperClass="">
                    <Link to="/booking">Book Now</Link>
                  </BookBtn>
                </div>
                <Link to="/" className="text-sukoon ml-4">or Call at +91 9876543210</Link>
            </div>
          { props.discover ?
            <div className="md:mt-16 mt-8 sm:mt-12 font-gilroyMedium flex">
              <Link to="/" className="border-sukoon border-b border-soild">Explore Appointments</Link>
              <ArrowButton border={false} margin="0 12px"/>
            </div> : null}
        </div>


    )
};


const HeaderIntroRight = styled.div`
      position: relative;
      width: ${props => props.bannerWidth || '80%'};
     
    `;

const ParagraphSection = (props) =>{
    return(
        <p Class="mt-8 w-70% text-sukoon my-1 font-gilroyMedium text-vlg leading-relaxed block">
          entium, rem repellendus repudiandae sequi similique tempora tenetur ut velit veritatis!
          entium, rem repellendus repudiandae sequi similique tempora tenetur ut velit veritatis!
        </p>
    )
};


const NavWrapper = styled.div`
  font-size: 1.1vw;
  
  @media screen and (max-width: 1600px) and (min-width: 1450px){
           font-size: 1.3vw;
          
       }
       @media screen and (max-width: 1450px) and (min-width: 1370px){
            font-size: 1.3vw;
        
       }
        @media screen and (max-width: 1370px) and (min-width: 1300px){
           font-size: 1.2vw;
        
       }
       @media screen and (min-width: 1200px) and (max-width: 1300px){
            font-size: 1.2vw;
       }
`;

const BannerImage = styled.div`
    &::after{
    content: '';
    ${props => props.texture ? `background-image: url(${Texture});` : ''};
    position: absolute;
    top: 490px;
    right: 0;
    z-index: -1;
    width: 80%;
    height: 100px;
    }
     -webkit-box-shadow: 0 8px 6px -6px black;
       -moz-box-shadow: 0 8px 6px -6px black; 
           box-shadow: 0 12px 6px -7px #7e7e7e;
    
    @media screen and (max-width: 1600px) and (min-width: 1440px){
      &::after{
      top: 499px;
      }
    }
    @media screen and (max-width: 1440px) and (min-width: 1370px){
      &::after{
      top: 488px;
      }
    }
    @media screen and (max-width: 1370px) and (min-width: 1280px){
      &::after{
      top: 380px;
      }
    }
    @media screen and (max-width: 1280px) and (min-width: 1100px){
      &::after{
      top: 418px;
      }
    }
    @media screen and (max-width: 1100px){
      &::after{
      top: 314px;
      }
    }
`;

const ButtonSection = (props) =>{
  return(
    <div>
      <p className="mt-8 text-gray-600 my-1 font-gilroyMedium text-vlg leading-relaxed block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquam, architecto culpa
      </p>
      <BookBtn wrapperClass="inline-block mt-8 mr-12" border><Link to="/booking">Book An Appointment</Link></BookBtn>
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
                <HeaderIntroRight id="header-intro-right" bannerWidth={props.bannerWidth} className="relative ">
                    <BannerText inner={props.inner} id="header-intro-left" className="absolute w-fit">
                        <Heading/>
                        {props.booking ?
                            <Booking discover={props.discover}/>
                            : props.para ? <ParagraphSection/> :
                              <ButtonSection/>
                        }
                    </BannerText>
                    <BannerImage texture={props.texture} className="relative">
                      <NavWrapper className="flex mb-4 mr-8 justify-between">
                        <Link
                          to="/services"
                          className=" inline-block mt-0 mr-6 no-underline"
                        >
                          Services
                        </Link>
                        <Link
                          to="/infrastructure"
                          className=" inline-block mt-0 mr-6 no-underline"
                        >
                          Infrastructure
                        </Link>
                        <Link
                          to="/experience"
                          className=" inline-block mt-0 mr-6 no-underline"
                        >
                          Experience
                        </Link>
                        <Link
                          to="/"
                          className=" inline-block mt-0 mr-6 no-underline"
                        >
                          Doctors
                        </Link>
                        <Link
                          to="/"
                          className=" inline-block mt-0 mr-6 no-underline"
                        >
                          International Patients
                        </Link>
                        <Link
                          to="/"
                          className=" inline-block mt-0 no-underline"
                        >
                          About
                        </Link>
                      </NavWrapper>
                      <Img src={props.HeaderImg} inner={props.inner} className="block shadow-xl" alt="Header"/>
                    </BannerImage>
                </HeaderIntroRight>
            </div>
        </Header>
    )
};


export default HeaderIntro;