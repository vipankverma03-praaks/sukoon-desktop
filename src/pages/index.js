import React  from "react";

// Components
import Mobile from "./Home/Homemobile";
import Desktop from "./Home/Homedesktop";
import Layout from "../components/view/layout";
import SEO from "../components/seo";
import Loader from "../components/loader";

export default class IndexPage extends React.Component{
      constructor(props) {
        super(props);
        this.state={
          overlay:false,
          view:'',
          loading: true,
        }
      }

      // Function to update state.
      updateState = (stateName, value) => {
        this.setState({[stateName] : value});
      };
  componentDidMount() {
    if(window && window.matchMedia("(max-device-width: 760px)").matches){
      this.setState({view: 'mobile', loading: false});
    }
    else{
      this.setState({view: 'desktop', loading: false});
    }
  }

  render() {

    if(this.state.loading !== 'undefined' && this.state.loading){
      return (
        <div className={`flex`}>
          <Loader/>
        </div>
        )

    }
    else {
      return(
        <Layout overlay={this.state.overlay} setOverlay={this.updateState}>
        <SEO
          title="Home"
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        />

        {
          this.state.view === 'mobile' ?
            <Mobile/> :
            <Desktop/>
        }
      </Layout>

      )
    }
  }
}