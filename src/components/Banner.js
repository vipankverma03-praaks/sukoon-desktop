import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

import BookBtn from "../elements/BookNowBtn"
import ArrowButton from "../elements/ArrowButton";

import Texture from "../images/texture.png";
import Input from "../elements/Input";

// Intro Section
const Heading = () => {
    return (
        <HeadingWrapper className="text-sukoon  sm:text-v5xl md:text-v6xl">
            <span className="block font-gilroyMedium">
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
        position: relative; 
        //padding: 4vw 0;
        margin-left: -25vw;
        //margin-top: ${props=> props.inner ? '-22vw' : '-30vw'};
        // margin-left: ${props=> props.inner ? '-26vw' : '-22vw'};;
        z-index: 100;
        width: 40vw;
    `;

// Main Header section component
const Header = styled.section`
`;

const Booking = (props) =>{

    return(
        <div className="mt-12 sm:text-vlg xs:text-vxl">
            <div id="contact-info-container" className="p-4 bg-sukoon font-gilroyMedium w-full flex">
              <Input type="select" wrapperClass="w-2/5" label="Appointment Type" placeholder=""/>
              <Input type="name" required={true} wrapperClass="ml-4 w-3/5" label="Email / Phone Number" defaultValue={``}/>
            </div>
            <div className="mt-8 font-gilroyMedium">
                <div className="inline-block">
                  <BookBtn theme="green" wrapperClass="">
                    <Link to="/booking">Book Now</Link>
                  </BookBtn>
                </div>
                <Link to="/" className="text-sukoon ml-4 underline text-lg">or Call at +91 9876543210</Link>
            </div>
          { props.discover ?
            <div className="font-gilroyMedium absolute bottom-0 flex">
              <Link to="/" className="border-sukoon border-b text-lg">Explore Appointments</Link>
              <ArrowButton border={false} margin="0 12px"/>
            </div> : null}
        </div>


    )
};

const HeaderIntroRight = styled.div`
      position: relative;
      width: ${props => props.bannerWidth || '65%'};
     
    `;

const ParagraphSection = (props) =>{
    return(
        <p Class="mt-8 w-3/5 text-sukoon my-1 font-gilroyMedium text-vlg leading-relaxed block">
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

// Banner Image Component
const BannerImage = styled.div`
    background-image: url(${props=> props.HeaderImg});
    background-position: center center;
    background-size: cover;

    &::after{
    content: '';
    ${props => props.texture ? `background-image: url(${Texture});` : ''};
    display: ${props => props.texture ? 'block' : 'none'};
    float: right;
    margin-top: -4rem;
    width: 85%;
    height: 100px;
    position: relative;
    z-index: -1;
    }
     -webkit-box-shadow: 0 10px 6px -7px rgba(134, 134, 134, 0.60);
       -moz-box-shadow: 0 10px 6px -7px rgba(134, 134, 134, 0.60); 
           box-shadow: 0 10px 6px -7px rgba(134, 134, 134, 0.60);
`;

const ButtonSection = (props) =>{
  return(
    <div>
      <p className="mt-8 w-2/5 text-gray-600 my-1 font-gilroyMedium text-vlg leading-relaxed block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquam, architecto culpa
      </p>
      <BookBtn wrapperClass="inline-block mt-8 mr-12" border><Link to="/booking">Book An Appointment</Link></BookBtn>
      <BookBtn wrapperClass="inline-block" border>Book a Tour</BookBtn>
    </div>

  )
};

const LeftSpace = styled.div`
  width: 35%;
`;

const HeaderIntro = (props) => {

    return (
        <Header id="header-intro" className="w-full mb-12">
            <div id="header-intro-container" className="flex relative">
                <LeftSpace className="">
                </LeftSpace>
                <HeaderIntroRight id="header-intro-right" bannerWidth={props.bannerWidth} className="relative ">
                  <NavWrapper className="flex mb-4 mr-8 font-gilroyMedium  justify-between">
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
                      to="/doctors"
                      className=" inline-block mt-0 mr-6 no-underline"
                    >
                      Doctors
                    </Link>
                    <Link
                      to="/internationalPatient"
                      className=" inline-block mt-0 mr-6 no-underline"
                    >
                      International Patients
                    </Link>
                    <Link
                      to="/about"
                      className=" inline-block mt-0 no-underline"
                    >
                      About
                    </Link>
                  </NavWrapper>
                  <BannerImage HeaderImg={props.HeaderImg} texture={props.texture} className="relative">
                    <BannerText inner={props.inner} id="header-intro-left" className="py-12">
                      <Heading/>
                      {props.booking ?
                        <Booking discover={props.discover}/>
                        : props.para ? <ParagraphSection/> :
                          <ButtonSection/>
                      }
                    </BannerText>
                    </BannerImage>
                </HeaderIntroRight>
            </div>
        </Header>
    )
};


export default HeaderIntro;