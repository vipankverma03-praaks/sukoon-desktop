import React from "react";
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
import TherapyView from "../images/exp/bg_2.jpg";
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
import SVG from "../elements/SVG";

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
const ExperienceServicesDetails = styled.div`
    background: white;
    top: 20%;
    right: 50px;
    padding: 50px;
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



function ExperiencePage() {
    return (
        <Layout>
            <SEO
                title="Experience"
                keywords={[`sukoon`, `hospital`, `psychiatry center`, `service`]}
            />
            <Banner HeaderImg={HeaderImg}/>
            <section className="p-8">
                <div className="">
                    <Title titleLight="Experience" titleBold="Sukoon" />
                    <h3 className="text-xl font-semibold text-sukoon">Let's Take a Tour</h3>
                    <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Para>
                </div>
                <div className="w-full flex mt-10">
                    <div className="w-2/5">
                        <img src={RoomView} className="block min-h-full" alt=""/>
                    </div>
                    <div className="w-3/5 pl-10 flex flex-col justify-evenly">
                        <ul className="RoomBtnTab mb-10">
                            <li className="mr-4"><button className="globe_btn"><a>Suite Rooms</a></button></li>
                            <li className="mr-4"><button className="globe_btn"><a>Deluxe Rooms</a></button></li>
                            <li><button className="globe_btn"><a>Intensive Care Unit</a></button></li>
                        </ul>
                        <div className="">
                            <span className="block text-2xl">Rooms</span>
                            <h3 className="text-4xl text-sukoon font-bold">Suite Rooms</h3>
                            <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
                            <ul className="RoomFeatures">
                                <li>Wifi</li>
                                <li>TV</li>
                                <li>Elevator</li>
                                <li>Power Backup</li>
                                <li>Kitchen</li>
                                <li>AC</li>
                                <li>Geyser</li>
                                <li>Wheel Chair</li>
                                <li>Single Bed</li>
                                <li>Room Heater</li>
                                <li>Bath Tub</li>
                            </ul>
                            <div className="roomImg">
                                <ul className="">
                                    <li><a><img src={RoomOne} className="block" alt=""/></a></li>
                                    <li><a><img src={RoomTwo} className="block" alt=""/></a></li>
                                    <li><a><img src={RoomThree} className="block" alt=""/></a></li>
                                    <li><a><img src={RoomFour} className="block" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-8">
                <div className="w-full flex">
                    <div className="w-2/5 pr-8 ActivityInfo">
                        <div>
                        <span className="block text-2xl">Activity Per Floor</span>
                        <details open className="facilities mb-8">
                            <summary><h2 className="text-4xl font-bold text-sukoon">Lounge</h2></summary>
                            <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Para>
                        </details>
                        <details className="facilities">
                            <summary><h2 className="text-4xl font-bold text-sukoon">Nursing Station</h2></summary>
                            <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Para>
                        </details>
                        </div>
                        <button className="globe_btn"><a>Enquiry</a>    </button>
                    </div>
                    <div className="w-3/5 ActivitySecImg">
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
            <section className="my-8">
                <div className="ExperienceServices w-full">
                    <div className="w-full flex relative">
                        <div className="w-3/5">
                            <img src={TherapyView} className="block object-cover w-full object-center" alt="Header"/>
                        </div>
                        <div className="w-2/5">
                        </div>
                        <ExperienceServicesDetails className="w-2/5 absolute shadow-lg">
                            <span className="font-semibold text-lg text-sukoon">Clinical Programs</span>
                            <h2 className="font-bold text-3xl text-sukoon">Fitness Therapy</h2>
                            <Para width="100%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
                            <div className="arrowSection">
                                <button className="Circle_btn"><SVG display="inline-block" icon="arrow" width={'20px'} fill={'#969696'} />
                                </button>
                                <button className="Circle_btn right"><SVG display="inline-block" icon="arrow" width={'20px'} fill={'#969696'} />
                                </button>
                            </div>
                        </ExperienceServicesDetails>
                    </div>
                    <div className="ExperienceServicesNav w-10/12 shadow-lg">
                        <ul>
                            <li className="font-medium text-base text-sukoon">Virtual Therapy</li>
                            <li className="font-medium text-base text-sukoon">Virtual Therapy</li>
                            <li className="font-medium text-base text-sukoon">Virtual Therapy</li>
                            <li className="font-medium text-base text-sukoon">Virtual Therapy</li>
                            <li className="font-medium text-base text-sukoon">Virtual Therapy</li>
                        </ul>
                    </div>
                </div>
            </section>
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

