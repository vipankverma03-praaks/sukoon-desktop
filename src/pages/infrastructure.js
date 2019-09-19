import React  from "react";

// Components
import Mobile from "./Infrastructure/mobile";
import Desktop from "./Infrastructure/desktop";
import Layout from "../components/view/layout";
import SEO from "../components/seo";

export default class Infrastructure extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      overlay:false,
      view:'desktop',
    }
  }

  // Function to update state.
  updateState = (stateName, value) => {
    this.setState({[stateName] : value});
  };
  componentDidMount() {
    if(window && window.matchMedia("(max-device-width: 760px)").matches){
      this.setState({view: 'mobile'});
    }
    else{
      this.setState({view: 'desktop'});
    }
  }

  render() {

    // To switch between mobile and desktop design.
    if (this.state.view === 'mobile') {
      return  (
        <Layout overlay={this.state.overlay} setOverlay={this.updateState}>
          <SEO
            title="Infrastructure"
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
            title="Infrastructure"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          <Desktop/>
        </Layout>
      )
    }
  }
}