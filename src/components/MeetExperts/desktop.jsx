import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop";
import Carousel from ".././Carousel/desktop";

// Images upated
import Samir_Kalani from "../../images/doctor/kalani.jpeg";
import Ila from "../../images/doctor/ila.jpeg";
import Jaiman from "../../images/doctor/jaiman.jpeg";
import Sharmeen from "../../images/doctor/Sharmeen.jpeg";
import Akshita from "../../images/doctor/akshita.jpeg";
import Chandni from "../../images/cs.jpeg";
import Mantosh from "../../images/mk.jpeg";



const DocImgSec = styled.div`
`;

const CarouselItems = (item) =>{
  return(
    <Nurses className="">
      <DocImgSec className="DocImgSec" >
        <Link to="/doctors">
          <img src={item.image} alt="doctor" />
        </Link>
        <h3 className="bg-sukoon text-white p-2 text-center text-xl">{item.name}</h3>
      </DocImgSec>
    </Nurses>
  )
};

const Doctors = [
  {
    name: 'Dr. Sameer Kalani',
    image: Samir_Kalani,
  },
  {
    name: 'Dr. Mantosh Kumar',
    image: Mantosh,
  },
  {
    name: 'Ms. Ila Kulshrestha',
    image: Ila,
  },
  {
    name: 'Dr. Shambhavi Jaiman',
    image: Jaiman,
  },
  {
    name: 'Ms. Akshita Shukla',
    image: Akshita,
  },
  {
    name: 'Sharmeen Kaur Khurana',
    image: Sharmeen,
  },
  {
    name: 'Chandni Sharma',
    image: Chandni,
  },
];
const Nurses = styled.div`
    padding: 0 5px;
`;


const MeetExperts = props => {
  return (
    <section id="meet-experts" className="py-12  overflow-x-hidden relative">
      <div className="pl-20">
        <Title subHeading="About" singleLine titleLight="Our" titleBold="Doctors" />
        <Para Class="py-8" width="65%">
          With a team of experienced doctors led by our Resident Director - Dr Sameer Kalani, we can assure you that everybody is in good hands here. With an emphasis on relaxation and restoration of your mental well-being, we have a clinical team of psychiatrists, clinical psychologists, counselling psychologists, visiting consultants, general physicians, art therapists and fitness therapists.
        </Para>
      </div>
      <Carousel container  autoPlay={false} slidesToShow={3} cardFn={CarouselItems} content={Doctors}/>
    </section>
  );
};

export default MeetExperts;