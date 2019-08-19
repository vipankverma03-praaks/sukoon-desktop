import React  from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import styled from "styled-components";
import Details from "../elements/Details";
import Para from "../elements/Para";
import Banner from "../components/Banner";
import SVG from "../elements/SVG";
import Enquiry from "../elements/BookNowBtn";

// Images
import HeaderImg from "../images/Desktop-Header/HomeBanner.jpg";
import TherapyView from "../images/exp/bg_2.jpg";
import PartyTwo from "../images/iStock-968194620_2019-07-17/work-yoga.png";
import PartyOne from "../images/iStock-968194620_2019-07-17/yoga_for_runners.png";

//SQUARE FEET SECTION
const Feet = () => {
  return (
    <section id="Feet" className="pl-20 py-6">
        <div>
          <Title titleLight="1500" titleBold="Sq.Feet" />
          <h2 className="text-sukoon font-gilroyMedium text-v3xl mt-4">
            Spread Across 6 Floors
          </h2>
          <Para Class="py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Para>
        </div>
    </section>
  );
};

const PreviewCard = styled.div`
    background: white;
    top: 20%;
    right: 50px;
    padding: 50px;
`;

const PreviewNav = styled.div`
    background: white;
    margin: -30px 3rem 0 auto;
    position: relative;
    
    ul li {
        margin-right: 10px;
        margin-left: 10px;
    }
`;


const Preview = (props) =>{

  return(
    <section className="py-6">
      <div className="ExperienceServices w-full">
        <div className="w-full flex relative">
          <div className="w-3/5">
            <img src={TherapyView} className="block object-cover w-full object-center" alt="Header"/>
          </div>
          <div className="w-2/5">
          </div>
          <PreviewCard className="w-2/5 absolute shadow-lg">
            <span className="font-semibold text-lg text-sukoon">OPD</span>
            <h2 className="font-bold text-3xl text-sukoon">Consulting Chambers</h2>
            <Para Class="py-4" width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
            <div className="arrowSection">
              <button className="Circle_btn"><SVG display="inline-block" icon="arrow" width={'20px'} rotate fill={'#969696'} />
              </button>
              <button className="Circle_btn right"><SVG display="inline-block" icon="arrow" width={'20px'} rotate fill={'#969696'} />
              </button>
            </div>
          </PreviewCard>
        </div>
        <PreviewNav className="bg-white relative py-6 mr-12 w-10/12 shadow-lg">
          <ul className="text-xl font-gilroyMedium flex justify-around px-4 uppercase text-sukoon">
            <li className="">Consulting Chambers</li>
            <li className="">Pharmacy</li>
            <li className="">RTMS</li>
            <li className="">VIRTUAL THERAPY ROOM</li>
            <li className="">CAFETERIA</li>
            <li className="">LOUNGE</li>
            <li className="">ART THERAPY</li>
          </ul>
        </PreviewNav>
      </div>
    </section>
  )
};

function InfrastructurePage(props) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Banner inner texture HeaderImg={HeaderImg} />
      <Feet />
      <Preview/>
      <section className="pl-12 py-12">
        <div className="w-full flex">
          <div className="w-2/5 pr-8 flex flex-col justify-between">
            <div>
              <Details open summary="Fitness Studio">
                <Para Class="py-4" width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries</Para>
              </Details>
              <Details summary="Art Studio">
                <Para Class="py-4" width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries</Para>
              </Details>
              <Details summary="Terrace Garden">
                <Para Class="py-4" width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries</Para>
              </Details>
            </div>
            <Enquiry wrapperClass=""><Link to="/">Enquiry</Link></Enquiry>
          </div>
          <div className="w-3/5 flex">
            <img src={PartyTwo} className="block viewOne" alt="Header"/>
            <img src={PartyOne} className="block ViewTwo" alt="Header"/>
          </div>
        </div>
      </section>
      <Preview />
    </Layout>
  );
}

export default InfrastructurePage;
