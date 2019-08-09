import React ,{useState} from "react";
import {Link} from "gatsby"
import "../css/style.css";

// Slick CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading"
import styled from "styled-components";

// Images

import HeaderImg from "../images/Desktop-Header/001@3x.png"
import BlogImg  from "../images/iStock-968194620_2019-07-17/yoga_for_runners.png";
import BlogImg1  from "../images/iStock-968194620_2019-07-17/work-yoga.png";
import Para from "../elements/Para";



// Intro Section
const Heading = () => {
    return (
        <div className="text-sukoon text-v6xl">
            <h2 className="font-light block">
                Lorem Ipsum Text

            </h2>
            <span className="font-extrabold block">
               Dummy Text !

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
                                    <li>Lorem Ipsum is simply dummy text of the printing and</li>
                                    <li>    typesetting industry Lorem Ipsum.</li></ul>
                            </div>

                            <div className="flex justify-between p-6">
                                <div className="  book-now-inner-container p-1">

                                    <button
                                        className="block relative outline-none  items-center py-2 px-4 bg-sukoon text-white">
                                        <span className="text-sm font-normal">Book on Appointment</span>
                                    </button></div>
                                <div className=" book-now-inner-container p-1">

                                    <button
                                        className="block relative outline-none  items-center py-2 px-4 bg-sukoon text-white">
                                        <span className="text-sm font-normal">Book on Tour</span>
                                    </button>


                                </div>
                            </div>

                        </div>

                    </HeaderIntroLeft>
                    <img src={HeaderImg} className="block" alt="Header"/>
                </HeaderIntroRight>
            </div>
        </section>
    )
};
//SQUARE FEET SECTION
const Feet = () => {
    return (

        <section id="Feet" className="Sq-Feet p-12">

            <div>
                <div >
                    <Title titleLight="1500" titleBold="Sq.Feet"  />
                    <span className="text-sukoon text-2xl ">
                        <p className="font-black  text-3xl">Spread Across 6 Floors</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </span></div>
                <div className="build">

                </div>
            </div>
        </section>
    )
};
//ABSOLUTE AND RELATIVE POSITION BLOCK
const Infra = (props) =>{
    const Wrapper = styled.div`
`;
    const CardWrapper = styled.div`
        left:60vw;
        top:8vw;
    `;
    const CardWrapper1 = styled.div`
        right:20vw;
        bottom:-4vw;
       width:50%;
       
    `;

    return(
        <section id="sukoon-infra-section" className="sukoon-infra-section relative w-full h-full">

            <CardWrapper className="block absolute bg-white">
                <InHousePharmacy />
            </CardWrapper>
            <CardWrapper1 className="block absolute bg-white">
                <InHousePharmacychild/>
            </CardWrapper1>
            <Wrapper className="m-4 flex absolute" >
                <div className="relative" >

                </div>

            </Wrapper>
        </section>
    )
};
//position for parent
const InHousePharmacy = (props) => {
    return (
        <section className="p-6">
            <Title titleLight="In-House" className="mb-4" titleBold="Pharmacy" display="block"/>
            <Para className="text-gray-600 block" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s" />
        </section>
    )
};
//position for child block
const InHousePharmacychild = (props) => {
    return (
        <section className="p-6">
            <Para className="text-gray-600 block"/>
            <ul className="flex">
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Consulting
                        </a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Pharmacy</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">RTMS</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Virtual</a>
                </li>
            </ul>
        </section>
    )
};
//Medium section which divides into 3 division
const Faqs = (props) => {

    let content = [
        {
            summary: 'Fitness Studio',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Art Studio',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Terrace garden',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },

    ];

    let items = content.map((item)=>{
        return(
            <div>
                <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
                    <div className="flex justify-between">
                        <details>
                            <Para width="30vw" padding="1rem">
                                {item.description}
                            </Para>
                            <summary className="text-sukoon font-bold">{item.summary}</summary>
                        </details>
                    </div>

                </div>

            </div>
        )
    });

    return (
        <section id="faq-section" className="p-6 flex relative flex-row-reverse justify-between">
            <div className=" flex mr-40">
                <img src={BlogImg1} className="w-full h-100 w-32 object-center object-cover" alt="Blog"/>
                <img src={BlogImg} className="w-full h-full object-center object-cover" alt="Blog"/>
            </div>
            <div className="w-3/5">
                {items}

            </div>
        </section>
    )
};
//last section  below footer portion
const Infra1 = (props) =>{
    const Wrapper = styled.div`
    
`;
    const CardWrapper = styled.div`
        left:60vw;
        top:8vw;
    `;
    const CardWrapper1 = styled.div`
        right:20vw;
        bottom:-4vw;
       width:50%;
       
    `;
    return(
        <section id="sukoon-infra-section" className="sukoon-infra-section relative w-full h-full">
            <CardWrapper className="block absolute bg-white">
                <InHousePharmacyy />
            </CardWrapper>
            <CardWrapper1 className="block absolute bg-white">
                <InHousePharmacychildblock />
            </CardWrapper1>
            <Wrapper className="m-4 flex absolute" >
                <div className="relative" >

                </div>

            </Wrapper>
        </section>
    )
};

const InHousePharmacyy = (props) => {
    return (
        <section className="p-6">
            <Title titleLight="In-House" className="mb-4" titleBold="Pharmacy" display="block"/>
            <Para className="text-gray-600 block" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s" />
        </section>
    )
};
const InHousePharmacychildblock = (props) => {
    return (
        <section className="p-6">

            <Para className="text-gray-600 block"/>
            <ul className="flex">
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Consulting
                    </a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Pharmacy</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">RTMS</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Virtual</a>
                </li>






            </ul>
        </section>
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

<Feet/>
            <Infra/>

<Faqs/>
<Infra1/>

        </Layout>

    );
}

export default IndexPage;
