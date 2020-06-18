import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery,Link } from "gatsby";
import './css/BlogRecentPosts.css';
// import './css/normalize.css';
// import './css/webflow.css';

export default () => (
    <StaticQuery
    query={graphql`
    query {
      allWordpressPost(sort: {order: DESC, fields: date}, filter: {date: {gt: ""}}, limit: 5, skip: 4) {
            edges {
              node {
                title
                excerpt
                slug
                jetpack_featured_media_url
                date(formatString: "MMMM DD, YYYY")
                categories {          
                  name
                }
              }
            }
          }
        }
    `}
      
      render={data => (  
        <div className="sidebar-content-container recent-posts">
            <div className="section-heading">
                <h2 className="section-title">Basics</h2>
                <div className="med-divider"></div>
            </div>
            <div className="tabs-block recent-posts">
                {data.allWordpressPost.edges.map(({ node }) => (                            
                    <div className="recent-post-wrap">
                    <div className="recent-post-content-block">
                        <div className="recent-post-date">{node.date}</div>
                        <div className="recent-post-title"><Link to={'blog/'+node.slug}>{node.title}</Link></div>
                    </div>
                    <img src={node.jetpack_featured_media_url} className="recent-post-thumbnail"/>
                    </div>           
                ))} 
            </div>
        </div>
      )}
    />
  )
