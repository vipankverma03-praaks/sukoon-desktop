import React ,{useState} from "react";
import {Link} from "gatsby"
import "../css/style.css";
import Banner from "../components/Banner";

// Slick CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading"
import styled from "styled-components";
import Para from "../elements/Para"
import ArrowIcon from "../elements/ArrowButton";



const Faqs = (props) => {

    let content = [
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

    let items = content.map((item)=>{
        return(
            <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
                <div className="flex justify-between">
                    <details>
                        <Para width="auto" padding="1rem">
                            {item.description}
                        </Para>
                        <summary className="text-sukoon font-bold">{item.summary}</summary>
                    </details>
                </div>
            </div>
        )
    });

    return (
        <section id="faq-section" className="p-8 flex relative flex-row-reverse justify-between">
            <div className="w-3/5">
                <ul className="flex justify-between mb-10">
                    <li><button>Category 01</button></li>
                    <li><button>Category 01</button></li>
                    <li><button>Category 01</button></li>
                    <li><button>Category 01</button></li>
                </ul>
                {items}
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
            <Banner/>
            <Faqs/>
        </Layout>

    );
}

export default FaqsPage;
