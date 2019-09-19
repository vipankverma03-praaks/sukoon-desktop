import React  from "react";

// Components
import Mobile from "./Booking/mobile";
import Desktop from "./Booking/desktop";
import Layout from "../components/view/layout";
import SEO from "../components/seo";

export  default  class IndexPage extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      overlay:false,
    }
  }

  render() {
    if (window && window.matchMedia("(max-device-width: 760px)").matches) {
      return  (
       <>
          <SEO
            title="Booking"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          <Mobile/>
          </>
      )
    }
    else{
      return(
        <>
          <SEO
            title="Booking"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          <Desktop/>
          </>
      )
    }
  }

}
