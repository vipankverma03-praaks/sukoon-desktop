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
    <section id="Feet" className="pl-20 py-12">
        <div>
          <Title titleLight="1500" titleBold="Sq.Feet" />
          <h2 className="text-sukoon text-2xl mt-8">
            Spread Across 6 Floors
          </h2>
          <Para>
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

const ExperienceServicesDetails = styled.div`
    background: white;
    top: 20%;
    right: 50px;
    padding: 50px;
`;

function InfrastructurePage(props) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Banner inner texture HeaderImg={HeaderImg} />
      <Feet />
      <section className="my-8">
        <div className="ExperienceServices w-full">
          <div className="w-full flex relative">
            <div className="w-3/5">
              <img src={TherapyView} className="block object-cover w-full object-center" alt="Header"/>
            </div>
            <div className="w-2/5">
            </div>
            <ExperienceServicesDetails className="w-2/5 absolute shadow-lg">
              <span className="font-semibold text-lg text-sukoon">OPD</span>
              <h2 className="font-bold text-3xl text-sukoon">Consulting Chambers</h2>
              <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
              <div className="arrowSection">
                <button className="Circle_btn"><SVG display="inline-block" icon="arrow" width={'20px'} rotate fill={'#969696'} />
                </button>
                <button className="Circle_btn right"><SVG display="inline-block" icon="arrow" width={'20px'} rotate fill={'#969696'} />
                </button>
              </div>
            </ExperienceServicesDetails>
          </div>
          <div className="ExperienceServicesNav w-10/12 shadow-lg">
            <ul>
              <li className="font-medium text-base text-sukoon">Consulting Chambers</li>
              <li className="font-medium text-base text-sukoon">Pharmacy</li>
              <li className="font-medium text-base text-sukoon">RTMS</li>
              <li className="font-medium text-base text-sukoon">VIRTUAL THERAPY ROOM</li>
              <li className="font-medium text-base text-sukoon">CAFETERIA</li>
              <li className="font-medium text-base text-sukoon">LOUNGE</li>
              <li className="font-medium text-base text-sukoon">ART THERAPY</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="p-8">
        <div className="w-full flex">
          <div className="w-2/5 pr-8 flex flex-col justify-between">
            <div>
              <Details open summary="Fitness Studio">
                <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries</Para>
              </Details>
              <Details summary="Art Studio">
                <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries</Para>
              </Details>
              <Details summary="Terrace Garden">
                <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries</Para>
              </Details>
            </div>
            <Enquiry wrapperClass="float-right"><Link to="/">Enquiry</Link></Enquiry>
          </div>
          <div className="w-3/5 flex">
            <img src={PartyTwo} className="block viewOne" alt="Header"/>
            <img src={PartyOne} className="block ViewTwo" alt="Header"/>
          </div>
        </div>
      </section>
      <section className="my-8">
        <div className="ExperienceServices w-full">
          <div className="w-full flex relative">
            <div className="w-3/5">
              <img src={TherapyView} className="block object-cover w-full object-center" alt="Header"/>
            </div>
            <div className="w-2/5">
            </div>
            <ExperienceServicesDetails className="w-2/5 absolute shadow-lg">
              <span className="font-semibold text-lg text-sukoon">IPD</span>
              <h2 className="font-bold text-3xl text-sukoon">Movie Lounge</h2>
              <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
              <div className="arrowSection">
                <button className="Circle_btn"><SVG display="inline-block" icon="arrow" width={'20px'} rotate fill={'#969696'} />
                </button>
                <button className="Circle_btn right"><SVG display="inline-block" icon="arrow" width={'20px'} rotate fill={'#969696'} />
                </button>
              </div>
            </ExperienceServicesDetails>
          </div>
          <div className="ExperienceServicesNav w-10/12 shadow-lg">
            <ul>
              <li className="font-medium text-base text-sukoon">Rooms</li>
              <li className="font-medium text-base text-sukoon">Intensive Care Unit</li>
              <li className="font-medium text-base text-sukoon">Dining</li>
              <li className="font-medium text-base text-sukoon">Movie Lounge</li>
              <li className="font-medium text-base text-sukoon">Nursing Station</li>
              <li className="font-medium text-base text-sukoon">Activity Area</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default InfrastructurePage;
