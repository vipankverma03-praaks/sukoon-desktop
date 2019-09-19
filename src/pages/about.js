import React  from "react";
import "../css/style.css";

// Components
import Mobile from "./About/mobile";
import Desktop from "./About/desktop";
import Layout from "../components/view/layout";
import SEO from "../components/seo";

export  default  class IndexPage extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      overlay:false,
    }
  }

  // Function to update state.
  updateState = (stateName, value) => {
    this.setState({[stateName] : value});
  };

  render() {
    // To switch between mobile and desktop design.
    if (window && window.matchMedia("(max-device-width: 760px)").matches) {
      return  (
        <Layout overlay={this.state.overlay} setOverlay={this.updateState}>
          <SEO
            title="About"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          <Mobile/>
        </Layout>
      )
    }
    else{
      return(
        <Layout>
          <SEO
            title="About"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          <Desktop/>
        </Layout>
      )
    }
  }
}
