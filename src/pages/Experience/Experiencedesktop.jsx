import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Images
import RoomView from "../../images/exp/room.jpg";
import RoomOne from "../../images/exp/room_2.jpg";
import RoomTwo from "../../images/exp/room_3.jpg";
import RoomThree from "../../images/exp/room_4.jpg";
import RoomFour from "../../images/exp/room_5.jpg";
import PartyOne from "../../images/exp/party.jpg";
import PartyTwo from "../../images/exp/party_2.jpg";
import HighLightTherapy from "../../images/exp/bg.jpg";
import HighLightTherapyTwo from "../../images/exp/bg_3.jpg";
import RoomDining from "../../images/exp/room_dining.jpg";
import RoomSpa from "../../images/exp/room_spa.jpg";
import RoomDiningMain from "../../images/exp/room_dining_main.jpg";
import RoomSpaMain from "../../images/exp/room_spa_main.jpg";
import Breakfast from "../../images/exp/meal_1.jpg";
import Lunch from "../../images/exp/meal_2.jpg";
import Dinner from "../../images/exp/meal_3.jpg";
import HeaderImg from "../../images/Desktop-Header/HomeBanner.jpg";

// Components
import Para from "../../elements/Para/desktop"
import Banner from "../../components/Banner/desktop"
import Category from "../../elements/BookNowBtn/desktop";
import Details from "../../elements/Details/desktop";
import Enquiry from "../../elements/BookNowBtn/desktop";
import Preview from "../../components/Preview/desktop";
import Title from "../../elements/Heading/desktop";

const HighLightExperience = styled.div`
background: url(${HighLightTherapy});   
min-height: 415px;
background-size:cover;
background-position:center center;
display:flex;
align-items: center;
`;
const HighLightExperienceTwo = styled.div`
background: url(${HighLightTherapyTwo});   
min-height: 415px;
background-size:cover;
background-position:top center;
display:flex;
align-items: center;
`;

const ExtraFeatures = styled.div`
background: url(${RoomDining});   
    min-height: 400px;
    background-size: cover;
    background-position: top center;
    padding: 50px;
    display: flex;
    flex-flow: column;
    align-items: center;
    position:relative;
`;
const ExtraFeaturesTwo = styled.div`
background: url(${RoomSpa});   
    min-height: 400px;
    background-size: cover;
    background-position: top center;
    padding: 50px;
    display: flex;
    flex-flow: column;
    align-items: center;
    position:relative;
`;
const ExtraExperienceDetail = styled.div`
    background: white;
    padding: 25px;
    position: absolute;
    width: 50%;
    left: 0;
    bottom: 0;`
;
const MealCard = styled.div`
padding:25px;
border:1px solid #969696;
background:white;
`;
const MenuItems = styled.div`
`;


const RoomFeatures = styled.ul`
  
  li{
    width: 25%;
    margin-bottom: 4px;
  }
`;

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

const RoomIntro = ({room}) =>{

  let amenities = room.amenities.map((amenity)=>{
    return(
      <li>{amenity}</li>
    )
  });

  return(
    <div className="">
      <span className="block text-2xl font-gilroySemiBold">Rooms</span>
      <h3 className="text-4xl text-sukoon my-2 font-gilroyBold">{room.type}</h3>
      <Para width="100%">
        {room.description}
      </Para>
      <RoomFeatures className="font-gilroyMedium flex flex-wrap my-8">
        {amenities}
      </RoomFeatures>
      <div className="roomImg">
        <ul className="">
          <li><a><img src={RoomOne} className="block" alt=""/></a></li>
          <li><a><img src={RoomTwo} className="block" alt=""/></a></li>
          <li><a><img src={RoomThree} className="block" alt=""/></a></li>
          <li><a><img src={RoomFour} className="block" alt=""/></a></li>
        </ul>
      </div>
    </div>
  )
};

// Main component
function ExperiencePage() {

  const[activeCategory, setCategory] = useState('deluxe rooms');
  const[data, setData] = useState(Rooms.deluxeRoom);

  const setView = (view , data) =>{
    setCategory(view);
    setData(data);
  };

  return (
      <>
      <Banner inner bannerPara={`Your health and happiness are our top priorities. We ensure this with the best doctors and nurses, world-class
        treatments, premium facilities, and modern amenities. All our rooms are designed in accordance with the American
        Psychiatric Association(APA) standards. Our center has ample natural light, lush green outdoor spaces, and
        spacious activity areas to enhance your recovery. Don’t just stay, live here!`} texture captionLight={`Comfort meets`} captionBold={`Exceptional care`} HeaderImg={HeaderImg}/>
      <section className="py-12 px-20">
        <div className="">
          <Title titleLight="Experience" titleBold="Sukoon" />
          <h3 className="text-3xl font-gilroyBold  mt-4 text-sukoon">Rooms</h3>
          <Para width="100%" Class="my-4">At Sukoon, each residential room is thoughtfully designed to aid in your recovery. Sophisticated details such as wooden flooring and lounge seating create a residential comfort, while modern bath amenities and private balconies invite patients to relax.
          </Para>
        </div>
        <div className="w-full flex mt-10">
          <div className="w-2/5">
            <img src={RoomView} className="block min-h-full" alt=""/>
          </div>
          <div className="w-3/5 pl-10 flex flex-col justify-between">
            <ul className="RoomBtnTab mb-10">
              <Category transparent={activeCategory !== 'deluxe rooms'} arguments={['deluxe rooms', Rooms.deluxeRoom]} clickFn={setView}>Deluxe Rooms</Category>
              <Category transparent={activeCategory !== 'suite rooms'} arguments={['suite rooms', Rooms.suiteRoom]} clickFn={setView}>Suite Rooms</Category>
              <Category transparent={activeCategory !== 'intensive care unit'} arguments={['intensive care unit', Rooms.icuRoom]} clickFn={setView}>Intensive Care Unit</Category>
            </ul>
            <RoomIntro room={data}/>
          </div>
        </div>
      </section>
      <section className="py-12 px-20">
        <div className="w-full flex">
          <div className="w-2/5 pr-8 flex flex-col justify-between ActivityInfo">
            <div>
              <span className="block text-2xl">Spacious Activity Areas</span>
              <Details open padding="10px 0" summary="Resident Lounges">
                <Para Class="py-4" width="100%">At Sukoon, every floor has a modern resident lounge that comprises of a
                  dining area, movie lounge, and board game tables. These versatile spaces are also used for art-based
                  therapy, wellness classes, and group therapy.
                </Para>
              </Details>
              <Details padding="10px 0" summary="Nursing Stations">
                <Para Class="py-4" width="100%">At Sukoon, every floor has a dedicated nursing station that is staffed round the clock. They have all the necessary medication, equipment, and technology to handle each and every emergency situation.
                </Para>
              </Details>
              <Details padding="10px 0" summary="Fitness Studio">
                <Para Class="py-4" width="100%">Our physical therapist have designed effective fitness classes that help you recover both physically and mentally. Make use of a world-class fitness studio that overlooks a terrace garden.
                </Para>
              </Details>
              <Details padding="10px 0" summary="Terrace Garden">
                <Para Class="py-4" width="100%">Being surrounded by nature reduces stress, and increases positive emotions. At Sukoon, you can unwind and rejuvenate  in our terrace garden that is lush-green, spacious, and secure.
                </Para>
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
      <section>
        <HighLightExperience className="my-8 p-8">
          <div className="HighlightSecInfo shadow-xl">
            <Title headingClass={`text-3xl`} titleLight={`One nurse for every patient`}/>
            <Para width="100%">Our promise of holistic care is delivered via an unmatched nurse to patient ratio. At Sukoon, you and your loves ones are given individual attention for a speedy recovery
            </Para>
          </div>
        </HighLightExperience>
      </section>
      <Preview />
      <section>
        <HighLightExperienceTwo className="my-8 p-8">
          <div className="HighlightSecInfo shadow-xl">
            <span className="font-semibold text-lg text-sukoon">Patient Care</span>
            <h2 className="font-bold text-3xl text-sukoon">Daily doctor consults</h2>
            <Para width="100%">Depending on your needs our psychiatrists, psychologists, counsellors, and therapists will ensure that you receive personalised medical care via daily individual attention.</Para>
          </div>
        </HighLightExperienceTwo>
      </section>
      <section className="extraExperience my-8">
        <div className="w-full flex">
          <ExtraFeatures className="w-2/4">
            <div className="ClearView shadow-2xl"><img src={RoomDiningMain} className="block" alt="Header"/></div>
            <ExtraExperienceDetail className="">
              <h2 className="font-bold text-3xl text-sukoon mb-1">In room Dining</h2>
              <para width="100%">Indulge in some freshly prepared food whenever your heart desires. Our room service menu consists of both Indian and Continental dishes.</para>
            </ExtraExperienceDetail>
          </ExtraFeatures>
          <ExtraFeaturesTwo className="w-2/4">
            <div className="ClearView shadow-2xl"><img src={RoomSpaMain} className="block" alt="Header"/></div>
            <ExtraExperienceDetail className="">
              <h2 className="font-bold text-3xl text-sukoon mb-1">In Room Spa</h2>
              <para width="100%">Our licensed massage therapists  are there to help you relax anytime in the comfort of your own room.  Chose from a variety of spa services.</para>
            </ExtraExperienceDetail>
          </ExtraFeaturesTwo>
        </div>
      </section>
      <section className="p-8" id="mealSection">
        <Title  headingClass={``} titleLight={`Delicious Meals`} subHeading={`Meal`} titleBold={``}/>
        <div className="mealSection w-full flex">
          <div className="w-1/3 p-12 px-8">
            <MealCard className="">
              <div className="mealDetail">
                <img src={Breakfast} className="block" alt=""/>
                <h3 className="font-medium text-xl text-sukoon mb-1 mt-5">Breakfast Plan</h3>
                <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Para>
              </div>
            </MealCard>
          </div>
          <div className="w-1/3 p-12 px-8">
            <MealCard className="">
              <div className="mealDetail">
                <img src={Lunch} className="block" alt=""/>
                <h3 className="font-medium text-xl text-sukoon mb-1 mt-5">Lunch Plan</h3>
                <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Para>
              </div>
            </MealCard>
          </div>
          <div className="w-1/3 p-12 px-8">
            <MealCard className="">
              <div className="mealDetail">
                <img src={Dinner} className="block" alt=""/>
                <h3 className="font-medium text-xl text-sukoon mb-1 mt-5">Dinner Plan</h3>
                <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Para>
              </div>
            </MealCard>
          </div>
        </div>
      </section>
        </>
  );
}

export default ExperiencePage;

