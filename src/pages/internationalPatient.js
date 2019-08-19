import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import styled from "styled-components";
import Para from "../elements/Para";
import Banner from "../components/Banner";
import BookBtn from "../elements/BookNowBtn";
import PageIntro from "../components/Intro";

// Images
import HeaderImg from "../images/Desktop-Header/HomeBanner.jpg";
import SukoonBgLogo from "../images/sukoon-bg-logo/logo@2x.jpg";
import SukoonLogo from "../images/sukoon-bg-logo/logo.jpg";
import VirtualFormBg from "../images/internationalpatient/form_bg.png";
import PartnerHotel from "../images/internationalpatient/partner_hotel.png";
import SukoonBullets from "../images/internationalpatient/sukoon_bullet.svg";

import MeetExperts from "../components/MeetExperts";
import Input from "../elements/Input";

// Meet Experts and Blog and faq wrapper
const MFBWrapper = styled.section`
  background-image: url(${SukoonBgLogo});
  background-repeat: no-repeat;
  background-position: left -23vw top 16vw;
  background-size: 48vw;
`;

const MainForm = styled.form`
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

const IntroContent = {
  Heading: { titleLight: 'Plan', titleBold: 'Trip'},
  Caption: [
    {
      heading: "Consult best doctors",
      para: "Get expert advice from our team of experienced doctors, led by Dr. Sameer Parikh"
    }, {
      heading: "Get personalised care",
      para: "Receive customised and holistic care because of our incredible 1:1 nurse to patient ratio"
    },
    { heading: "Experience premium facilities", para: "Enhance your recovery in a calming, positive, and comfortable environment" }
  ]
};


function InternationalPatient(props) {

  return (
    <Layout bgImage>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
        <Banner booking inner texture HeaderImg={HeaderImg} />
        <PageIntro content={IntroContent}/>
      <div className="flex px-20 py-8">
        <div className="w-3/5 pr-6">
          <section className="text-v3xl" id="InternationalPatientInfo">
            <h2 className="text-sukoon text-v3xl font-gilroyBold">
              Facilities For International Patient
            </h2>
            <h3 className="py-4 pr-16 text-gray-600 font-gilroyMedium text-vlg block" >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus at, deleniti dolor dolorem doloribus ducimus, ex
              excepturi illo illum ipsa quas, quos sapiente totam.
            </h3>
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
          <MainForm className="px-8 py-6 text-white font-gilroyMedium">
            <div className="bg-transparent pb-4 ">
              <h2 className="text-white text-vxl">Free Virtual Consultation</h2>
            </div>
            <div className="font-gilroyMedium">
              <Input type="name" defaultValue={``} placeholder="Patient Name"/>
              <Input type="name" defaultValue={`Age Name`}/>
              <Input type="name" defaultValue={`Contact Number`}/>
              <Input type="select"/>
              <Input type="select"/>
              <Input type="name" defaultValue={`Comments`} textarea/>
              <BookBtn theme="green" buttonPadding="5px 10px" wrapperClass="">
                Get An Estimate
              </BookBtn>
            </div>
          </MainForm>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut hic
            recusandae vero.
          </Para>
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
