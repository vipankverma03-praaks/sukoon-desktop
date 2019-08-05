import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import HeaderImg from "../images/Desktop-Header/DesktopHeader.jpg";
import Para from "../elements/Para"

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
const Img = styled.img`
    height: 70vh;
    width: 100%;
    object-fit: cover;
    object-position: center center;
`;


const Booking = (props) =>{

    return(
        <div>
            <div id="contact-info-container" className="p-4 bg-sukoon w-full flex">
                <select name="appointment" id="appointment-type"
                        className="block p-2 bg-sukoon text-white outline-none w-1/2 appointment-type mx-2 font-medium"
                        value="">
                    <option value="" selected>Appointment Type</option>
                    <option value="">In House</option>
                    <option value="">Online Consulting</option>
                </select>
                <input type="text" placeholder="Email / Phone"
                       className="block bg-transparent outline-none customer-contact-info w-1/2 p-2 text-sukoon ml-4 text-white"/>
            </div>
            <div className="book-now-container mt-4">
                <div className="book-now-inner-container p-1">
                    <button
                        className="block relative outline-none  items-center py-2 px-4 bg-sukoon text-white">
                        <span className="text-sm font-normal">Book Now</span>
                    </button>
                </div>
                <div className="my-4">
                    <span>Or Call Us  +91 9876543210</span>
                </div>
            </div>
            <Link to="/" className="underline">Discover more!</Link>
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

const ParagraphSection = (props) =>{
    return(
        <Para>
            Hello world
        </Para>
    )
};

const HeaderIntro = (props) => {

    return (
        <section id="header-intro" className="w-full">
            <div id="header-intro-container" className="flex relative">
                <div className="w-2/5">
                </div>
                <HeaderIntroRight id="header-intro-right" className="relative">
                    <HeaderIntroLeft id="header-intro-left" className="absolute w-fit">
                        <Heading/>
                        {props.booking ?
                            <Booking />
                            : <ParagraphSection/>
                        }


                    </HeaderIntroLeft>
                    <Img src={HeaderImg} className="block" alt="Header"/>
                </HeaderIntroRight>
            </div>
        </section>
    )
};


export default HeaderIntro;