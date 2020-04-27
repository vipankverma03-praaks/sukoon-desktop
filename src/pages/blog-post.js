import React  from "react";
import "../css/style.css";
import { graphql, StaticQuery,Link } from "gatsby";
import './css/blog-post.css'
import './css/normalize.css'
import './css/webflow.css'
import {DiscussionEmbed} from "disqus-react"

// Components
import Banner from "../components/Banner/desktop";
import BlogCategorySidebar from "../components/BlogCategorySection/BlogCategorySection";
import RecentPosts from "../components/BlogRecentPosts/RecentPosts";
import SinglePostShare from "../components/SinglePostShare/SinglePostShare";
import Layout from "../components/view/layout";
import SEO from "../components/seo";
import Loader from "../components/loader";

// Images
import BannerBg from "../images/Desktop-Header/pacientes-mejora.png";

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
    const baseUrl = 'https://sukoonhealth.com/';
    const post = data.allWordpressPost.edges[0].node
    const category=Object.values(post.categories)[0].name 
    const disqusShortname = "https-sukoonhealth-com" //found in your Disqus.com dashboard
    const disqusConfig = {
      url: baseUrl + post.slug, //this.props.pageUrl  baseUrl + post.slug
      identifier: post.id, //this.props.uniqueId
      title:post.title  //this.props.title
    }
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
            <div className="post-section single-post-page">
                  <div className="blog-block">
                  <img  src={BannerBg} className="featured-image-post" alt=""/>
                  <div className="category-tag single-post">{category}</div>
                  <h1 className="single-post-title">{post.slug}</h1>
                  <div className="thumbnail-post-date">{post.date}</div>
                    <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}>

                    </div>
                    <SinglePostShare></SinglePostShare>
                    <div className="comments-section">
                        <div className="discus-plugin">
                            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                        </div>
                    </div>    
                       {/* {props.Data.allWordpressPost.edges.map(({ node }) => (                           
                          <PostGridBlock PostTitle={node.title} Description={node.excerpt} PostDate={node.date} Category={Object.values(node.categories)[0].name} Image={node.jetpack_featured_media_url} Path={node.slug} CategoryPath={Object.values(node.categories)[0].path}></PostGridBlock>                           

                      ))} */}
                  </div>

                  <div className="sidebar">
                    <RecentPosts></RecentPosts>
                    <BlogCategorySidebar> </BlogCategorySidebar>
                  </div>
                </div>  :
                
            <div>             
                <Banner para width={`52vw`} marginLeft={`-30vw`} inner texture SinglePost="true"/>
                    <div className="post-section single-post-page">
                      <div className="blog-block">
                      <img  src={BannerBg} className="featured-image-post" alt=""/>
                      <div className="category-tag single-post">{category}</div>
                      <h1 className="single-post-title">{post.title}</h1>
                      <div className="thumbnail-post-date">{post.date}</div>
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}>
                           
                        </div>
                        <SinglePostShare></SinglePostShare>
                        <div className="comments-section">
                            <div className="discus-plugin">
                                <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                            </div>
                        </div>    
                           {/* {props.Data.allWordpressPost.edges.map(({ node }) => (                           
                              <PostGridBlock PostTitle={node.title} Description={node.excerpt} PostDate={node.date} Category={Object.values(node.categories)[0].name} Image={node.jetpack_featured_media_url} Path={node.slug} CategoryPath={Object.values(node.categories)[0].path}></PostGridBlock>                           
                                 
                          ))} */}
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
