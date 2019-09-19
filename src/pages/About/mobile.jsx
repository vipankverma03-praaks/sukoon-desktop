import React, {useState} from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile"
import Banner from "../../components/Banner/mobile";

// Images
import BannerBg from "../../images/servicesBg.png";

const ServiceType = styled.div`
`;

const InfoSection = (props) =>{

  return(
    <div className={`${props.wrapperClass || ''}`}>
      <h3 className="text-2xl text-left text-sukoon leading-none mt-4 font-gilroyMedium">{props.title}</h3>
      <Para>{props.content}</Para>
    </div>
  )
};

const CareService = (props) =>{

  return(
    <section id={props.titleLight} className="p-4">
      <Title titleLight={props.titleLight} titleBold={props.titleBold} display="inline-block"/>
      <div className="flex flex-wrap overflow-x-hidden ">
        <ServiceType className="service_content overflow-x-hidden text-justify">
          <InfoSection content="Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
                        crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than
                        42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services
                        staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by
                        Hennepin County funds and state grants, provides these services to any person in need. Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
                        crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than
                        42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services
                        staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by
                        Hennepin County funds and state grants, provides these services to any person in need." />
          <InfoSection title="Our Mission" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                        veritatis."/>
          <InfoSection title="Our Vision" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                        veritatis."/>
          <InfoSection content="Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
                        crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than
                        42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services
                        staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by
                        Hennepin County funds and state grants, provides these services to any person in need."/>
        </ServiceType>
      </div>
    </section>
  )
};

function AboutPage(props) {

  return (
    <>
      <Banner overlay={props.overlay} backgroundImg={BannerBg}/>
      <CareService titleLight="About" titleBold=" Sukoon"/>
    </>
  );
}

export default AboutPage;
