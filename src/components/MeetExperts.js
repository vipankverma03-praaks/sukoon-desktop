import styled from "styled-components";
import Slider from "react-slick/lib";
import Physician from "../images/physician_retail_web_2019-07-29/physician_retail_web@3x.jpg";
import Title from "../elements/Heading";
import Para from "../elements/Para";
import React from "react";

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
      <Title subHeading="About" titleLight="Our" titleBold="Doctors" />
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

export default MeetExperts;