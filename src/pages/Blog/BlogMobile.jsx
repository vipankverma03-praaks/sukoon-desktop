import React, {useState} from "react";
import styled from "styled-components";
import './css/blog.css'
import './css/normalize.css'
import './css/webflow.css'

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile"
import Banner from "../../components/Banner/mobile";
import PostGridBlock from "../../components/Blog grid/blog-grid"
import BlogCategorySidebar from "../../components/BlogCategorySection/BlogCategorySection";
import RecentPosts from "../../components/BlogRecentPosts/RecentPosts";

// Images
import BannerBg from "../../images/servicesBg.png";


const PostSection = styled.div`
.post-section {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 2% 7%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}
@media screen and (max-width: 767px) {
  .post-section {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      padding-left: 7%;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      direction: ltr;
    }
  }
`;
const BlogBlock = styled.div`
.blog-block {
  display: block;
  overflow: hidden;
  width: 65%;
  margin: auto 0px;
  padding-left: 0%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  font-size: 10px;
  line-height: 10px;
}
@media screen and (max-width: 991px) {
  .blog-block {
    width: 80%;
  }
}
@media screen and (max-width: 767px) {
  .blog-block {
    display: block;
    width: 100%;
  }
}
@media screen and (max-width: 479px) {
  .blog-block {
    padding-right: 0%;
    padding-left: 0%;
  }
}

`;

function AboutPage(props) {

  return (
    <>
      <Banner captionLight={`Blog`} captionBold={`Posts`} overlay={props.overlay} backgroundImg={BannerBg}/>
      <h2 className="blog-page-heading">MOST RECENT POSTS</h2>

        <div className="post-section">
            <div className="blog-block">
                {props.Data.allWordpressPost.edges.map(({ node }) => (                           
                    <PostGridBlock PostTitle={node.title} Description={node.excerpt} PostDate={node.date} Category={Object.values(node.categories)[0].name} Image={node.jetpack_featured_media_url} Path={node.slug} CategoryPath={Object.values(node.categories)[0].path}></PostGridBlock>                           
                        
                ))}
                <PaginationLinks currentPage={props.currentPage} numberOfPages={props.numberOfPages} />
            </div>

            <div className="sidebar">
            <RecentPosts></RecentPosts>
            <BlogCategorySidebar> </BlogCategorySidebar>
            </div>
        </div>
    </>
  );
}

export default AboutPage;
