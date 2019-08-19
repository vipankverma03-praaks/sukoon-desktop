import React from "react";
import "../css/style.css";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import Para from "../elements/Para";
import Banner from "../components/Banner";

// Images
import HeaderImg from "../images/pacientes-mejora_2019-08-02/pacientes-mejora@3x.jpg";
import { Link } from "gatsby";
import ArrowButton from "../elements/ArrowButton";
import MeetExperts from "../components/MeetExperts";
import SVG from "../elements/SVG";

const PatientCare = (props) => {
  return (
    <section id="" className="In-patient mt-4 p-12">
      <div className="flex">
        <div className="w-4/5">
          <Title
            titleLight={props.title}
            titleBold="Care Services"
            display="block"
          />
        </div>
        <div className="bg-sukoon text-center text-vxs text-white p-6 w-1/5">
          <SVG display="inline-block" icon="helpline" width={'35px'} fill={'#fff'} />
          <h4 className="leading-loose font-gilroyMedium py-2">Sukoon Suicide Helpline</h4>
          <h2 className="text-v2xl tracking-widest">1800-234-6789</h2>
        </div>
      </div>
      <div className="flex mt-8 justify-between">
        <div className="bg-green-500 h-fit text-vxl w-2/5 p-8">
          <ul className="mt-2 text-gray-600 leading-loose flex font-gilroyMedium flex-col justify-between text-vlg">
            <li className="flex justify-between items-center">
              <Link  to="/" className="active text-sukoon font-gilroyMedium">
                Acute Psychiatry Care Intensive Care Unit
              </Link>
              <ArrowButton margin=" 0"/>
            </li>
            <li className="">
              <Link to="/">Alcohol, Drug, And Habbit De-addiction Programs</Link>
            </li>
            <li className="">
              <Link to="/">Day-Care Counselling, and Immersive Therapy Programs.</Link>
            </li>
            <li className="">
              <Link to="/">Off-site IPD Setup At Home Services</Link>
            </li>
            <li className="">
              <Link to="/">Geriatic Psychiatry age related mental health issues.</Link>
            </li>
            <li className="">
              <Link to="/">Special Ward for Women Female Staff Only</Link>
            </li>
            <li className="">
              <Link to="/">Continuity of Treatment Via Virtual Therapy</Link>
            </li>
            <li className="">
              <Link to="/">All OPD Services are inculcated into the IPD Program.</Link>
            </li>
          </ul>
        </div>
        <div id="right-section-services" className="w-3/5 px-8">
          <div className="text-sukoon">
            <ul>
              <li>
                <h2 className="text-v3xl pb-4 font-gilroyBold">
                  Acute Psychiatry Services
                </h2>
                <Para width="100%">
                  Hennepin Healthcare's Acute Psychiatric Services (APS) center
                  serves those in emotional crisis with 24-hour,
                  seven-day-a-week crisis counseling, assessment, and referral.
                </Para>
              </li>
              <li className="mt-4">
                <h2 className="text-v3xl pb-4 font-gilroyBold">Services</h2>
                <Para width="100%">
                  Hennepin Healthcare's Acute Psychiatric Services (APS) center
                  serves those in emotional crisis with 24-hour,
                  seven-day-a-week crisis counseling, assessment, and referral.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  consectetur dolor error facere laboriosam! Ad eius molestias
                  officiis reprehenderit tempore velit vitae. Cupiditate,
                  molestias. Hennepin Healthcare's Acute Psychiatric Services
                  (APS) center serves those in emotional crisis with 24-hour,
                  seven-day-a-week crisis counseling, assessment, and referral.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  consectetur dolor error facere laboriosam! Ad eius molestias
                  officiis reprehenderit tempore velit vitae. Cupiditate,
                  molestias.
                </Para>
              </li>
              <li className="mt-4">
                <h2 className="text-v3xl pb-4 font-gilroyBold">Our Treatment Team</h2>
                <Para width="100%">
                  Hennepin Healthcare's Acute Psychiatric Services (APS) center
                  serves those in emotional crisis with 24-hour,
                  seven-day-a-week crisis counseling, assessment, and referral.
                </Para>
              </li>
              <li className="mt-4">
                <h2 className="text-v3xl pb-4 font-gilroyBold">Treatment Goals</h2>
                <Para width="100%">
                  Hennepin Healthcare's Acute Psychiatric Services (APS) center
                  serves those in emotional crisis with 24-hour,
                  seven-day-a-week crisis counseling, assessment, and referral.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Architecto commodi corporis eos
                  ipsam maxime neque, perspiciatis sapiente tenetur voluptas
                  voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
                  (APS) center serves those in emotional crisis with 24-hour,
                  seven-day-a-week crisis counseling, assessment, and referral.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Architecto commodi corporis eos
                  ipsam maxime neque, perspiciatis sapiente tenetur voluptas
                  voluptatibus.
                </Para>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};



function ServicesPage(props) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Banner para inner texture HeaderImg={HeaderImg}/>
      <PatientCare title="In Patient" />
      <PatientCare title="Out Patient" />
      <MeetExperts />
    </Layout>
  );
}

export default ServicesPage;
