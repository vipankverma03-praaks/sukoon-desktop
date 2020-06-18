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
import LoadMoreBtn from "../elements/LoadMoreBtn";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    let postsToShow = 1
    this.state = {
      overlay: false,
      view: 'desktop',
      showingMore: postsToShow > 1,
      postsToShow,
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
    const totalPosts = this.props.data.allWordpressPost.edges
    const index = this.state.postsToShow;   
    const postPerPage=2;
    let numberOfPages=Math.ceil(data.allWordpressPost.totalCount/postPerPage)
    const {name} = this.props.pageContext
    
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
            title="Blog"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />
          {this.state.view === 'mobile' ?
            <div>             
                {/* <Banner captionLight={`Blog`} captionBold={`Posts`} overlay={this.state.overlay} backgroundImg={BannerBgMobile}/> */}
                    <h2 className="blog-page-heading" style={{"margin-top":"20px"}}>Category - {name} </h2>

                    <div className="post-section">
                      <div className="blog-block">
                          {totalPosts.slice(0, index).map(({ node }) => (                         
                              <PostGridBlock PostTitle={node.title} Description={node.excerpt} PostDate={node.date} Category={Object.values(node.categories)[0].name} Image={node.jetpack_featured_media_url} Path={node.slug} CategoryPath={Object.values(node.categories)[0].path}></PostGridBlock>                           
                                 
                          ))}
                          {this.state.postsToShow < this.props.data.allWordpressPost.edges.length &&
                                <div onClick={() => {
                                  this.setState({
                                    postsToShow: this.state.postsToShow + 2,
                                  })
                                }}>
                                  <LoadMoreBtn></LoadMoreBtn>
                                </div>
                              }
                          {/* <Pagination className="mb-5"
                                    rootPage='/blog/'
                                    currentPage={1}
                                    numberOfPages={numberOfPages}
                                /> */}
                      </div>

                      <div className="sidebar" style={{"margin-top":"35px"}}>
                        <RecentPosts></RecentPosts>
                        <BlogCategorySidebar> </BlogCategorySidebar>
                      </div>
                    </div>
                    
                </div>    :
            
          
            <div>             
                <Banner para width={`52vw`} marginLeft={`-30vw`} captionLight={`Blog`} captionBold={`Posts`}  inner texture HeaderImg={BannerBg}/>
                    <h2 className="blog-page-heading">Category - {name}</h2>

                    <div className="post-section">
                      <div className="blog-block">
                          {totalPosts.slice(0, index).map(({ node }) => (                          
                              <PostGridBlock PostTitle={node.title} Description={node.excerpt} PostDate={node.date} Category={Object.values(node.categories)[0].name} Image={node.jetpack_featured_media_url} Path={node.slug} CategoryPath={'blog/category/'+Object.values(node.categories)[0].name}></PostGridBlock>                           
                                 
                          ))}
                          {this.state.postsToShow < this.props.data.allWordpressPost.edges.length &&
                                <div onClick={() => {
                                  this.setState({
                                    postsToShow: this.state.postsToShow + 2,
                                  })
                                }}>
                                  <LoadMoreBtn></LoadMoreBtn>
                                </div>
                              }
                          {/* <Pagination
                                    rootPage='/blog/'
                                    currentPage={1}
                                    numberOfPages={numberOfPages}
                                /> */}
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
  