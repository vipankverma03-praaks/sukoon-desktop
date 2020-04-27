import React, { useState } from "react";
import styled from "styled-components";
import { graphql, StaticQuery,Link } from "gatsby";
import './css/blog-post.css'
import './css/normalize.css'
import './css/webflow.css'
import {DiscussionEmbed} from "disqus-react"

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop"
import Banner from "../../components/Banner/desktop";
import PostGridBlock from "../../components/Blog grid/blog-grid"
import BlogCategorySidebar from "../../components/BlogCategorySection/BlogCategorySection";
import RecentPosts from "../../components/BlogRecentPosts/RecentPosts";
import SinglePostShare from "../../components/SinglePostShare/SinglePostShare";

// Images
import BannerBg from "../../images/Desktop-Header/pacientes-mejora.png";
import PopUp from "../../elements/PopUp/popUpDesktop";
import General from "../../components/common/general";
import { FormHelperText } from "@material-ui/core";

import postThumbnail from "../../components/Blog grid/images/National-Power-by-Mohd-Aram-on-Unsplash.jpg";


const SinglePost = (props) =>{
    const baseUrl = 'https://sukoonhealth.com/'
    const post = props.Data.allWordpressPost.edges[0].node
    const category=Object.values(post.categories)[0].name 
    const disqusShortname = "https-sukoonhealth-com" //found in your Disqus.com dashboard
    const disqusConfig = {
      url: baseUrl + post.slug, //this.props.pageUrl  baseUrl + post.slug
      identifier: post.id, //this.props.uniqueId
      title:post.title  //this.props.title
    }


  return(          
            <div>             
                <Banner para width={`52vw`} marginLeft={`-30vw`} inner texture SinglePost="true"/>
                    <div className="post-section single-post-page">
                      <div className="blog-block">
                      <img  src={BannerBg} className="featured-image-post"/>
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
  )}
export default SinglePost;