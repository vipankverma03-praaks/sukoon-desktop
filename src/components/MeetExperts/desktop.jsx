import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop";
import Carousel from ".././Carousel/desktop";

// Images
import Samir_Kalani from "../../images/doctor/rsz_samir_kalani.jpg";
import Ila from "../../images/doctor/ila2.jpg";

const DocImgSec = styled.div`
`;

const CarouselItems = (item) =>{
  return(
    <Nurses className="">
      <DocImgSec className="DocImgSec">
        <Link to="/">
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
    name: 'Ila',
    image: Ila,
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
      <Carousel container  autoPlay={false} slidesToShow={2} cardFn={CarouselItems} content={Doctors}/>
    </section>
  );
};

export default MeetExperts;