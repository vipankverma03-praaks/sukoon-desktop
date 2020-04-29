import React  from "react";
import "../css/style.css";
import { graphql, StaticQuery,Link } from "gatsby";
import './css/blog.css'
// import './css/normalize.css'
// import './css/webflow.css'

// Components
//import Mobile from "./Blog/BlogMobile";
//import Desktop from "./Blog/Blog";
import Layout from "../components/view/layout";
import SEO from "../components/seo";
import Loader from "../components/loader";
import Banner from "../components/Banner/desktop";
import PostGridBlock from "../components/Blog grid/blog-grid"
import BlogCategorySidebar from "../components/BlogCategorySection/BlogCategorySection";
import RecentPosts from "../components/BlogRecentPosts/RecentPosts";
import Pagination from '../components/pagination'
import BannerBg from "../images/Desktop-Header/pacientes-mejora.png";
import BannerBgMobile from "../images/servicesBg.png";


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
            <div>             
                {/* <Banner captionLight={`Blog`} captionBold={`Posts`} overlay={this.state.overlay} backgroundImg={BannerBgMobile}/> */}
                    <h2 className="blog-page-heading" style={{"margin-top":"20px"}}>Most Recent Posts</h2>

                    <div className="post-section">
                      <div className="blog-block">
                          {data.allWordpressPost.edges.map(({ node }) => (                           
                              <PostGridBlock PostTitle={node.title} Description={node.excerpt} PostDate={node.date} Category={Object.values(node.categories)[0].name} Image={node.jetpack_featured_media_url} Path={node.slug} CategoryPath={Object.values(node.categories)[0].path}></PostGridBlock>                           
                                 
                          ))}
                          
                          <Pagination
                                    rootPage='/blog/'
                                    currentPage={1}
                                    numberOfPages={numberOfPages}
                                />
                      </div>

                      <div className="sidebar" style={{"margin-top":"35px"}}>
                        <RecentPosts></RecentPosts>
                        <BlogCategorySidebar> </BlogCategorySidebar>
                      </div>
                    </div>
                    
                </div>    :
            
          
            <div>             
                <Banner para width={`52vw`} marginLeft={`-30vw`} captionLight={`Blog`} captionBold={`Posts`}  inner texture HeaderImg={BannerBg}/>
                    <h2 className="blog-page-heading">Most Recent Posts</h2>

                    <div className="post-section">
                      <div className="blog-block">
                          {data.allWordpressPost.edges.map(({ node }) => (                           
                              <PostGridBlock PostTitle={node.title} Description={node.excerpt} PostDate={node.date} Category={Object.values(node.categories)[0].name} Image={node.jetpack_featured_media_url} Path={node.slug} CategoryPath={Object.values(node.categories)[0].path}></PostGridBlock>                           
                                 
                          ))}
                          
                          <Pagination className="mb-5"
                                    rootPage='/blog/'
                                    currentPage={1}
                                    numberOfPages={numberOfPages}
                                />
                      </div>

                      <div className="sidebar">
                        <RecentPosts></RecentPosts>
                        <BlogCategorySidebar> </BlogCategorySidebar>
                      </div>
                    </div>
                    
                </div>   
          }

        </Layout>
      )
    }
  }
}
export const query = graphql`query{
  allWordpressPost(sort: {fields: [date],order: DESC},limit:2)
  {
    totalCount
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