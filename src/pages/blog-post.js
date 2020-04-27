import React  from "react";
import "../css/style.css";

// Components
import Mobile from "./Blog/BlogSinglePostMobile";
import Desktop from "./Blog/BlogSinglePost";
import Layout from "../components/view/layout";
import SEO from "../components/seo";
import Loader from "../components/loader";
import { graphql} from "gatsby";

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
    console.log({data});
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
            <Mobile Data={data}/> :
            <Desktop  Data={data}/>
          }               
          
        </Layout>
      )
    }
  }
}
export const query = graphql`
  query($slug: String)
  {
    allWordpressPost(filter: { slug: { eq: $slug } })
    {
        edges
        {
            node
            {
                title
                id
                content
                slug
                jetpack_featured_media_url
                date(formatString: "MMMM DD, YYYY")
                categories {          
                  name
                }
            }
        }
    }
  }`
