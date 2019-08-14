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
import Para from "../elements/Para"
import ArrowIcon from "../elements/ArrowButton";
import Banner from "../components/Banner";
import Infrastructure from "../components/Infrastructure";

// Images
import BlogImg  from "../images/iStock-968194620_2019-07-17/iStock-968194620@3x.jpg";
import HeaderImg from "../images/Desktop-Header/HomeBanner.jpg";
import SukoonBgLogo from "../images/sukoon-bg-logo/logo@2x.jpg";
import SukoonLogo from "../images/sukoon-bg-logo/logo.jpg";


import Details from "../elements/Details";
import MeetExperts from "../components/MeetExperts";

const Caption = (props) => {
  return (
    <div className="my-4 pr-4">
      <h2 className="text-sukoon text-2xl font-gilroyBold block">
        {props.subHeading || ''}
      </h2>
      <Para className="py-2 pr-16">
        {props.para || ''}
      </Para>
    </div>

  )
};

// Meet Experts and Blog and faq wrapper
const MFBWrapper = styled.section`
    background-image: url(${SukoonBgLogo});
    background-repeat: no-repeat;
    background-position: left -23vw top 16vw;
    background-size: 48vw;
`;


const TopRow = styled.section`
    background-image: url(${SukoonLogo});
    background-size: 20vw;
    background-repeat: no-repeat;
    background-position: top 26vw right -10vw;
    
     @media screen and (max-width: 1600px) and (min-width: 1450px){
          background-position: top 33vw right -11vw;

       }
       @media screen and (max-width: 1450px) and (min-width: 1370px){
          background-position: top 27vw right -11vw;

       }
        @media screen and (max-width: 1370px) and (min-width: 1300px){
          background-position: top 19vw right -11vw;

       }
       @media screen and (min-width: 1200px) and (max-width: 1300px){
          background-position: top 24vw right -11vw;

       }
`;
const WhySukoon = () => {
    return (
        <section id="why-sukoon" className="why-sukoon py-8 px-20">
            <Title subHeading="About" titleLight="Why" titleBold="Sukoon" />
            <div className="flex">
                <Caption subHeading="Consult best doctors"
                         para=" Get expert advice from our team of experienced doctors, led by Dr. Sameer Parikh"/>
                <Caption subHeading="Get personalised care"
                         para="Receive customised and holistic care because of our incredible 1:1 nurse to patient ratio"/>
                <Caption subHeading="Experience premium facilities"
                         para="Enhance your recovery in a calming, positive, and comfortable environment "/>
            </div>
        </section>
    )
};

// Content for residential services & out-patient services.
let content = [
  {
    titleLight: 'Acute',
    titleBold: 'Psychiatry Care',
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    numberOfCards: [1,2,3],
    col:'Col1'
  },
  {
    titleLight: 'Acute',
    titleBold: 'Psychiatry Care',
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    numberOfCards: [1,2,3],
    col:'Col2'
  },
  {
    titleLight: 'Acute',
    titleBold: 'Psychiatry Care',
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    numberOfCards: [1,2],
    col:'Col3'
  },
  {
    titleLight: 'Acute',
    titleBold: 'Psychiatry Care',
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    numberOfCards: [1],
    col:'Col4'
  }
];


const PyramidWrapper = styled.div`
      flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    `;

const Pyramid = (props) =>{

    const Card = styled.div`
      width: 17vw;
      padding: 13px;
      
       > div > div{
        padding: 10px 20px;
      }
      
    `;
    const Col1 = styled.div`
        width: fit-content;
    `;
    const Col2 = styled.div`
        width: fit-content;
        margin-top: 10rem;
    `;
    const Col3 = styled.div`
        width: fit-content;
        margin-top: 15rem;
    `;
    const Col4 = styled.div`
        width: fit-content;
        margin-top: 25rem;
    `;

    const CoolCards = ()=>{
      let items = content.map((item)=>{
          let Col = item.col;
          let Cards = item.numberOfCards.map(()=>{
             return(
                 <Card className="card-container my-4 mx-2">
                     <div className="bg-white w-full">
                         <div className="">
                             <span className="text-vxl font-bold text-sukoon block">{item.titleLight}</span>
                             <span className="text-vxl font-bold text-sukoon block">{item.titleBold}</span>
                             <Para Class="w-full py-1">
                                 {item.para}
                             </Para>
                             <ArrowIcon border/>
                         </div>
                     </div>
                 </Card>
             )
          });

          if(Col === 'Col1'){
              return (
                  <Col1>
                      {Cards}
                  </Col1>
              )
          }
          else if(Col === 'Col2'){
              return (
                  <Col2>
                      {Cards}
                  </Col2>
              )
          }
          else if(Col === 'Col3'){
              return (
                  <Col3>
                      {Cards}
                  </Col3>
              )
          }
          else{
              return (
                  <Col4>
                      {Cards}
                  </Col4>
              )
          }
      });
      return(items);
    };

    // Final return statement
    return(
        <PyramidWrapper top={props.top} reverse={props.reverse} className="flex-no-wrap flex">
            {CoolCards()}
        </PyramidWrapper>
    )
};


const InPatientServices = (props) => {

    return (
        <section id="inpatient-services" className="relative py-12">
            <div className="w-fit absolute pl-20 pt-12">
                <Title subHeading="IPD" titleLight="Residential" titleBold="Services" display="block"/>
                <Para width="40%">Our residential treatment programs provide specialised care. Recover in a home-like setting - comfortable, warm, and personalised.
                </Para>
            </div>
            <Pyramid reverse={true} top="-12rem"/>
        </section>
    )
};




const FaqsPara = (item) =>{
  return(
    <Para width="97%" padding="1rem">
      {item}
    </Para>
  )
};

const Faqs = (props) => {

    let content = [
      {
      summary: 'Introduction What is the meaning of Lorem ipsum?',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      },
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },

    ];

    let items = content.map((item)=>{
       return(
         <div className="flex-col flex shadow-lg mb-4 bg-white">
                 <Details summary={item.summary} content={FaqsPara} arguments={item.description}>
                 </Details>
         </div>
       )
    });

    return (
        <section id="faq-section" className="py-12 px-20 flex relative flex-row justify-between">
            <div className="mr-40">
                <Title subHeading="Learn" titleLight="Frequently" addClass="block" titleBold="Asked Questions"/>
            </div>
            <div className="w-3/5">
                {items}
            </div>
        </section>
    )
};

const Blogs = (props) =>{
    const Img = styled.img`
                
    `;
    const ImgWrapper = styled.div`
    
    `;
    return(
        <section className="py-12 px-20">
            <div>
                <Title subHeading="Learn" titleLight="" titleBold="Blogs"/>
                <div className="flex">
                    <div id="blog-left" className="w-1/2 flex justify-around">
                        <div className="shadow-lg m-4 flex flex-col justify-between">
                            <ImgWrapper className="h-4/5">
                                <Img src={BlogImg} className="h-full w-full object-cover object-center" alt="Blog"/>
                            </ImgWrapper>
                            <div className="p-2 mb-4">
                                <h2 className="block pt-2 text-sukoon text-xl text-lg font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 </h2>
                                <p className="text-gray-700  text-sm py-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <div>
                                    <span className="text-sukoon font-bold text-sm">Guest</span>
                                    <span className="text-sukoon font-light text-sm"> / Apr 16 2019</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="blog-right" className="w-1/2 flex">
                        <div id="blog-right-inner" className="flex-col justify-between">
                            <div className="shadow-lg m-4">
                                <div className="h-40">
                                    <img src={BlogImg} className="w-full h-full object-center object-cover" alt="Blog"/>
                                </div>
                                <div className="p-2 mb-4">
                                <h2 className="block pt-2 text-sukoon text-xl text-lg font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 </h2>
                                    <p className="text-gray-700  text-sm py-4">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <div>
                                        <span className="text-sukoon font-bold text-sm">Guest</span>
                                        <span className="text-sukoon font-light text-sm"> / Apr 16 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg m-4">
                                <div className="h-40">
                                    <img src={BlogImg} className="w-full h-full object-center object-cover" alt="Blog"/>
                                </div>
                                <div className="p-2 mb-4">
                                <h2 className="block pt-2 text-sukoon text-xl text-lg font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 </h2>
                                    <p className="text-gray-700 text-sm py-4">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <div>
                                        <span className="text-sukoon font-bold text-sm">Guest</span>
                                        <span className="text-sukoon font-light text-sm"> / Apr 16 2019</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="blog-right-inner-2" className="flex bg-white justify-around">
                            <div className="shadow-lg m-4 flex flex-col justify-between">
                                <div className="h-3/5">
                                    <img src={BlogImg} className="w-full h-full object-center object-cover" alt="Blog"/>
                                </div>
                                <div className="p-2 mb-4">
                                <h2 className="block pt-2 text-sukoon text-xl text-lg font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 </h2>
                                    <p className="text-gray-700  text-sm py-4">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <div>
                                        <span className="text-sukoon font-bold text-sm">Guest</span>
                                        <span className="text-sukoon font-light text-sm"> / Apr 16 2019</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

const OutPatientServiceHeading = styled.div`
        top: 0;
        right: 3rem;
        padding-left: 3vw;
    `;

const OutPatientServices = (props) => {

    return (
        <section id="out-patient-services" className="relative py-12 mb-4">
            <OutPatientServiceHeading className="w-fit pt-12 absolute">
                <Title subHeading="OPD" titleLight="Out Patient" textAlign="right" titleBold="Care Services" borderRight={true} display="block"/>
              <Para width="23vw" textAlign="right">
                In addition to providing holistic care in our calming environment, we also offer effective daycare treatment programs.
              </Para>

            </OutPatientServiceHeading>
            <Pyramid top="0" reverse={false}/>
        </section>
    )
};



function IndexPage(props) {
    return (
        <Layout logoHighlighter bgImage >
            <SEO
                title="Home"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <TopRow>
              <Banner booking discover HeaderImg={HeaderImg}/>
              <WhySukoon/>
            </TopRow>
            <InPatientServices/>
            <OutPatientServices/>
            <Infrastructure/>
            <MFBWrapper>
              <MeetExperts/>
              <Faqs/>
              <Blogs/>
            </MFBWrapper>
        </Layout>

    );
}

export default IndexPage;
