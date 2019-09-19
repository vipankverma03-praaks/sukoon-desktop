import React, { useState } from "react";
import {Sticky , StickyContainer} from "react-sticky";
import  styled from "styled-components";

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop";
import Banner from "../../components/Banner/desktop";
import ArrowButton from "../../elements/ArrowButton/desktop";
import MeetExperts from "../../components/MeetExperts/desktop";
import SVG from "../../elements/SVG/desktop";

// Images
import HeaderImg from "../../images/pacientes-mejora_2019-08-02/pacientes-mejora@3x.jpg";

const Content = {
  Main: 'Acute Psychiatry Services',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Services',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias.`
    },
    {
      title: 'Our Treatment Team',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
    },
    {
      title: 'Treatment Goals',
      para:`Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus.
        `
    }
  ]
};

const Content2 = {
  Main: 'Alcohol, Drug, And Habbit De-addiction Programs',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Services',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias.`
    },
    {
      title: 'Our Treatment Team',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
    },
    {
      title: 'Treatment Goals',
      para:`Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus.
        `
    }
  ]
};

const Content3 = {
  Main: 'Day-Care Counselling, and Immersive Therapy Programs.',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Services',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias.`
    },
    {
      title: 'Our Treatment Team',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
    },
    {
      title: 'Treatment Goals',
      para:`Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus.
        `
    }
  ]
};

const Content4 = {
  Main: 'Off-site IPD Setup At Home Services',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Services',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias.`
    },
    {
      title: 'Our Treatment Team',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
    },
    {
      title: 'Treatment Goals',
      para:`Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus.
        `
    }
  ]
};

const Content5 = {
  Main: 'Geriatic Psychiatry age related mental health issues.',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Services',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias.`
    },
    {
      title: 'Our Treatment Team',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
    },
    {
      title: 'Treatment Goals',
      para:`Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus.
        `
    }
  ]
};

// UL element on left side list.
const StyledLeftNav = styled.ul`
  display: flex;
  background: #c2dcd3;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  font-family: gilroy-medium;
  font-size: 1.1vw;
  margin-top: 1rem;
  width: 37vw;
  
  li{
    margin-bottom: 10px;
  }
  li > a:active{
    color: #12443e;
  }
  li:hover >.active{
    display: flex;
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  li .active{
    color: #12443e;
  }
  
`;

// Patient card component
const PatientCare = (props) => {

  const[ListContent, setContent] = useState(Content);
  const[isActive, setActive] = useState('1');

  const List = [
    {name: 'Acute Psychiatry Care Intensive Care Unit' , content: Content, number: '1'},
    {name: 'Alcohol, Drug, And Habbit De-addiction Programs', content: Content2, number: '2'},
    {name: 'Day-Care Counselling, and Immersive Therapy Programs.', content: Content3, number: '3'},
    {name: 'Off-site IPD Setup At Home Services', content: Content4, number: '4'},
    {name: 'Geriatic Psychiatry age related mental health issues.', content: Content5, number: '5'},
    {name: 'Special Ward for Women Female Staff Only', content: Content, number: '6'},
  ];

  // Left nav list component.
  let navList = List.map((list)=>{
    return(
      <li className={`${isActive === list.number ? 'text-sukoon' : ''} flex justify-between hover:text-sukoon items-center`}>
        <button onClick={()=>{setContent(list.content); setActive(list.number)}} className="font-gilroyMedium focus:outline-none">
          {list.name}
        </button>
        <ArrowButton wrapperClass={`${isActive === list.number ? 'active' : 'hidden'}`} margin="0"/>
      </li>
    )
  });

  return (
    <section id="" className="In-patient mt-4 p-12">
      <div id="top-title-row" className="flex">
        <div className="w-4/5">
          <Title
            titleLight={props.title}
            titleBold="Care Services"
            display="block"
          />
        </div>
        <div className="bg-sukoon text-center text-vxs text-white p-6 w-1/5">
          <SVG display="inline-block" icon="helpline" width={'35px'} fill={'#fff'} />
          <h4 className="leading-loose font-gilroyMedium py-2">Sukoon Suicide Helpline</h4>
          <h2 className="text-v2xl tracking-widest">1800-234-6789</h2>
        </div>
      </div>
      <StickyContainer id="sticky-container" className="flex pt-8 justify-between">
        <Sticky  disableCompensation className="bg-green-500 h-fit text-vxl w-2/5 p-8" topOffset={-10}>
          {({style , isSticky}) => {
            let top = '0';
            if(isSticky){
              top = '64px';
            }
            return(
              <div style={{...style, paddingTop: `${top}`}} className="">
                <StyledLeftNav className="text-gray-600">
                  {navList}
                </StyledLeftNav>
              </div>
            );
          }}
        </Sticky>
        <div id="right-section-services" className="w-3/5 px-8">
          <RightContainer Content={ListContent} />
        </div>
      </StickyContainer>
    </section>
  );
};

// Component to render right list content on link selected.
const RightContainer = ({Content}) =>{

  // Bottom list item of right content.
  let list = Content.items.map(list=>{
    return(
      <li className="mt-4">
        <h3 className="text-v2xl pb-4 font-gilroyBold">{list.title}</h3>
        <Para width="100%">
          {list.para}
        </Para>
      </li>
    )
  });

  // Main is the top heading of list items.
  return(
    <div className="text-sukoon">
      <ul>
        <li>
          <h2 className="text-v3xl pb-4 font-gilroyBold">
            {Content.Main}
          </h2>
          <Para width="100%">
            {Content.Summary}
          </Para>
        </li>
        {list}
      </ul>
    </div>
  )
};

// Main services page function.
function ServicesPage(props) {

  return (
    <>
      <Banner para inner texture HeaderImg={HeaderImg}/>
      <PatientCare title="In Patient" />
      <PatientCare title="Out Patient" />
      <MeetExperts />
    </>
  );
}

export default ServicesPage;
