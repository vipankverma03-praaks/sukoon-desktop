import React from "react";
import "../css/style.css";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import styled from "styled-components";
import Para from "../elements/Para";

// Images
import HeaderImg from "../images/pacientes-mejora_2019-08-02/pacientes-mejora@3x.jpg";
import Slider from "react-slick";
import Physician from "../images/physician_retail_web_2019-07-29/physician_retail_web@3x.jpg";

// Intro Section
const Heading = () => {
  return (
    <div className="text-sukoon text-v6xl">
      <h2 className="font-light block">Lorem ipsum Text.</h2>
      <span className="font-extrabold block">Dummy Text!</span>
    </div>
  );
};

const HeaderIntroLeft = styled.div`
  top: 10vw;
  left: -18vw;

  @media screen and (max-width: 1600px) {
    left: -16vw;
  }
  @media screen and (max-width: 1400px) {
    left: -14vw;
  }
  @media screen and (max-width: 1200px) {
    left: -10vw;
  }
`;
const HeaderIntroRight = styled.div``;

const HeaderIntro = () => {
  return (
    <section id="header-intro" className="w-full">
      <div id="header-intro-container" className="flex relative">
        <div className="w-2/5"> </div>
        <HeaderIntroRight id="header-intro-right" className="relative">
          <HeaderIntroLeft id="header-intro-left" className="absolute w-fit">
            <Heading />
            <div className="mt-4">
              <div className="my-4">
                <Para>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet, quas. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Iure, reiciendis?
                </Para>
              </div>
            </div>
          </HeaderIntroLeft>
          <img src={HeaderImg} className="block" alt="Header" />
        </HeaderIntroRight>
      </div>
    </section>
  );
};

const InPatient = () => {
  return (
    <section id="in-patient-services" className="In-patient p-12">
      <div className="flex">
        <div className="w-4/5">
          <Title
            titleLight="In Patient"
            titleBold="Care Services"
            display="block"
          />
        </div>
        <div className="bg-sukoon text-center text-vxs text-white p-8 w-1/5">
          <p>Sukoon Suicide Helpline</p>
          <h2 className="text-v3xl">1800-234-6789</h2>
        </div>
      </div>
      <div className="flex p-6 justify-between">
        <div className="bg-green-500 h-fit w-2/5 p-8">
          <h2 className="text-vxl">
            Acute Psychiatry Care Intensive Care Unit
          </h2>
          <ul className="mt-2 text-gray-600 leading-loose flex flex-col justify-between text-vlg">
            <li className="">
              Alcohol, Drug, And Habbit De-addiction Programs
            </li>
            <li className="">
              Day-Care Counselling, and Immersive Therapy Programs.
            </li>
            <li className="">
              Off-site IPD Setup At Home Services
            </li>
            <li className="">
              Geriatic Psychiatry age related mental health issues.
            </li>
            <li className="">
              Special Ward for Women Female Staff Only
            </li>
            <li className="">
              Continuity of Treatment Via Virtual Therapy
            </li>
            <li className="">
              All OPD Services are inculcated into the IPD Program.
            </li>
          </ul>
        </div>
        <div className="w-3/5 px-8 ">
          <div className="text-sukoon">
            <ul>
              <li>
                <h2 className="text-v3xl font-bold">
                  Acute Psychiatry Services
                </h2>
                <Para width="100%">
                  Hennepin Healthcare's Acute Psychiatric Services (APS) center
                  serves those in emotional crisis with 24-hour,
                  seven-day-a-week crisis counseling, assessment, and referral.
                </Para>
              </li>
              <li>
                <h2 className="text-v3xl font-bold">Services</h2>
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
              <li>
                <h2 className="text-v3xl font-bold">Our Treatment Team</h2>
                <Para width="100%">
                  Hennepin Healthcare's Acute Psychiatric Services (APS) center
                  serves those in emotional crisis with 24-hour,
                  seven-day-a-week crisis counseling, assessment, and referral.
                </Para>
              </li>
              <li>
                <h2 className="text-v3xl font-bold">Treatment Goals</h2>
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

const OutPatientService = () => {
  return (
    <section id="out-patient-services" className="p-12">
      <div className="flex">
        <div className="w-4/5">
          <Title
            titleLight="Out Patient"
            titleBold="Care Services"
            display="block"
          />
        </div>
        <div className="bg-sukoon text-center text-vxs text-white p-8 w-1/5">
          <p>Sukoon Suicide Helpline</p>
          <h2 className="text-v3xl">1800-234-6789</h2>
        </div>
      </div>
      <div className="flex p-6 justify-between">
        <div className="bg-green-500 h-fit w-2/5 p-8">
          <h2 className="text-vxl">
            Acute Psychiatry Care Intensive Care Unit
          </h2>
          <ul className="mt-2 text-gray-600 leading-loose flex flex-col justify-between text-vlg">
            <li className="">
              Alcohol, Drug, And Habbit De-addiction Programs
            </li>
            <li className="">
              Day-Care Counselling, and Immersive Therapy Programs.
            </li>
            <li className="">
              Off-site IPD Setup At Home Services
            </li>
            <li className="">
              Geriatic Psychiatry age related mental health issues.
            </li>
            <li className="">
              Special Ward for Women Female Staff Only
            </li>
            <li className="">
              Continuity of Treatment Via Virtual Therapy
            </li>
            <li className="">
              All OPD Services are inculcated into the IPD Program.
            </li>
          </ul>
        </div>
        <div className="w-3/5 px-8 ">
          <div className="text-sukoon">
            <ul>
              <li>
                <h2 className="text-v3xl font-bold">
                  Acute Psychiatry Services
                </h2>
                <Para width="100%">
                  Hennepin Healthcare's Acute Psychiatric Services (APS) center
                  serves those in emotional crisis with 24-hour,
                  seven-day-a-week crisis counseling, assessment, and referral.
                </Para>
              </li>
              <li>
                <h2 className="text-v3xl font-bold">Services</h2>
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
              <li>
                <h2 className="text-v3xl font-bold">Our Treatment Team</h2>
                <Para width="100%">
                  Hennepin Healthcare's Acute Psychiatric Services (APS) center
                  serves those in emotional crisis with 24-hour,
                  seven-day-a-week crisis counseling, assessment, and referral.
                </Para>
              </li>
              <li>
                <h2 className="text-v3xl font-bold">Treatment Goals</h2>
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

const CarouselParenWrapper = styled.div`
  text-align: center;
`;

const CarouselImgWrapper = styled.div`
  width: 18vw;
  height: 16vw;
  position: relative;

  > img {
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
  background: rgba(0, 0, 0, 0.31);
`;

const MeetExpertsCarousel = () => {
  const settings = {
    slidesToScroll: true,
    swipe: true,
    arrow: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1rem",
    slidesToShow: 3,
    speed: 500,
    adaptiveHeight: true,
    variableWidth: true
  };

  return (
    <div className="mt-8">
      <Slider {...settings}>
        <CarouselParenWrapper>
          <CarouselImgWrapper className="CarouselImgWrapper">
            <Ovarlay className="ovarlay" />
            <img src={Physician} className="w-auto" alt="Physician" />
          </CarouselImgWrapper>
          <h2 className="mt-2 text-sukoon text-sm font-bold">
            Sandra G. Boodman
          </h2>
          <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
        </CarouselParenWrapper>
        <CarouselParenWrapper>
          <CarouselImgWrapper className="CarouselImgWrapper">
            <Ovarlay className="ovarlay" />
            <img src={Physician} className="w-auto" alt="Physician" />
          </CarouselImgWrapper>
          <h2 className="mt-2 text-sukoon text-sm font-bold">
            Sandra G. Boodman
          </h2>
          <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
        </CarouselParenWrapper>
        <CarouselParenWrapper>
          <CarouselImgWrapper className="CarouselImgWrapper">
            <Ovarlay className="ovarlay" />
            <img src={Physician} className="w-auto" alt="Physician" />
          </CarouselImgWrapper>
          <h2 className="mt-2 text-sukoon text-sm font-bold">
            Sandra G. Boodman
          </h2>
          <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
        </CarouselParenWrapper>
        <CarouselParenWrapper>
          <CarouselImgWrapper className="CarouselImgWrapper">
            <Ovarlay className="ovarlay" />
            <img src={Physician} className="w-auto" alt="Physician" />
          </CarouselImgWrapper>
          <h2 className="mt-2 text-sukoon text-sm font-bold">
            Sandra G. Boodman
          </h2>
          <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
        </CarouselParenWrapper>
        <CarouselParenWrapper>
          <CarouselImgWrapper className="CarouselImgWrapper">
            <Ovarlay className="ovarlay" />
            <img src={Physician} className="w-auto" alt="Physician" />
          </CarouselImgWrapper>
          <h2 className="mt-2 text-sukoon text-sm font-bold">
            Sandra G. Boodman
          </h2>
          <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
        </CarouselParenWrapper>
        <CarouselParenWrapper>
          <CarouselImgWrapper className="CarouselImgWrapper">
            <Ovarlay className="ovarlay" />
            <img src={Physician} className="w-auto opacity-1" alt="Physician" />
          </CarouselImgWrapper>
          <h2 className="mt-2 text-sukoon text-sm font-bold">
            Sandra G. Boodman
          </h2>
          <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
        </CarouselParenWrapper>
      </Slider>
    </div>
  );
};

const MeetExperts = props => {
  return (
    <section id="meet-experts" className="p-6 relative">
      <Title titleLight="Meet" titleBold="Experts" />
      <Para width="100%">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        dignissimos dolore dolorum eos, fuga itaque labore laboriosam libero
        molestiae officiis quibusdam veniam voluptates! Adipisci cum, iusto
        laudantium molestias perferendis qui reprehenderit suscipit ullam! A
        aliquam consectetur nisi non nostrum numquam officiis placeat
      </Para>
      <MeetExpertsCarousel />
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
      <HeaderIntro />
      <InPatient />
      <OutPatientService />
      <MeetExperts />
    </Layout>
  );
}

export default ServicesPage;
