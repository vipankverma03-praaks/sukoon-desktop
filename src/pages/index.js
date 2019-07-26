import React ,{useState} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby"
import Title from "../elements/Heading"
import styled from "styled-components";
import Para from "../elements/Para"
import BlogImg  from "../images/iStock-968194620_2019-07-17/iStock-968194620@3x.jpg";
import HeaderImg from "../images/Desktop-Header/DesktopHeader.jpg"

const Heading = () => {
    return (
        <div className="text-sukoon text-5xl lg:text-6xl">
            <span className="font-light block">
                Don't Just Stay,
            </span>
            <span className="font-extrabold block">
                Live Here !
            </span>
        </div>
    )
};


const HeaderIntro = () => {

    const HeaderIntroLeft = styled.div`
        top:135px;
        left:-265px;
    `
    const HeaderIntroRight = styled.div`
    
    `

    return (
        <section id="header-intro" className="w-full lg:mb-20">
            <div id="header-intro-container" className="lg:flex lg:relative">
                <div className="lg:w-11/12">

                </div>
                <HeaderIntroRight id="header-intro-right" className="relative ">
                    <HeaderIntroLeft id="header-intro-left" className="lg:absolute lg:w-fit">
                        <div className="p-4 lg:p-0">
                            <Heading/>
                        </div>
                        <div id="contact-info-container" className="p-6 lg:bg-sukoon lg:w-full lg:flex">
                            <select name="appointment" id="appointment-type"
                                    className="block p-2 bg-transparent lg:bg-sukoon lg:text-white outline-none lg:w-1/2 appointment-type mb-2 lg:mx-2 w-full font-medium"
                                    value="">
                                <option value="" selected>Appointment Type</option>
                                <option value="">In House</option>
                                <option value="">Online Consulting</option>
                            </select>
                            <input type="text" placeholder="Email / Phone"
                                   className="block bg-transparent outline-none customer-contact-info lg:w-1/2 w-full p-2 text-sukoon lg:ml-4 lg:text-white"/>
                        </div>
                        <div className="p-6 lg:pl-0 book-now-container flex">
                            <div className="book-now-inner-container p-1">
                                <button
                                    className="block relative outline-none  items-center py-2 px-4 bg-sukoon text-white">
                                    <span className="text-sm font-normal">Book Now</span>
                                </button>
                            </div>
                            <div className="my-auto mx-2">
                                <span>Or Call Us  +91 9876543210</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <Link to="/" className="underline">Discover more!</Link>
                        </div>
                    </HeaderIntroLeft>
                    <img src={HeaderImg} className="hidden lg:block" alt="Header"/>
                </HeaderIntroRight>
            </div>
        </section>
    )
};

const Carousel = (props) => {

    let item = props.content.map(item => {
        return (
            <div className="card-container p-4 mx-2">
                <div className="bg-white">
                    <div className="p-2 px-4 w-full">
                        <span className="text-2xl font-bold text-sukoon block">{item.titleLight}</span>
                        <span className="text-2xl font-bold text-sukoon block">{item.titleBold}</span>
                        <p className="text-grey-para py-1 w-56 h-24 block text-right">
                            {item.para}
                        </p>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="overflow-y-hidden lg:hidden">
            <div className="carousel-container overflow-y-scroll flex flex-no-wrap">
                {item}
            </div>
        </div>
    );
};

const WhySukoon = (props) => {
    return (
        <section id="why-sukoon" className="why-sukoon p-4 lg:p-12">
            <Title titleLight="Why" titleBold="Sukoon" />
            <div className="lg:flex">
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

const Pyramid = (props) =>{

    const Wrapper = styled.div`
        top: ${props.top || '-8rem'};
        right:0;
        flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    `

    const Col1 = styled.div`
        position: relative;
        top:0;
        right:0;
    `
    const Col2 = styled.div`
        position: relative;
        top:5rem;
    `
    const Col3 = styled.div`
        position: relative;
        top:25rem;
    `
    const Col4 = styled.div`
        position: relative;
        top:30rem;
    `

    return(
        <Wrapper top={props.top} reverse={props.reverse} className="flex-no-wrap flex relative">
            <Col1 className="w-fit">
                <div className="card-container p-4 my-4 mx-2">
                    <div className="bg-white">
                        <div className="p-2 px-4 w-full">
                            <span className="text-2xl font-bold text-sukoon block">Acute</span>
                            <span className="text-2xl font-bold text-sukoon block">Psychiatric Care</span>
                            <p className="text-grey-para py-1 w-56 h-24 block text-right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-container p-4 my-4 mx-2">
                    <div className="bg-white">
                        <div className="p-2 px-4 w-full">
                            <span className="text-2xl font-bold text-sukoon block">Acute</span>
                            <span className="text-2xl font-bold text-sukoon block">Psychiatric Care</span>
                            <p className="text-grey-para py-1 w-56 h-24 block text-right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-container p-4 my-4 mx-2">
                    <div className="bg-white">
                        <div className="p-2 px-4 w-full">
                            <span className="text-2xl font-bold text-sukoon block">Acute</span>
                            <span className="text-2xl font-bold text-sukoon block">Psychiatric Care</span>
                            <p className="text-grey-para py-1 w-56 h-24 block text-right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odit.
                            </p>
                        </div>
                    </div>
                </div>
            </Col1>
            <Col2 className="w-fit">
                <div className="card-container p-4 my-4 mx-2">
                    <div className="bg-white">
                        <div className="p-2 px-4 w-full">
                            <span className="text-2xl font-bold text-sukoon block">Acute</span>
                            <span className="text-2xl font-bold text-sukoon block">Psychiatric Care</span>
                            <p className="text-grey-para py-1 w-56 h-24 block text-right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-container p-4 my-4 mx-2">
                    <div className="bg-white">
                        <div className="p-2 px-4 w-full">
                            <span className="text-2xl font-bold text-sukoon block">Acute</span>
                            <span className="text-2xl font-bold text-sukoon block">Psychiatric Care</span>
                            <p className="text-grey-para py-1 w-56 h-24 block text-right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-container p-4 my-4 mx-2">
                    <div className="bg-white">
                        <div className="p-2 px-4 w-full">
                            <span className="text-2xl font-bold text-sukoon block">Acute</span>
                            <span className="text-2xl font-bold text-sukoon block">Psychiatric Care</span>
                            <p className="text-grey-para py-1 w-56 h-24 block text-right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odit.
                            </p>
                        </div>
                    </div>
                </div>
            </Col2>
            <Col3 className="w-fit">
                <div className="card-container p-4 my-4 mx-2">
                    <div className="bg-white">
                        <div className="p-2 px-4 w-full">
                            <span className="text-2xl font-bold text-sukoon block">Acute</span>
                            <span className="text-2xl font-bold text-sukoon block">Psychiatric Care</span>
                            <p className="text-grey-para py-1 w-56 h-24 block text-right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-container p-4 my-4 mx-2">
                    <div className="bg-white">
                        <div className="p-2 px-4 w-full">
                            <span className="text-2xl font-bold text-sukoon block">Acute</span>
                            <span className="text-2xl font-bold text-sukoon block">Psychiatric Care</span>
                            <p className="text-grey-para py-1 w-56 h-24 block text-right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odit.
                            </p>
                        </div>
                    </div>
                </div>
            </Col3>
            <Col4 className="w-fit">
                <div className="card-container p-4 my-4 mx-2">
                    <div className="bg-white">
                        <div className="p-2 px-4 w-full">
                            <span className="text-2xl font-bold text-sukoon block">Acute</span>
                            <span className="text-2xl font-bold text-sukoon block">Psychiatric Care</span>
                            <p className="text-grey-para py-1 w-56 h-24 block text-right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odit.
                            </p>
                        </div>
                    </div>
                </div>
            </Col4>
        </Wrapper>
    )

};

const InPatientServices = (props) => {

    let content = [
        {
            titleLight: 'Acute',
            titleBold: 'Psychiatry Care',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            titleLight: 'Acute',
            titleBold: 'Psychiatry Care',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            titleLight: 'Acute',
            titleBold: 'Psychiatry Care',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            titleLight: 'Acute',
            titleBold: 'Psychiatry Care',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ];

    return (
        <section id="inpatient-services" className="p-6 lg:p-12">
            <div className="w-fit">
                <Title titleLight="In Patient" titleBold="Care Services" display="block"/>
                <p className="text-gray-600 text-right w-2/5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi eligendi minima natus nemo numquam placeat quam, quod reiciendis vel.</p>
            </div>
            <Carousel content={content}/>
            <Pyramid reverse={true}/>
        </section>
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
    `
    const InfraBtnContainer = (props) =>{
        const Wrapper = styled.div`
            position: relative;
            width: 20vw;        
        `
        return(
            <Wrapper>
                {props.children}
            </Wrapper>
        )
    };

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
    `
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
        right:100px;
        top:180px;
    `


    const SimpleInfraButton = styled.button`
        width: 20px;
        height: 20px;
        border-radius: 50%;
    `
    return(
        <section id="sukoon-infra-section" className="sukoon-infra-section my-4 lg:relative w-full h-64 lg:h-screen">
            <CardWrapper className="hidden lg:block lg:absolute bg-white">
                <InHousePharmacy />
            </CardWrapper>
            <Wrapper className="m-4 flex lg:absolute" >
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
}
const InHousePharmacy = (props) => {

    return (
        <section className="p-6">
            <Title titleLight="In-House" titleBold="Pharmacy" display="block"/>
            <Para className="text-right text-gray-600 block" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s" />
        </section>
    )
}
const MeetExperts = (props) => {
    return (
        <section className="p-6">
            <Title titleLight="Meet" titleBold="Experts"/>
            <Para content=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s" />
        </section>
    )
}

const Faqs = (props) => {

    return (
        <section className="p-6 lg:flex lg:flex-row-reverse lg:justify-between">
            <div className="lg:mr-40">
                <Title titleLight="Frequently" addClass="lg:block" titleBold="Asked Questions"/>
            </div>
            <div className="lg:w-3/5">
                <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
                    <div className="flex justify-between">
                        <details>
                            <summary className="text-sukoon font-bold">Introduction What is the meaning of Lorem ipsum? </summary>
                            <Para content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type." width="30vw" padding="1rem">
                            </Para>
                        </details>
                    </div>
                </div>
                <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
                    <div className="flex justify-between">
                        <details>
                            <summary className="text-sukoon font-bold">Introduction What is the meaning of Lorem ipsum? </summary>
                            <Para content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type." width="30vw" padding="1rem">
                            </Para>
                        </details>
                    </div>
                </div>
                <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
                    <div className="flex justify-between">
                        <details>
                            <summary className="text-sukoon font-bold">Introduction What is the meaning of Lorem ipsum? </summary>
                            <Para content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type." width="30vw" padding="1rem">
                            </Para>
                        </details>
                    </div>
                </div>

            </div>
        </section>
    )
};

const Blogs = (props) =>{
    const Img = styled.img`
                
    `
    const ImgWrapper = styled.div`
    
    `
    return(
        <section className="p-6">
            <div>
                <Title titleLight="" titleBold="Blogs"/>
                <div className="flex">
                    <div id="blog-left" className="lg:w-1/2 flex justify-around">
                        <div className="shadow-lg m-4 flex flex-col justify-between">
                            <ImgWrapper className="lg:h-4/5">
                                <Img src={BlogImg} className="h-full w-full object-cover object-center" alt="Blog"/>
                            </ImgWrapper>
                            <div className="p-2 mb-4">
                                <span className="block pt-2 text-sukoon text-xl lg:text-lg font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 </span>
                                <p className="text-gray-700 text-right lg:text-sm py-4">
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
                    <div id="blog-right" className="lg:w-1/2 lg:flex">
                        <div id="blog-right-inner" className="flex-col justify-between">
                            <div className="shadow-lg m-4">
                                <div className="lg:h-40">
                                    <img src={BlogImg} className="w-full h-full object-center object-cover" alt="Blog"/>
                                </div>
                                <div className="p-2 mb-4">
                                <span className="block pt-2 text-sukoon text-xl lg:text-lg font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 </span>
                                    <p className="text-gray-700 text-right lg:text-sm py-4">
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
                                <div className="lg:h-40">
                                    <img src={BlogImg} className="w-full h-full object-center object-cover" alt="Blog"/>
                                </div>
                                <div className="p-2 mb-4">
                                <span className="block pt-2 text-sukoon text-xl lg:text-lg font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 </span>
                                    <p className="text-gray-700 text-right lg:text-sm py-4">
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
                                <div className="lg:h-3/5">
                                    <img src={BlogImg} className="w-full h-full object-center object-cover" alt="Blog"/>
                                </div>
                                <div className="p-2 mb-4">
                                <span className="block pt-2 text-sukoon text-xl lg:text-lg font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 </span>
                                    <p className="text-gray-700 text-right lg:text-sm py-4">
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
}

const OutPatientServices = (props) => {
    const Wrapper = styled.div`
        float: right;
        
    `

    let content = [
        {
            titleLight: 'Acute',
            titleBold: 'Psychiatry Care',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            titleLight: 'Acute',
            titleBold: 'Psychiatry Care',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            titleLight: 'Acute',
            titleBold: 'Psychiatry Care',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            titleLight: 'Acute',
            titleBold: 'Psychiatry Care',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ];

    return (
        <section id="out-patient-services" className="relative p-6 lg:mb-40">
            <Wrapper className="w-fit relative text-right">
                <Title titleLight="Out Patient" titleBold="Care Services" borderRight={true} display="block"/>
                <Para className="text-gray-600 block text-right" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi eligendi minima natus nemo numquam placeat quam, quod reiciendis vel." />
            </Wrapper>
            <Carousel content={content}/>
            <Pyramid top="0" reverse={false}/>
        </section>
    )
};

const Caption = (props) => {
    return (
        <div className="my-2 lg:pr-4">
            <span className="text-sukoon text-xl font-bold block">
                {props.subHeading || ''}
            </span>
            <p className="text-right py-2 lg:pr-16">
                {props.para || ''}
            </p>
        </div>

    )
};

function IndexPage() {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <HeaderIntro/>
            <WhySukoon/>
            <InPatientServices/>
            <OutPatientServices/>
            <Infra/>
            <div className="lg:hidden">
                <InHousePharmacy />
            </div>
            <MeetExperts/>
            <Faqs/>
            <Blogs/>
        </Layout>

    );
}

export default IndexPage;
