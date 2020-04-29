import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import './css/blog-grid.css';
// import './css/normalize.css';
// import './css/webflow.css';

// Images
import postThumbnail from "./images/National-Power-by-Mohd-Aram-on-Unsplash.jpg";


const ParagraphSection = (props) =>{
  return(
    <p Class="mt-8 w-3/5 text-para my-1 text-vlg leading-relaxed block">
      {props.para}
    </p>
  )
};
const PostDetails = (props) =>{
    return(
      <div className="post-details">
        <div className="post-author"><Link to={props.Path}>Read More</Link></div>
        <div className="html-embed w-embed"><img src="https://img.icons8.com/android/24/000000/circled-right.png"/></div>
      </div>
    )
};
const ThumbnailText = (props) =>{
    return (
      <div className="thumbnail-text">
        <div className="category-tag"><Link to={props.CategoryPath}>{props.Category} </Link></div>
        <div className="post-title"><Link to={props.Path}> {props.PostTitle} </Link></div>
        <div className="thumbnail-post-date">{props.PostDate}</div>
        <div className="preview-text" dangerouslySetInnerHTML={{ __html: props.Description.substring(0,150)+"...." }} />
      </div>
    )
};
const ThumbnailBlock = (props) =>{
    return(
      <div className="image-wrapper"><img className="thumbnail-image" src={props.Image}/></div> 
    )
};

const PostGridBlock = (props) => {

  return (
    <div className="blog-post-wrapper">
    <ThumbnailBlock Image={props.Image}></ThumbnailBlock>
    <div className="content-wrap">
      <ThumbnailText Category={props.Category} CategoryPath={props.CategoryPath} PostTitle={props.PostTitle} PostDate={props.PostDate} Description={props.Description} Path={props.Path}></ThumbnailText>      
      <PostDetails Path={props.Path}></PostDetails>
    </div>
  </div>   
  )
};


export default PostGridBlock;