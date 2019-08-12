import styled from "styled-components";
import React, { useState } from "react";

// Components
import Title from "../elements/Heading";
import Para from "../elements/Para";

// Images
import InfraBgImg from "../images/InfraSectionbg.jpg";
import ConsultingChambers from "../images/exp/bg.jpg";
import InHousePharmacy from "../images/exp/bg_2.jpg";


// Cards data
const CardContent = {
  Card1: {
    bgImg:ConsultingChambers,
    caption: 'Consulting Chambers',
    titleLight: 'Consulting',
    titleBold: 'Chamber',
    para: 'Speak with your doctor in a private, and comfortable environment. Grab a coffee or indulge in some cold snacks while you wait. ',
  },
  Card2: {
    bgImg:InHousePharmacy,
    caption: 'In House Pharmacy',
    titleLight: 'In House',
    titleBold: 'Pharmacy',
    para: 'You can always find your prescribed medications at Sukoon. Our pharmacy is ',
  },
  Card3: {
    bgImg:InfraBgImg,
    caption: 'Modern Residences',
    titleLight: 'Modern',
    titleBold: 'Residences',
    para: 'Stay in premium, well-lit, comfortably furnished rooms designed to provide a calming, warm, and safe environment ',
  },
  Card4: {
    bgImg:InfraBgImg,
    caption: 'Gourmet Meals',
    titleLight: 'Gourmet',
    titleBold: 'Meals',
    para: 'Enjoy healthy meals that will delight your taste buds. You can also take advantage of our in-room dining menu.',
  },
  Card5: {
    bgImg:InfraBgImg,
    caption: 'Activity Areas',
    titleLight: 'Activity',
    titleBold: 'Areas',
    para: 'Don’t be limited by space. Undergo alternative therapy programs in our fitness area, art studio, and independent floor lounges\n',
  },
  Card6: {
    bgImg:InfraBgImg,
    caption: 'World-Class Amenities',
    titleLight: 'World-Class',
    titleBold: 'Amenities',
    para: 'Intensive Care Unit, 24*7 doctor on-site, terrace gardens, or in-room spa - we have you covered at every step of your healing process. \n',
  }
};

// Bottom Button wrapper
const InfraBtnContainer = (props) =>{

  const Wrapper = styled.div`
            position: relative;
            width: 20vw;
            
        `;
  return(
    <Wrapper>
      {props.children}
    </Wrapper>
  )
};

// Card component
const InfraCard = (props) => {
  return (
    <section className="p-6">
      <Title titleLight={props.card.titleLight} className="mb-4" titleBold={props.card.titleBold} display="block"/>
      <Para className="text-gray-600 block" width="23vw">
        {props.card.para}
      </Para>
    </section>
  )
};

const InfraButton = (props)=>{

  const Button = styled.button`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        float:right;
        background: ${props.yellow ? '#ffc300' : 'white'};
        
        ::before{
            position: absolute;
            content: '';
            width: 100%;
            height: 5px;
            background: ${props.yellow ?  '#ffc300' : 'white'};
            top:7px;
            left:0;
        }
    `;
  return(
    <Button onClick={()=>{props.handleToggle(props.name)}}/>
  )
};

const InfraSection = styled.section`
        background-image: url(${props => props.bgImage});
        background-size: cover;
        height: 40vw;
        background-position: center;
        position: relative;
        
        &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 40vw;
        z-index: 10;
        opacity: .25;
        background: linear-gradient(to bottom, transparent 80%,#212121);
        
        }
    `;

const CardWrapper = styled.div`
        right:10vw;
        top:8vw;
    `;

const SimpleInfraButton = styled.button`
        width: 20px;
        height: 20px;
        border-radius: 50%;
    `;

const Infra = (props) =>{
  const [yellowActive0, setColor0] = useState(true);
  const [yellowActive1, setColor1] = useState(false);
  const [yellowActive2, setColor2] = useState(false);
  const [yellowActive3, setColor3] = useState(false);
  const [yellowActive4, setColor4] = useState(false);

  const[Card, setCard] = useState(CardContent.Card1);

  const Wrapper = styled.div`
        bottom: 4rem;
        left:4rem;
        z-index: 11;
        
        .usp-caption{
        top: 40px;
        left: 17vw;
        }
    `;

  const handleToggle = (name)=>{

    if(name === '0'){
      setCard(CardContent.Card1);
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
    }
    else if(name === '1'){
      setCard(CardContent.Card2);
      if(!yellowActive1){
        setColor1(true);
      }
      else{
        setColor2(false);
        setColor3(false);
        setColor4(false);
      }
    }
    else if(name === '2'){
      setCard(CardContent.Card3);
      if(!yellowActive2){
        setColor2(true);
        setColor1(true);
      }
      else{

        setColor3(false);
        setColor4(false);
      }
    }
    else if(name === '3'){
      setCard(CardContent.Card4);
      if(!yellowActive3){
        setColor1(true);
        setColor2(true);
        setColor3(true);
      }
      else{
        setColor4(false);
      }
    }
    else{
      setCard(CardContent.Card5);
      if(!yellowActive4){
        setColor1(true);
        setColor2(true);
        setColor3(true);
        setColor4(true);
      }
    }
  };



  return(
    <InfraSection bgImage={Card.bgImg} id="sukoon-infra-section" className="sukoon-infra-section relative w-full my-12 h-full">
      <CardWrapper className="block absolute bg-white">
        <InfraCard card={Card} titleLight="In House" titleBold="Pharmacy" para="You can always find your prescribed medications at Sukoon. Our pharmacy is "/>
      </CardWrapper>
      <Wrapper className="m-4 flex absolute" >
        <div className="relative">
          <SimpleInfraButton onClick={()=>handleToggle('0')} yellow={yellowActive0} name="0" className="bg-sukoonYellow"/>
          <h2 className="absolute text-white text-xl font-gilroyBold">
            Consulting Chambers
          </h2>
        </div>
        <InfraBtnContainer>
          <InfraButton  yellow={yellowActive1} handleToggle={handleToggle} name="1" className="bg-sukoonYellow"/>
          <h2 className="absolute usp-caption text-white text-xl font-gilroyBold">
            {CardContent.Card2.caption}
          </h2>
        </InfraBtnContainer>
        <InfraBtnContainer>
          <InfraButton  yellow={yellowActive2} name="2" handleToggle={handleToggle} className="bg-sukoonYellow"/>
          <h2 className="absolute usp-caption text-white text-xl font-gilroyBold">
            {CardContent.Card3.caption}
          </h2>
        </InfraBtnContainer>
        <InfraBtnContainer>
          <InfraButton  yellow={yellowActive3} name="3" handleToggle={handleToggle} className="bg-sukoonYellow"/>
          <h2 className="absolute text-white usp-caption text-xl font-gilroyBold">
            {CardContent.Card4.caption}
          </h2>
        </InfraBtnContainer>
        <InfraBtnContainer>
          <InfraButton  yellow={yellowActive4} name="4" handleToggle={handleToggle} className="bg-sukoonYellow"/>
          <h2 className="absolute text-white usp-caption text-xl font-gilroyBold">
            {CardContent.Card5.caption}
          </h2>
        </InfraBtnContainer>
      </Wrapper>
    </InfraSection>
  )
};


export default Infra;
