import React  from "react";
import { Link } from "gatsby";

// Components
import Title from "../../elements/Heading/desktop";
import Details from "../../elements/Details/desktop";
import Para from "../../elements/Para/desktop";
import Banner from "../../components/Banner/desktop";
import Enquiry from "../../elements/BookNowBtn/desktop";
import Preview from "../../components/Preview/desktop";

// Images
import HeaderImg from "../../images/Desktop-Header/HomeBanner.jpg";
import PartyTwo from "../../images/iStock-968194620_2019-07-17/work-yoga.png";
import PartyOne from "../../images/iStock-968194620_2019-07-17/yoga_for_runners.png";

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

function InfrastructurePage(props) {
  return (
    <>
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
    </>
  );
}

export default InfrastructurePage;
