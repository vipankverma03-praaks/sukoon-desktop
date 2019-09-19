import React from "react";

// Components
import DesktopLayout from "./desktopLayout";
import MobileLayout from "./mobileLayout";
import { graphql, StaticQuery } from "gatsby";

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: 'true',
      view: '',
    }

  }

  handleScroll = () => {

    let Header = document.getElementById('header-intro');
    let StickyMenu = document.getElementById('sticky-nav');
    let offset = Header ? Math.abs(Number(Header.getBoundingClientRect().top)) : 0;

    if(StickyMenu){
      if (offset > 786 || offset > 666 || offset > 556) {
        StickyMenu.classList.add('show');
        StickyMenu.classList.remove('hide');
      } else {
        StickyMenu.classList.remove('show');
        StickyMenu.classList.add('hide');
      }
    }

  };

  // Renders after render function.
  componentDidMount() {
    // To redirect desktop site to mobile domain on mobile devices of max-width 760px.
    if (window && window.matchMedia("(max-device-width: 760px)").matches) {
      // change view
      this.setState({ view: 'mobile' });
    } else {
      this.setState({ loading: 'false', view: 'desktop' });
    }
    // Sticky menu event listener
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    // To change layout based on view.

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
          render={(data) => {
            if (this.state.view === 'mobile') {
              return (
                <MobileLayout setOverlay={this.props.setOverlay} overlay={this.props.overlay} data={data} bgImage={this.props.bgImage}>
                  {this.props.children}
                </MobileLayout>
              )
            } else {
                  return(
                    <DesktopLayout data={data} bgImage={this.props.bgImage}>
                      {this.props.children}
                    </DesktopLayout>
                  )
            }
          }}
        />
      )
    }
}

