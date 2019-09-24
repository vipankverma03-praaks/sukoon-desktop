import React, {useState} from "react";
import styled from "styled-components";

// Components
import Para from "../../elements/Para/mobile";
import Title from "../../elements/Heading/mobile";
import BookBtn from "../../elements/BookNowBtn/mobile";
import Banner from "../../components/Banner/mobile";
import Details from "../../elements/Details/mobile";

// Images
import RoomImg from "../../images/exp/room.jpg";
import FloorAct from "../../images/exp/party.jpg";
import Therapy from "../../images/exp/bg_2.jpg";
import Highlight from "../../images/exp/bg.jpg";
import FacOneBg from "../../images/exp/room_dining.jpg";
import FacOneBgSec from "../../images/exp/room_spa.jpg";
import HighlightSecond from "../../images/exp/bg_3.jpg";
import BannerBg from "../../images/servicesBg.png";
import RoomOne from "../../images/exp/room_2.jpg";
import RoomTwo from "../../images/exp/room_3.jpg";
import RoomThree from "../../images/exp/room_4.jpg";
import RoomFour from "../../images/exp/room_5.jpg";

const HighlightSection = styled.div(props=>{


  return`
        background-size: cover;
        background-image: url(${props.BgImg});
        background-position: center center;
        background-repeat: no-repeat;
        
        .highlight {
        background: white;
        margin-top: 75px;
        margin-bottom: -65px;
        padding: 25px;
        box-shadow: 0px 6px 10px #00000024;
        }
        .highlight span {
            font-size: 3.8vw;
            font-weight: 600;
        }
    `
});

const Face = styled.div(props=>{

  return`
    height:225px;
    background: url('${props.Img}') center center;
    background-size:cover
    `
});

const Rooms = {
  deluxeRoom: {
    type: 'Deluxe room',
    description: 'lorem ipsum is just a dummy text',
    amenities:['Queen Bed','Smart TV (45”)','Private Balcony','AC & Heater','Mini Fridge','Spacious Closet','Lounge Seating','Writing Desk','Geyser','Wifi'],
    previewImages: [RoomOne, RoomTwo, RoomThree, RoomFour],
    preview: RoomOne,
  },
  suiteRoom: {
    type: 'suite room',
    description: 'lorem ipsum is just a dummy text',
    amenities:['Queen Bed','Food Pantry','Smart TV (55”)','Private Balcony','Outdoor Seating','AC & Heater','Mini Fridge','Spacious Closet','Lounge Seating','Writing Desk' ,'Wifi','Geyser'],
    previewImages: [RoomOne, RoomTwo, RoomThree, RoomFour],
    preview: RoomOne,
  },
  icuRoom: {
    type: 'Intensive Care Unit',
    description: 'lorem ipsum is just a dummy text',
    amenities:['24*7 Doctor','Dedicated Nurse','Soft-touch Walls','Padded Furniture','Personalised Meals','Queen Bed','Private Balcony','AC & Heater','Spacious Closet','Luggage Rack'],
    previewImages: [RoomOne, RoomTwo, RoomThree, RoomFour],
    preview: RoomOne,
  },
};

const Content = (Room) =>{
  return(
    <div className="">
      <img className="mt-3 mb-4" src={RoomImg} alt=""/>
      <span>Rooms</span>
      <h3 className="mt-2 mb-1">{Room.type}</h3>
      <Para>{Room.description}</Para>
      <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
        <ul className="roomFeatures flex overflow-x-scroll w-full">
          {Room.amenities.map((amenity) => {
            return <li className="mr-3 mt-3 mb-3 ">{amenity}</li>
          })}
        </ul>
      </div>
    </div>
  )
};

function Experience(props) {

  return (
    <>
      <Banner captionLight={`Comfort meets`} bannerPara={`Your health and happiness are our top priorities. We ensure this with the best doctors and nurses, world-class
        treatments, premium facilities, and modern amenities. All our rooms are designed in accordance with the American
        Psychiatric Association(APA) standards. Our center has ample natural light, lush green outdoor spaces, and
        spacious activity areas to enhance your recovery. Don’t just stay, live here!`} captionBold={`Exceptional care`} overlay={props.overlay} backgroundImg={BannerBg}/>
      <section className="p-4">
        <Title subHeading="Tour" titleLight="Experience " titleBold="Sukoon" />
        <h3 className="mt-3 mb-1 text-sukoon font-gilroyMedium font-normal">Rooms</h3>
        <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
          <Para>At Sukoon, each residential room is thoughtfully designed to aid in your recovery. Sophisticated details such as wooden flooring and lounge seating create a residential comfort, while modern bath amenities and private balconies invite patients to relax.</Para>
        </div>
      </section>
      <section className="facilities Exp px-5 my-1">
        <Details  open content={Content} arguments={Rooms.suiteRoom} border summaryClass="border-gray-700" summaryTextClass="text-xl" summary="Suite Room"/>
        <Details  content={Content} arguments={Rooms.deluxeRoom}border summaryClass="border-gray-700" summaryTextClass="text-xl" summary="Deluxe Room"/>
        <Details content={Content} arguments={Rooms.icuRoom} border summaryClass="border-gray-700" summaryTextClass="text-xl" summary="Intensive  Care Unit"/>
      </section>
      <div className="facilities Perfloor px-5 my-5">
        <span className="facilities  mb-2 block">Activity Per Floor</span>
        <Details padding="0" open  summaryClass="border-gray-700"  summary="Resident Lounges">
          <div className="">
            <img className="mt-3 mb-4" src={FloorAct} alt=""/>
            <Para>At Sukoon, every floor has a modern resident lounge that comprises of a
              dining area, movie lounge, and board game tables. These versatile spaces are also used for art-based
              therapy, wellness classes, and group therapy.
            </Para>
          </div>
        </Details>
        <Details padding="0" open  summaryClass="border-gray-700"  summary="Nursing Stations">
          <div className="">
            <img className="mt-3 mb-4" src={FloorAct} alt=""/>
            <Para>At Sukoon, every floor has a dedicated nursing station that is staffed round the clock. They have all the necessary medication, equipment, and technology to handle each and every emergency situation.
            </Para>
          </div>
        </Details>
        <Details padding="0" open  summaryClass="border-gray-700"  summary="Fitness Studio">
          <div className="">
            <img className="mt-3 mb-4" src={FloorAct} alt=""/>
            <Para>Our physical therapist have designed effective fitness classes that help you recover both physically and mentally. Make use of a world-class fitness studio that overlooks a terrace garden.
            </Para>
          </div>
        </Details>
        <Details padding="0" open  summaryClass="border-gray-700"  summary="Terrace Garden">
          <div className="">
            <img className="mt-3 mb-4" src={FloorAct} alt=""/>
            <Para>Being surrounded by nature reduces stress, and increases positive emotions. At Sukoon, you can unwind and rejuvenate  in our terrace garden that is lush-green, spacious, and secure.
            </Para>
          </div>
        </Details>
        <BookBtn border wrapperClass="float-right">
          Enquiry
        </BookBtn>
      </div>
      <HighlightSection BgImg={Highlight} className="highlightSection px-5 py-5 mt-5">
        <div className="highlight">
          <span className="text-sukoon">Nurse To Patient Ratio</span>
          <h2 className="mb-2">One nurse for every patient</h2>
          <Para>Our promise of holistic care is delivered via an unmatched nurse to patient ratio. At Sukoon, you and your loves ones are given individual attention for a speedy recovery</Para>
        </div>
      </HighlightSection>
      <div className="px-5 my-5 mt-20">
        <span>ClinicaL Programs</span>
        <div className="">
          <h2 className="text-left text-sukoon leading-none">Fitness Therapy</h2>
          <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
            <ul className="patient_services_nav flex overflow-x-scroll">
              <li className="mr-3 mt-3">
                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Consulting Chambers</button>
              </li>
              <li className="mr-3 mt-3">
                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Pharmacy</button>
              </li>
              <li className="mr-3 mt-3">
                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">rTMs</button>
              </li>
              <li className="mr-3 mt-3">
                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Video Consultation</button>
              </li>
              <li className="mr-3 mt-3">
                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Cafetaria</button>
              </li>
              <li className="mr-3 mt-3">
                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Waiting Area</button>
              </li>
              <li className="mr-3 mt-3">
                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Art Therapy</button>
              </li>
            </ul>
          </div>
          <img className="mt-3 mb-4" src={Therapy} alt=""/>
          <Para>Speak with your doctor in a private and comfortable environment. With sophisticated details such as wooden floors and lounge seating, our chambers are designed to have a calming effect.</Para>
        </div>
      </div>
      <HighlightSection BgImg={HighlightSecond} className="highlightSection second px-5 py-5 mt-5 mb-24">
        <div className="highlight">
          <span className="text-sukoon ">Patient Care</span>
          <h2 className="mb-2">Daily doctor consults</h2>
          <Para>Depending on your needs our psychiatrists, psychologists, counsellors, and therapists will ensure that you receive personalised medical care via daily individual attention.</Para>
        </div>
      </HighlightSection>
      <div className="extra_facilities">
        <div className="facOneSec relative z-10">
          <Face Img={FacOneBg} className="w-full" />
          <div className="details">
            <h2 className="text-sukoon">In Room Dining</h2>
            <Para>Indulge in some freshly prepared food whenever your heart desires. Our room service menu consists of both Indian and Continental dishes to satisfy all your cravings.</Para>
          </div>
        </div>
        <div className="facSecSec relative">
          <Face Img={FacOneBgSec} className="w-full" />
          <div className="details">
            <h2 className="text-sukoon">In Room Spa</h2>
            <Para>Our licensed massage therapists  are there to help you relax anytime in the comfort of your own room.  Chose from a variety of spa services.</Para>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
