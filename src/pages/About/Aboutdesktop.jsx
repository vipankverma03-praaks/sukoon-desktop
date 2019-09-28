import React from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop"
import Banner from "../../components/Banner/desktop";

// Images
import BannerBg from "../../images/Desktop-Header/pacientes-mejora.png";

const ServiceType = styled.div`
`;

const InfoSection = (props) =>{

  return(
    <div className={`${props.wrapperClass || ''}`}>
      <h2 className="text-2xl text-left text-sukoon leading-none my-2">{props.title}</h2>
      <Para>{props.content}</Para>
    </div>
  )
};

const CareService = (props) =>{

  return(
    <section id={props.titleLight} className="py-12 px-20">
      <Title titleLight={props.titleLight} titleBold={props.titleBold} display="inline-block"/>
      <Para>Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
        crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than
        42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services
        staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by
        Hennepin County funds and state grants, provides these services to any person in need. Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
        crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than
        42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services
        staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by
        Hennepin County funds and state grants, provides these services to any person in need.</Para>
      <div className="flex flex-wrap">
        <ServiceType className="service_content mt-2 text-justify">
          <InfoSection title="Our Mission" content="Provide world-class psychiatric care, and mental health treatments with compassion, personalisation, and sincerity"/>
          <InfoSection title="Our Vision" content="To be the largest network of psychiatric hospitals, mental health facilities, deaddiction centers in India"/>
          {/*<InfoSection content="Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional*/}
          {/*              crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than*/}
          {/*              42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services*/}
          {/*              staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by*/}
          {/*              Hennepin County funds and state grants, provides these services to any person in need."/>*/}
        </ServiceType>
      </div>
    </section>
  )
};

function DesktopAbout() {
  return (
    <>
      <Banner captionLight={`Get Care`} captionBold={`Without compromise`}  inner texture HeaderImg={BannerBg}/>
      <CareService titleLight="About" titleBold=" Sukoon"/>
      </>
  );
}

export default DesktopAbout;
