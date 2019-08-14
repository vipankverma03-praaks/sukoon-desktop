import React from "react";
import "../css/style.css";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import styled from "styled-components";
import Para from "../elements/Para";
import Banner from "../components/Banner";
import BookBtn from "../elements/BookNowBtn";

// Images
import HeaderImg from "../images/Desktop-Header/HomeBanner.jpg";
import SukoonBgLogo from "../images/sukoon-bg-logo/logo@2x.jpg";
import SukoonLogo from "../images/sukoon-bg-logo/logo.jpg";
import VirtualFormBg from "../images/internationalpatient/form_bg.png";
import PartnerHotel from "../images/internationalpatient/partner_hotel.png";
import SukoonBullets from "../images/internationalpatient/sukoon_bullet.svg";

import MeetExperts from "../components/MeetExperts";

const Caption = props => {
  return (
    <div className="my-4 pr-4">
      <h2 className="text-sukoon text-2xl font-gilroyBold block">
        {props.subHeading || ""}
      </h2>
      <Para className="py-2 pr-16">{props.para || ""}</Para>
    </div>
  );
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

  @media screen and (max-width: 1600px) and (min-width: 1450px) {
    background-position: top 33vw right -11vw;
  }
  @media screen and (max-width: 1450px) and (min-width: 1370px) {
    background-position: top 27vw right -11vw;
  }
  @media screen and (max-width: 1370px) and (min-width: 1300px) {
    background-position: top 19vw right -11vw;
  }
  @media screen and (min-width: 1200px) and (max-width: 1300px) {
    background-position: top 24vw right -11vw;
  }
`;
const TopIntro = () => {
  return (
    <section id="why-sukoon" className="why-sukoon py-8 px-20">
      <Title subHeading="Explore" titleLight="Plan a" titleBold=" Trip" />
      <div className="flex">
        <Caption
          subHeading="Consult best doctors"
          para=" Get expert advice from our team of experienced doctors, led by Dr. Sameer Parikh"
        />
        <Caption
          subHeading="Get personalised care"
          para="Receive customised and holistic care because of our incredible 1:1 nurse to patient ratio"
        />
        <Caption
          subHeading="Experience premium facilities"
          para="Enhance your recovery in a calming, positive, and comfortable environment "
        />
      </div>
    </section>
  );
};

const MainForm = styled.div`
  background-image: url(${VirtualFormBg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  
  input::placeholder, textarea::placeholder{
    opacity: 1;
    font-family: gilroy-regular;
  }
  
  textarea{
    min-height: 100px;
    max-height: 200px;
    overflow: auto;
  }
`;

const PartnerHotelContent = styled.div`
  background: white;
  padding: 25px;
`;

const PartnerHotelInfo = styled.div`
  min-height: 525px;
  background-image: url(${PartnerHotel});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function InternationalPatient(props) {
  return (
    <Layout logoHighlighter bgImage>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <TopRow>
        <Banner booking discover HeaderImg={HeaderImg} />
        <TopIntro />
      </TopRow>
      <div className="flex px-16">
        <div className="w-3/5 pr-6">
          <section className="" id="InternationalPatientInfo">
            <h2 className="text-sukoon text-3xl font-gilroyBold">
              Facilities For International Patient
            </h2>
            <Para width="100%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus at, deleniti dolor dolorem doloribus ducimus, ex
              excepturi illo illum ipsa quas, quos sapiente totam.
            </Para>
            <ul className="text-xl font-gilroyMedium text-gray-600">
              <li className="mt-6">
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate fuga id nisi.
              </li>
              <li className="mt-2">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate fuga id nisi.
              </li>
              <li className="mt-2">
                3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate fuga id nisi.
              </li>
              <li className="mt-2">
                4. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate fuga id nisi.
              </li>
              <li className="mt-2">
                5. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate fuga id nisi.
              </li>
              <li className="mt-2">
                6. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate fuga id nisi.
              </li>
            </ul>
          </section>
        </div>
        <div className="w-2/5 pl-6">
          <form className="VirtualConsForm">
            <div className="FormHead border-b border-yellow-500 bg-sukoon px-8 py-2">
              <h2 className="text-white text-xl">Free Virtual Consultation</h2>
            </div>
            <MainForm className="px-8 py-4 text-white">
              <input
                className="bg-transparent border-b border-gray-100 w-full py-1 mb-2"
                type="text"
                placeholder="Patient Name"
              />
              <input
                className="bg-transparent border-b border-gray-100 w-full py-1 mb-2"
                type="text"
                placeholder="Age"
              />
              <input
                className="bg-transparent border-b border-gray-100 w-full py-1 mb-2"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="bg-transparent border-b border-gray-100 w-full py-1 mb-2"
                type="text"
                placeholder="Contact No."
              />
              <select
                className="bg-transparent border-b border-gray-100 w-full py-1 mb-2"
                placeholder="Select Your Country"
              >
                <option>Country List</option>
                <option>Country List</option>
                <option>Country List</option>
              </select>
              <select
                className="bg-transparent border-b border-gray-100 w-full py-1 mb-2"
                placeholder="Medical Concern"
              >
                <option>Country List</option>
                <option>Country List</option>
                <option>Country List</option>
              </select>
              <input
                className="bg-transparent border-b border-gray-100 w-full py-1 mb-2"
                type="text"
                placeholder="Upload Your Doc."
              />
              <input
                className="bg-transparent border-b border-gray-100 w-full py-1 mb-2"
                type="text"
                placeholder="Upload Your Medical Pres.."
              />
              <textarea
                className="bg-transparent border-b border-gray-100 w-full py-1 mb-2"
                placeholder="Comments"
              > </textarea>
              <BookBtn theme="green" buttonPadding="5px 10px" wrapperClass="">
                Get An Estimate
              </BookBtn>
            </MainForm>
            <Para>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut hic
              recusandae vero.
            </Para>
          </form>
        </div>
      </div>
      <PartnerHotelInfo className="my-16 p-16 mb-0" id="">
        <PartnerHotelContent className="shadow-lg w-1/3">
          <span className="text-sukoon">Patient Care</span>
          <h2 className="text-sukoon text-2xl font-gilroyBold">
            Partners Hotels / Guest Houses
          </h2>
          <Para width="100%">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            cum dicta facilis, iure mollitia numquam quae quis tenetur voluptate
            voluptatibus! Distinctio minima non pariatur.
          </Para>
        </PartnerHotelContent>
      </PartnerHotelInfo>
      <section className="w-full flex Stats pt-0">
        <div className="Steps mb-5 w-1/3 p-16 bg-paleMintLight">
          <h2 className="text-sukoon font-gilroyBold text-3xl">Process</h2>
          <ul className="mt-2">
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
          </ul>
        </div>
        <div className="Steps mb-5 w-1/3 p-16 bg-paleMintDark">
          <h2 className="text-sukoon font-gilroyBold text-3xl">Checklist</h2>
          <ul className="mt-2">
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
          </ul>
        </div>
        <div className="Steps mb-5 w-1/3 p-16 bg-paleMintLight">
          <h2 className="text-sukoon font-gilroyBold text-3xl">
            Document Needed
          </h2>
          <ul className="mt-2">
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              ipsum dolor sit amet,
            </li>
          </ul>
        </div>
      </section>
      <MFBWrapper>
        <MeetExperts />
      </MFBWrapper>
    </Layout>
  );
}

export default InternationalPatient;
