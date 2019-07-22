import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby"
import Title from "../elements/Heading"

import BlogImg  from "../images/iStock-968194620_2019-07-17/iStock-968194620@3x.jpg";

const Heading = () => {
    return (
        <div className="text-sukoon text-5xl">
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
    return (
        <section id="header-intro" className="w-full">
            <div className="p-4">
                <Heading/>
            </div>
            <div id="contact-info-container" className="p-6">
                <select name="appointment" id="appointment-type"
                        className="block p-2 bg-transparent outline-none appointment-type mb-2 w-full font-medium"
                        value="">
                    <option value="" selected>Appointment Type</option>
                    <option value="">In House</option>
                    <option value="">Online Consulting</option>
                </select>
                <input type="text" placeholder="Email / Phone"
                       className="block bg-transparent outline-none customer-contact-info w-full p-2 text-sukoon"/>
            </div>
            <div className="p-6 book-now-container flex">
                <div className="book-now-inner-container p-1">
                    <button
                        className="block md:hidden relative outline-none  items-center py-2 px-4 bg-sukoon text-white">
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
        <div className="overflow-y-hidden">
            <div className="carousel-container overflow-y-scroll flex flex-no-wrap">
                {item}
            </div>
        </div>
    );
};

const WhySukoon = (props) => {
    return (
        <section id="why-sukoon" className="why-sukoon p-4">
            <Title titleLight="Why" titleBold="Sukoon" />
            <Caption subHeading="Caption 1"
                     para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            <Caption subHeading="Caption 2"
                     para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            <Caption subHeading="Caption 3"
                     para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
        </section>
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
        <section id="inpatient-services" className="p-6 ">
            <Title titleLight="In Patient" titleBold="Care Services" display="block"/>
            <Carousel content={content}/>
        </section>
    )
};

const InHousePharmacy = (props) => {
    return (
        <section className="p-6">
            <Title titleLight="In-House" titleBold="Pharmacy" display="block"/>
            <p className="text-right">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
            </p>
        </section>
    )
}
const MeetExperts = (props) => {
    return (
        <section className="p-6">
            <Title titleLight="Meet" titleBold="Experts"/>
            <p className="text-right">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
            </p>
        </section>
    )
}

const toggleHide = (element) =>{
    let el = document.getElementById(element);
    if(el.classList.contains('show')){
        el.classList.add('hide');
        el.classList.remove('show');
    }
    else{
        el.classList.remove('hide');
        el.classList.add('show');
    }
};

const Faqs = (props) => {

    return (
        <section className="p-6">
            <Title titleLight="Frequently" titleBold="Asked Questions"/>
            <div className="flex-col flex p-4 shadow-lg my-4">
                <div className="flex justify-between">
                    <span className="text-sukoon font-bold">Introduction What is the meaning of Lorem ipsum? </span>
                    <button onClick={()=>{toggleHide('faq-para-1')}} className="text-grey-500 outline-none border-none text-xl self-start font-semibold mx-2">+</button>
                </div>
                <div className="p-4 hide" id="faq-para-1" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </div>
            </div>
            <div className="flex-col flex p-4 shadow-lg my-4" >
                <div className="flex justify-between">
                    <span className="text-sukoon font-bold">Introduction What is the meaning of Lorem ipsum? </span>
                    <button onClick={()=>{toggleHide('faq-para-2')}} className="text-grey-500 outline-none border-none text-xl self-start font-semibold mx-2">+</button>
                </div>
                <div className="p-4 hide" id="faq-para-2" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </div>
            </div>
            <div className="flex-col flex p-4 shadow-lg my-4">
                <div className="flex justify-between">
                    <span className="text-sukoon font-bold">Introduction What is the meaning of Lorem ipsum? </span>
                    <button onClick={()=>{toggleHide('faq-para-3')}} className="text-grey-500 outline-none border-none text-xl self-start font-semibold mx-2">+</button>
                </div>
                <div className="p-4 hide" id="faq-para-3" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </div>
            </div>
        </section>
    )
}

const Blogs = (props) =>{
    return(
        <section className="p-6">
            <div>
                <Title titleLight="" titleBold="Blogs"/>
                <div className="shadow-lg">
                    <img src={BlogImg} alt="Blog Image"/>
                    <div className="p-2">
                    <span className="block pt-2 text-sukoon text-xl font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </span>
                        <p className="text-gray-700 text-right py-4">
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
        </section>
    )
}
const OutPatientServices = (props) => {

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
        <section id="out-patient-services" className="p-6 ">
            <Title titleLight="Out Patient" titleBold="Care Services" display="block"/>
            <Carousel content={content}/>
        </section>
    )
};

const Caption = (props) => {
    return (
        <div className="my-2">
            <span className="text-sukoon text-xl font-bold block">
                {props.subHeading || ''}
            </span>
            <p className="text-right py-2">
                {props.para || ''}
            </p>
        </div>

    )
}

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
            <InHousePharmacy/>
            <MeetExperts/>
            <Faqs/>
            <Blogs/>
        </Layout>

    );
}

export default IndexPage;
