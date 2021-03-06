import React  from "react";

// Components
import Mobile from "./Booking/Bookingmobile";
import Desktop from "./Booking/Bookingdesktop";
import SEO from "../components/seo";
import Loader from "../components/loader";

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
      view: 'desktop',
    }
  }

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
        <>
          <SEO
            title="Booking"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          {this.state.view === 'mobile' ?
            <Mobile/> :
            <Desktop/>
          }
        </>
      )
    }
  }
}