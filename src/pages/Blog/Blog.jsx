import React, { useState } from "react";
import styled from "styled-components";
import { graphql, StaticQuery,Link } from "gatsby";
import './css/blog.css'
import './css/normalize.css'
import './css/webflow.css'
// import {Pagination, PaginationItem,PaginationLink} from 'reactStrap'

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop"
import Banner from "../../components/Banner/desktop";
import PostGridBlock from "../../components/Blog grid/blog-grid"
import BlogCategorySidebar from "../../components/BlogCategorySection/BlogCategorySection";
import RecentPosts from "../../components/BlogRecentPosts/RecentPosts";
import PaginationLinks from "../../components/pagination-links"
import Pagination from '../../components/pagination'

// Images
import BannerBg from "../../images/Desktop-Header/pacientes-mejora.png";
import PopUp from "../../elements/PopUp/popUpDesktop";
import General from "../../components/common/general";
import { FormHelperText } from "@material-ui/core";

import postThumbnail from "../../components/Blog grid/images/National-Power-by-Mohd-Aram-on-Unsplash.jpg";


const BlogPage = (props) =>{

  return(          
            <div>             
                <Banner para width={`52vw`} marginLeft={`-30vw`} captionLight={`Blog`} captionBold={`Posts`}  inner texture HeaderImg={BannerBg}/>
                    <h2 className="blog-page-heading">{props.PageTitle}</h2>

                    <div className="post-section">
                      <div className="blog-block">
                          {props.Data.allWordpressPost.edges.map(({ node }) => (                           
                              <PostGridBlock PostTitle={node.title} Description={node.excerpt} PostDate={node.date} Category={Object.values(node.categories)[0].name} Image={node.jetpack_featured_media_url} Path={node.slug} CategoryPath={Object.values(node.categories)[0].path}></PostGridBlock>                           
                                 
                          ))}
                          
                          <Pagination
                                    rootPage={props.rootPage}
                                    currentPage={props.currentPage}
                                    numberOfPages={props.numberOfPages}
                                />
                      </div>

                      <div className="sidebar">
                        <RecentPosts></RecentPosts>
                        <BlogCategorySidebar> </BlogCategorySidebar>
                      </div>
                    </div>
                    
            </div>           
  )}
export default BlogPage;