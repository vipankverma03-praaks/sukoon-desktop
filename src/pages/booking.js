import React  from "react";

// Components
import Mobile from "./Booking/mobile";
import Desktop from "./Booking/desktop";
import SEO from "../components/seo";
import Layout from "../components/view/layout";

export default class Booking extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      overlay:false,
      view:'desktop',
    }
  }
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
            title="Booking"
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
            title="Booking"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          <Desktop/>
        </Layout>
      )
    }
  }
}
