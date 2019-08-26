import React, { useState } from "react";
import "../css/style.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";

// Images
import RoomView from "../images/exp/room.jpg";
import RoomOne from "../images/exp/room_2.jpg";
import RoomTwo from "../images/exp/room_3.jpg";
import RoomThree from "../images/exp/room_4.jpg";
import RoomFour from "../images/exp/room_5.jpg";
import PartyOne from "../images/exp/party.jpg";
import PartyTwo from "../images/exp/party_2.jpg";
import HighLightTherapy from "../images/exp/bg.jpg";
import HighLightTherapyTwo from "../images/exp/bg_3.jpg";
import RoomDining from "../images/exp/room_dining.jpg";
import RoomSpa from "../images/exp/room_spa.jpg";
import RoomDiningMain from "../images/exp/room_dining_main.jpg";
import RoomSpaMain from "../images/exp/room_spa_main.jpg";
import Breakfast from "../images/exp/meal_1.jpg";
import Lunch from "../images/exp/meal_2.jpg";
import Dinner from "../images/exp/meal_3.jpg";
import HeaderImg from "../images/Desktop-Header/HomeBanner.jpg";

// Components
import Para from "../elements/Para"
import styled from "styled-components";
import Banner from "../components/Banner"
import Category from "../elements/BookNowBtn";
import Details from "../elements/Details";
import Enquiry from "../elements/BookNowBtn";
import { Link } from "gatsby";
import Preview from "../components/Preview";

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
    suiteRoom: {
        type: 'suite room',
        description: 'lorem ipsum is just a dummy text',
        amenities:['wifi','tv','Elevator','Power Backup','Kitchen','AC','Geyser','Wheel Chair','Single Bed','Room Heater' ,'Bath Tub'],
        previewImages: [RoomOne, RoomTwo, RoomThree, RoomFour],
        preview: RoomOne,
    },
    deluxeRoom: {
        type: 'deluxe room',
        description: 'lorem ipsum is just a dummy text',
        amenities:['wifi','tv','Elevator','Power Backup','Kitchen','AC','Geyser','Wheel Chair','Single Bed','Room Heater' ,'Bath Tub'],
        previewImages: [RoomOne, RoomTwo, RoomThree, RoomFour],
        preview: RoomOne,
    },
    icuRoom: {
        type: 'Intensive Care Unit',
        description: 'lorem ipsum is just a dummy text',
        amenities:['wifi','tv','Elevator','Power Backup','Kitchen','AC','Geyser','Wheel Chair','Single Bed','Room Heater' ,'Bath Tub'],
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

    const[activeCategory, setCategory] = useState('suite rooms');
    const[data, setData] = useState(Rooms.suiteRoom);

    const setView = (view , data) =>{
        setCategory(view);
        setData(data);
    };

    return (
        <Layout>
            <SEO
                title="Experience"
                keywords={[`sukoon`, `hospital`, `psychiatry center`, `service`]}
            />
            <Banner inner texture HeaderImg={HeaderImg}/>
            <section className="py-12 px-20">
                <div className="">
                    <Title titleLight="Experience" titleBold="Sukoon" />
                    <h3 className="text-3xl font-gilroyBold  mt-4 text-sukoon">Let's Take a Tour</h3>
                    <Para width="100%" Class="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Para>
                </div>
                <div className="w-full flex mt-10">
                    <div className="w-2/5">
                        <img src={RoomView} className="block min-h-full" alt=""/>
                    </div>
                    <div className="w-3/5 pl-10 flex flex-col justify-between">
                        <ul className="RoomBtnTab mb-10">
                            <Category transparent={activeCategory !== 'suite rooms'} arguments={['suite rooms', Rooms.suiteRoom]} clickFn={setView}>Suite Rooms</Category>
                            <Category transparent={activeCategory !== 'deluxe rooms'} arguments={['deluxe rooms', Rooms.deluxeRoom]} clickFn={setView}>Deluxe Rooms</Category>
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
                        <span className="block text-2xl">Activity Per Floor</span>
                            <Details open padding="10px 0" summary="Lounge">
                                <Para Class="py-4" width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                                    centuries</Para>
                            </Details>
                            <Details padding="10px 0" summary="Nursing Station">
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
            <section>
                <HighLightExperience className="my-8 p-8">
                    <div className="HighlightSecInfo shadow-xl">
                    <span className="font-semibold text-lg text-sukoon">Nurse To Paitent Ratio</span>
                    <h2 className="font-bold text-3xl text-sukoon">1:1 (One Person One Nurse)</h2>
                    <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Para>
                    </div>
                </HighLightExperience>
            </section>
            <Preview />
            <section>
                <HighLightExperienceTwo className="my-8 p-8">
                    <div className="HighlightSecInfo shadow-xl">
                        <span className="font-semibold text-lg text-sukoon">Patient Care</span>
                        <h2 className="font-bold text-3xl text-sukoon">Doctor Visit Twice Daily</h2>
                        <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Para>
                    </div>
                </HighLightExperienceTwo>
            </section>
            <section className="extraExperience my-8">
                <div className="w-full flex">
                    <ExtraFeatures className="w-2/4">
                        <div className="ClearView shadow-2xl"><img src={RoomDiningMain} className="block" alt="Header"/></div>
                        <ExtraExperienceDetail className="">
                            <h2 className="font-bold text-3xl text-sukoon mb-1">Room Dining</h2>
                            <para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</para>
                        </ExtraExperienceDetail>
                    </ExtraFeatures>
                    <ExtraFeaturesTwo className="w-2/4">
                        <div className="ClearView shadow-2xl"><img src={RoomSpaMain} className="block" alt="Header"/></div>
                        <ExtraExperienceDetail className="">
                            <h2 className="font-bold text-3xl text-sukoon mb-1">Room Spa</h2>
                            <para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</para>
                        </ExtraExperienceDetail>
                    </ExtraFeaturesTwo>
                </div>
            </section>
            <section className="p-8" id="mealSection">
                <span className="font-semibold text-lg text-sukoon">Meal</span>
                <h2 className="font-bold text-3xl text-sukoon mb-1">Catered Meal (3 Times a Day)</h2>
                <div className="mealSection w-full flex">
                    <div className="w-1/3 p-12 px-8">
                        <MealCard className="">
                            <div className="mealDetail">
                                <img src={Breakfast} className="block" alt=""/>
                                <h3 className="font-medium text-xl text-sukoon mb-1 mt-5">Breakfast Plan</h3>
                                <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Para>
                            </div>
                        </MealCard>
                        <MenuItems className="py-5">
                            <h4 className="font-medium text-lg text-sukoon">Menu Items</h4>
                            <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
                        </MenuItems>
                    </div>
                    <div className="w-1/3 p-12 px-8">
                        <MealCard className="">
                            <div className="mealDetail">
                                <img src={Lunch} className="block" alt=""/>
                                <h3 className="font-medium text-xl text-sukoon mb-1 mt-5">Lunch Plan</h3>
                                <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Para>
                            </div>
                        </MealCard>
                        <MenuItems className="py-5">
                            <h4 className="font-medium text-lg text-sukoon">Menu Items</h4>
                            <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
                        </MenuItems>
                    </div>
                    <div className="w-1/3 p-12 px-8">
                        <MealCard className="">
                            <div className="mealDetail">
                                <img src={Dinner} className="block" alt=""/>
                                <h3 className="font-medium text-xl text-sukoon mb-1 mt-5">Dinner Plan</h3>
                                <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Para>
                            </div>
                        </MealCard>
                        <MenuItems className="py-5">
                            <h4 className="font-medium text-lg text-sukoon">Menu Items</h4>
                            <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
                        </MenuItems>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ExperiencePage;

