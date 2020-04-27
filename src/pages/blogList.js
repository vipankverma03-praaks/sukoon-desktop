import React  from "react";
import "../css/style.css";
import { graphql} from "gatsby";

// Components
import Mobile from "./Blog/BlogMobile";
import Desktop from "./Blog/Blog";
import Layout from "../components/view/layout";
import SEO from "../components/seo";
import Loader from "../components/loader";
import PaginationLinks from '../components/pagination-links'

export default class About extends React.Component {
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
    const { data } = this.props;
    const {currentPage,numPages} = this.props.pageContext
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
            title="About"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          {this.state.view === 'mobile' ?
            <Mobile Data={data} currentPage={currentPage} numberOfPages={numPages} rootPage="/blog/" PageTitle="Most Recent Posts"/> :
            <Desktop  Data={data} currentPage={currentPage} numberOfPages={numPages} rootPage="/blog/" PageTitle="Most Recent Posts"/>
          }
        </Layout>
      )
    }
  }
}
export const query = graphql`query ($skip:Int,$limit:Int){
  allWordpressPost(sort: {fields: [date],order:DESC},limit: $limit,skip: $skip)
  {
    edges {
      node {
        title
        excerpt
        slug
        jetpack_featured_media_url
        date(formatString: "MMMM DD, YYYY")
        categories {          
          name
          path
        }
      }
    }
  }
}`;