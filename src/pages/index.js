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
import BookBtn from "../elements/BookNowBtn";

// Images
import BlogImg  from "../images/iStock-968194620_2019-07-17/iStock-968194620@3x.jpg";
import HeaderImg from "../images/Desktop-Header/DesktopHeader.jpg"
import Slider from "react-slick";
import Physician from "../images/physician_retail_web_2019-07-29/physician_retail_web@3x.jpg";
import Banner from "../components/Banner";

const WhySukoon = () => {
    return (
        <section id="why-sukoon" className="why-sukoon p-12">
            <Title titleLight="Why" titleBold="Sukoon" />
            <div className="flex">
                <Caption subHeading="Caption 1"
                         para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
                <Caption subHeading="Caption 2"
                         para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
                <Caption subHeading="Caption 3"
                         para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            </div>
        </section>
    )
};


const PyramidWrapper = styled.div`
        flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    `;

const Pyramid = (props) =>{

    const Card = styled.div`
      width: 18vw;
      padding: 10px;
      
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
                             <p className="text-grey-para text-vsm w-full py-1">
                                 {item.para}
                             </p>
                             <ArrowIcon />
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

const InPatientServicesHeading = styled.div`
    top: -1rem;
    left: 3rem;
`;

const InPatientServices = (props) => {

    return (
        <section id="inpatient-services" className="relative mt-4 p-12">
            <InPatientServicesHeading className="w-fit absolute">
                <Title titleLight="In Patient" titleBold="Care Services" display="block"/>
                <Para width="40%">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi eligendi minima natus nemo numquam placeat quam, quod reiciendis vel.</Para>
            </InPatientServicesHeading>
            <Pyramid reverse={true} top="-12rem"/>
        </section>
    )
};

const InfraBtnContainer = (props) =>{
    const Wrapper = styled.div`
            position: relative;
            width: 20vw;        
        `;
    return(
      <Wrapper>
          {props.children}
      </Wrapper>
    )
};

const Infra = (props) =>{
    const [yellowActive1, setColor1] = useState(false);
    const [yellowActive2, setColor2] = useState(false);
    const [yellowActive3, setColor3] = useState(false);
    const [yellowActive4, setColor4] = useState(false);

    const Wrapper = styled.div`
        bottom: 2rem;
        left:4rem;
    `;


    const InfraButton = (props)=>{

     const Button = styled.button`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        float:right;
        background: ${props.yellow ? '#ffc300' : 'white'};
        
        ::before{
            position: absolute;
            content: '';
            width: 100%;
            height: 5px;
            background: ${props.yellow ?  '#ffc300' : 'white'};
            top:7px;
            left:0;
        }
    `;
        return(
            <Button onClick={()=>{handleToggle(props.name)}}/>
        )
    };

    const handleToggle = (name)=>{
       if(name === '1'){
           if(!yellowActive1){
               setColor1(true);
           }
           else{
               setColor1(false);
           }
       }
       else if(name === '2'){
           if(!yellowActive2){
               setColor2(true);
           }
           else{
               setColor2(false);
           }
       }
       else if(name === '3'){
           if(!yellowActive3){
               setColor3(true);
           }
           else{
               setColor3(false);
           }
       }
       else{
           if(!yellowActive4){
               setColor4(true);
           }
           else{
               setColor4(false);
           }
       }
    };

    const CardWrapper = styled.div`
        right:10vw;
        top:8vw;
    `;


    const SimpleInfraButton = styled.button`
        width: 20px;
        height: 20px;
        border-radius: 50%;
    `;
    return(
        <section id="sukoon-infra-section" className="sukoon-infra-section relative w-full h-full">
            <CardWrapper className="block absolute bg-white">
                <InHousePharmacy />
            </CardWrapper>
            <Wrapper className="m-4 flex absolute" >
                <div className="relative" >
                    <SimpleInfraButton className="bg-sukoonYellow"/>
                </div>
                <InfraBtnContainer >
                    <InfraButton  yellow={yellowActive1} name="1" className="bg-sukoonYellow"/>
                </InfraBtnContainer>
                <InfraBtnContainer >
                    <InfraButton  yellow={yellowActive2} name="2" className="bg-sukoonYellow"/>
                </InfraBtnContainer>
                <InfraBtnContainer >
                    <InfraButton  yellow={yellowActive3} name="3" className="bg-sukoonYellow"/>
                </InfraBtnContainer>
                <InfraBtnContainer >
                    <InfraButton  yellow={yellowActive4} name="4" className="bg-sukoonYellow"/>
                </InfraBtnContainer>
            </Wrapper>
        </section>
    )
};

const InHousePharmacy = (props) => {
    return (
        <section className="p-6">
            <Title titleLight="In-House" className="mb-4" titleBold="Pharmacy" display="block"/>
            <Para className="text-gray-600 block" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s" />
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
       )
    });

    return (
        <section id="faq-section" className="p-6 flex relative flex-row-reverse justify-between">
            <div className="mr-40">
                <Title titleLight="Frequently" addClass="block" titleBold="Asked Questions"/>
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
        <section className="p-6">
            <div>
                <Title titleLight="" titleBold="Blogs"/>
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
                        <div id="blog-right-inner-2" className="flex justify-around">
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

const OutPatientServices = (props) => {
    const Wrapper = styled.div`
        top: -1rem  ;
        right: 3rem;
    `;

    return (
        <section id="out-patient-services" className="relative p-6 mb-4">
            <Wrapper className="w-fit absolute">
                <Title titleLight="Out Patient" textAlign="right" titleBold="Care Services" borderRight={true} display="block"/>
                <Para className="text-gray-600 block" textAlign="right" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi eligendi minima natus nemo numquam placeat quam, quod reiciendis vel." />
            </Wrapper>
            <Pyramid top="0" reverse={false}/>
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
            <Banner booking/>
            <WhySukoon/>
            <InPatientServices/>
            <OutPatientServices/>
            <Infra/>
            <MeetExperts/>
            <Faqs/>
            <Blogs/>
        </Layout>

    );
}

export default IndexPage;
