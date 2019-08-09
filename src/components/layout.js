import React from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql, Link} from "gatsby";
import styled from "styled-components";
import Help from "../images/helpline/helpline copy 2@3x.jpg"
import Call from "../images/icons/phone.svg"
import Mail from "../images/icons/mail.svg"

import Header from "./header";
import BookBtn from "../elements/BookNowBtn";
import Para from "../elements/Para";

import SukoonLogo from "../images/sukoon-bg-logo/logo.jpg";

const LayoutContainer = styled.div`
  
    background-image: ${props => props.bgImage ? `url(${SukoonLogo})`: ''} ;
    background-size: 51vw;
    background-repeat: no-repeat;
    background-position: bottom 16vw right -25vw;
`;
const HeaderIntro = () => {
    return (
        <section className="w-full">
            <div id="Book-appointment-footer" className="px-8 py-6 bg-sukoon flex justify-between">
                <div className="text-white text-5xl my-auto">
                    <span className="font-gilroyLight mr-2">
                        Book an
                    </span>
                        <span className="font-gilroyMedium">
                        Appointment
                    </span>
                </div>
                <div className="flex font-gilroyRegular items-center w-3/6 px-4">
                  <div className="mr-6 w-1/4">
                    <select name="appointment" id="appointment-type"
                            className="block pb-4 bg-sukoon outline-none border-b border-white border-solid  appointment-type w-full font-medium"
                            value="">
                      <option value="" selected>Appointment Type</option>
                      <option value="">In House</option>
                      <option value="">Online Consulting</option>
                    </select>
                  </div>
                  <div className="mr-4 w-2/3">
                    <input type="text" placeholder="Email / Phone"
                           className="block bg-transparent outline-none customer-contact-info w-full pb-4 text-sukoon"/>
                  </div>
                  <div className="w-1/6">
                    <BookBtn wrapperClass="h-fit float-right" border={true}>
                      Book Now
                    </BookBtn>
                  </div>
                </div>
            </div>
        </section>
    )
};

const ReachUs = (props) =>{
  return(
      <div className="">
          <span className="text-sukoon text-4xl font-gilroyBold">Reach Us</span>
          <Para>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </Para>
          <div className="my-6 flex flex-wrap">
              <div className="text-sukoon mr-12 my-2 flex pr-1">
                  <div className="fit"><img src={Help} className="w-6" alt="Help Icon"/></div>
                  <span className="ml-4">1800 123 6789</span>
              </div>
              <div className="text-sukoon mr-8 my-2 flex pr-1">
                  <div className="fit"><img src={Call} className="w-6" alt="Help Icon"/></div>
                  <span className="ml-4">1800 123 6789</span>
              </div>
              <div className="text-sukoon mr-6 my-2 flex pr-1">
                  <div className="fit"><img src={Mail} className="w-6" alt="Help Icon"/></div>
                  <span className="ml-4">1800 123 6789</span>
              </div>
          </div>
      </div>
  )
};

const FollowUs = (props) =>{
    const Instagram = styled.a`
    background: linear-gradient(to right, #f8ec35, #cf2e8d 67%, #1b31f0);
    margin: 0 1rem;
    cursor: pointer;    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `;
    return(
        <div className="pb-4">
            <h1 className="text-sukoon inline-block mr-8 font-gilroyMedium text-xl mb-2">Follow us on</h1>
            <div className="text-lg  inline break-words">
                <a href="/" className="mx-4 text-blue-800 cursor-pointer">Facebook</a>
                <a href="/" className="mx-4 text-blue-400 cursor-pointer">Twitter</a>
                <Instagram href="/">Instagram</Instagram>
                <a href="/" className="mx-4 text-blue-600 cursor-pointer">Skype</a>
            </div>
        </div>
    )
};

const CopyRight = (props) =>{
    return(
        <div className="py-2 px-6 bg-sukoon text-center break-words">
            <span className="text-white text-xs">Copyright © 2019 - All Rights Reserved - Design By Praaks</span>
        </div>
    )
};

const QuickLinks = (props) =>{

    return(
        <div className="flex mr-12">
            <div className="mr-24">
                <h3 className="text-sukoon text-2xl font-gilroyBold block">Sukoon</h3>
                <ul className="mt-4 font-gilroyMedium">
                    <li className="text-gray-600 text-lg my-1 list-none"><Link to="/">Sitemap</Link></li>
                    <li className="text-gray-600 text-lg my-1 list-none"><Link to="/">Our Story</Link></li>
                    <li className="text-gray-600 text-lg my-1 list-none"><Link to="/">Privacy Policy</Link></li>
                    <li className="text-gray-600 text-lg my-1 list-none"><Link to="/">Terms & Conditions</Link></li>
                    <li className="text-gray-600 text-lg my-1 list-none"><Link to="/">Careers</Link></li>
                </ul>
            </div>
            <div className="flex flex-col mr-4 w-2/5">
                <h3 className="text-sukoon text-2xl font-gilroyBold block">Quick Links</h3>
                <div className="w-fit font-gilroyMedium flex">
                          <ul className="mt-4 inline-block mr-12">
                            <li className="text-gray-600 text-lg my-1 list-none">
                              <Link to="/">About Us</Link></li>
                            <li className="text-gray-600 text-lg my-1 list-none">
                              <Link to="/">Services</Link></li>
                            <li className="text-gray-600 text-lg my-1 list-none">
                              <Link to="/">Infrastructure</Link></li>
                            <li className="text-gray-600 text-lg my-1 list-none">
                              <Link to="/">Amenities</Link></li>
                            <li className="text-gray-600 text-lg my-1 list-none">
                              <Link to="/">Doctors</Link></li>
                          </ul>
                          <ul className="mt-4 inline-block">
                            <li className="text-gray-600 text-lg list-none">
                              <Link to="/">International Patients</Link></li>
                            <li className="text-gray-600 text-lg list-none">
                              <Link to="/">FAQs</Link></li>
                            <li className="text-gray-600 text-lg list-none">
                              <Link to="/">Blogs</Link></li>
                            <li className="text-gray-600 text-lg list-none">
                              <Link to="/">Contacts</Link></li>
                          </ul>
                </div>
            </div>
        </div>
    )
};

const Subscribe = (props) =>{

  const Input = styled.input`
        width: 30vw;
    `;

    return(
        <div className="py-6 flex justify-between">
            <div className="my-auto text-v3xl">
                <h3 className="text-sukoon inline font-gilroyRegular">Subscribe</h3>
                <h3 className="ml-2 inline-block font-gilroyBold text-sukoonYellow">Our Newsletter</h3>
            </div>
            <div className="my-auto mx-4  flex self-end">
                <Input id="email-address" type="text" placeholder="Enter Your Email Address" className="outline-none mr-4 bg-transparent"/>
                <BookBtn border>Go</BookBtn>
            </div>
        </div>
    )
};

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <LayoutContainer bgImage={props.bgImage} className="flex flex-col min-h-screen sukoon-bg-1  text-gray-900">
          <Header logoHighlighter={props.logoHighlighter} siteTitle={data.site.siteMetadata.title} />

          <main className="flex flex-col flex-1 justify-center mx-auto m-0 w-full">
            {children}
          </main>
          <footer className="">
            <HeaderIntro/>
            <div className="px-8 pt-4">
              <Subscribe/>
              <div className="flex">
                <QuickLinks/>
                <div className="flex flex-col">
                  <ReachUs/>
                  <FollowUs/>
                </div>
              </div>
            </div>
            <CopyRight/>
          </footer>
        </LayoutContainer>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
