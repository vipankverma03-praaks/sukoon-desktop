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
    const {name,path} = this.props.pageContext
    const postPerPage=2;
    let numberOfPages=Math.ceil(data.allWordpressPost.totalCount/postPerPage)
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
            <Mobile Data={data} currentPage={1} numberOfPages={numberOfPages} rootPage={path} PageTitle={`Category - ${name}`}/> :
            <Desktop  Data={data} currentPage={1} numberOfPages={numberOfPages} rootPage={path} PageTitle={`Category - ${name}`}/>
          }

        </Layout>
      )
    }
  }
}
export const query = graphql`
  query($name: String)
  {
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: $name}}}})
    {
        totalCount
        edges
        {
            node
            {
                title
                content
                slug
                excerpt
                jetpack_featured_media_url
                date(formatString: "MMMM DD, YYYY")
                categories {          
                  name
                }
            }
        }
    }
  }`
  