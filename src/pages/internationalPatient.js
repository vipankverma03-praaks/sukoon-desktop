import React  from "react";

// Components
import Mobile from "./InternationalPatients/InternationalPatientsmobile";
import Desktop from "./InternationalPatients/InternationalPatientsdesktop";
import Layout from "../components/view/layout";
import SEO from "../components/seo";
import Loader from "../components/loader";

export default class InternationalPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
      view: 'desktop',
    }
  }

  // Function to update state.
  updateState = (stateName, value) => {
    this.setState({ [stateName]: value });
  };

  componentDidMount() {
    if (window && window.matchMedia("(max-device-width: 760px)").matches) {
      this.setState({ view: 'mobile' });
    } else {
      this.setState({ view: 'desktop' });
    }
  }

  render() {

    if (this.state.loading !== 'undefined' && this.state.loading) {
      return (
        <div className={`flex`}>
          <Loader/>
        </div>
      )

    } else {
      return (
        <Layout overlay={this.state.overlay} setOverlay={this.updateState}>
          <SEO
            title="International Patients"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          {this.state.view === 'mobile' ?
            <Mobile/> :
            <Desktop/>
          }
        </Layout>
      )
    }
  }
}