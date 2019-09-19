import React ,{useState} from "react";

// Components
import Banner from "../../components/Banner/desktop";
import Title from "../../elements/Heading/desktop"
import Para from "../../elements/Para/desktop";
import Category from "../../elements/BookNowBtn/desktop";
import Details from "../../elements/Details/desktop";

// Images
import HeaderImg from "../../images/Desktop-Header/HomeBanner.jpg";

const content = [
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },


];

const content1 = [
  {
    summary: 'What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },


];

const Questions = (props) =>{

  return(
    props.content.map((item)=>{
      return(
        <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
          <Details summary={item.summary}>
            <Para width="auto" padding="1rem">
              {item.description}
            </Para>
          </Details>
        </div>
      )})
  );
};


const Faqs = (props) => {

  const[activeCategory, setCategory] = useState('category1');
  const[data, setData] = useState(content);

  const setView = (view , data) =>{
    setCategory(view);
    setData(data);
  };

  return (
    <section id="faq-section" className="p-8 flex relative flex-row-reverse justify-between">
      <div className="w-3/5">
        <ul className="flex mb-10 justify-between">
          <li className="">
            <Category transparent={activeCategory !== 'category1'} arguments={['category1', content]} clickFn={setView}>Category 01</Category>
          </li>
          <li>
            <Category transparent={activeCategory !== 'category2'} arguments={['category2', content1]} clickFn={setView}>Category 2</Category>
          </li>
          <li>
            <Category transparent={activeCategory !== 'category3'} arguments={['category3', content]} clickFn={setView}>Category 3</Category>
          </li>
          <li>
            <Category transparent={activeCategory !== 'category4'} arguments={['category4', content]} clickFn={setView}>Category 4</Category>
          </li>
        </ul>
        <Questions content={data}/>
      </div>
      <div className="mr-40">
        <Title titleLight="Frequently" addClass="block" titleBold="Asked Questions"/>
        <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet cupiditate dolores excepturi iure quibusdam.</Para>
      </div>
    </section>
  )
};


function FaqsPage(props) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Banner HeaderImg={HeaderImg}/>
      <Faqs/>
    </Layout>

  );
}

export default FaqsPage;
