import styled from "styled-components";
import React, { useState } from "react";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile";

// Images
import InfraBgImg from "../../images/Infra/WhatsApp Image 2019-07-06 at 11.21.21 AM@3x.jpg";
import ConsultingChambers from "../../images/exp/bg.jpg";
import InHousePharmacy from "../../images/exp/bg_2.jpg";

// Cards data
const CardContent = {
  Card1: {
    bgImg:ConsultingChambers,
    caption: 'Consulting Chambers',
    titleLight: 'Consulting',
    titleBold: 'Chamber',
    para: 'Consult with your doctor in a private and comfortable environment. Grab a coffee, or indulge in some snacks while you wait.',
  },
  Card2: {
    bgImg:InHousePharmacy,
    caption: 'In House Pharmacy',
    titleLight: 'In House',
    titleBold: 'Pharmacy',
    para: 'You can always find your prescribed medications at Sukoon. No more running around the town to find them.',
  },
  Card3: {
    bgImg:ConsultingChambers,
    caption: 'Modern Residences',
    titleLight: 'Modern',
    titleBold: 'Residences',
    para: 'Stay in premium, well-lit, comfortably furnished rooms designed to provide a calming, warm, and safe environment. ',
  },
  Card4: {
    bgImg:InHousePharmacy,
    caption: 'Gourmet Meals',
    titleLight: 'Gourmet',
    titleBold: 'Meals',
    para: 'Enjoy healthy meals that will delight your taste buds. You can also take advantage of our in-room dining menu.',
  },
  Card5: {
    bgImg:ConsultingChambers,
    caption: 'Activity Areas',
    titleLight: 'Activity',
    titleBold: 'Areas',
    para: 'Never be limited by space! Undergo alternative therapy programs in our fitness area, art studio, and independent floor lounges',
  },
  Card6: {
    bgImg:InHousePharmacy,
    caption: 'World-Class Amenities',
    titleLight: 'World-Class',
    titleBold: 'Amenities',
    para: 'Intensive Care Unit, 24*7 doctors on-site, terrace garden, or in-room spa - we have you covered at every step of your healing process.',
  }
};

// Bottom Button wrapper
const InfraBtnContainer = (props) =>{

  const Wrapper = styled.div`
            position: relative;
            width: 75px;
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
    <section className="p-4">
      <Title titleLight={props.card.titleLight} className="mb-4" titleBold={props.card.titleBold} display="block"/>
      <Para className="text-gray-600 block" width="100%">
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
        height: 230px;
        background-position: center;
        position: relative;
        
        &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40vw;
        z-index: 10;
        opacity: .25;
        background: linear-gradient(to top, #212121 20%,transparent 40%);
        
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
        bottom: 10px;
        left:0;
        right: 0;
        z-index: 11;
        
        .usp-caption{
        top: 28px;
        left: 13vw;
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
    <div>
      <InfraSection bgImage={Card.bgImg} id="sukoon-infra-section" className="sukoon-infra-section relative w-full my-4 h-full">
        <Wrapper className="m-4 flex absolute">
          <div className="relative">
            <SimpleInfraButton onClick={()=>handleToggle('0')} yellow={yellowActive0} name="0" className="bg-sukoonYellow"/>
          </div>
          <InfraBtnContainer>
            <InfraButton  yellow={yellowActive1} handleToggle={handleToggle} name="1" className="bg-sukoonYellow"/>
          </InfraBtnContainer>
          <InfraBtnContainer>
            <InfraButton  yellow={yellowActive2} name="2" handleToggle={handleToggle} className="bg-sukoonYellow"/>
          </InfraBtnContainer>
          <InfraBtnContainer>
            <InfraButton  yellow={yellowActive3} name="3" handleToggle={handleToggle} className="bg-sukoonYellow"/>
          </InfraBtnContainer>
          <InfraBtnContainer>
            <InfraButton  yellow={yellowActive4} name="4" handleToggle={handleToggle} className="bg-sukoonYellow"/>
          </InfraBtnContainer>
        </Wrapper>
      </InfraSection>
      <CardWrapper className="block bg-white">
        <InfraCard card={Card} titleLight="In House" titleBold="Pharmacy" para="You can always find your prescribed medications at Sukoon. Our pharmacy is "/>
      </CardWrapper>
    </div>

  )
};


export default Infra;
