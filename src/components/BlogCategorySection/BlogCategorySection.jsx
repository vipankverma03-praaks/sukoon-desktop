import React from "react";
import styled from "styled-components";
import './css/BlogCategorySection.css'
// import './css/normalize.css'
// import './css/webflow.css'
import { graphql, StaticQuery,Link } from "gatsby";

const Paragraph = styled.p`
        width: ${props=> props.width || '100%'};
        padding: ${props => props.padding || ''};
        text-align: ${props => props.textAlign || 'left'};
        line-height: ${props=> props.lineHeight || '1.625'};
        font-size: 20px;
        
        @media screen and (max-width: 1600px){
            font-size: 18px;
        }
        @media screen and (max-width: 1400px){
            font-size: 16px;
        }
`;

export default () => (
    <StaticQuery
      query={graphql`
      query {
            allWordpressCategory(filter: {wordpress_parent: {eq: 0}}) {
                edges {
                    node {
                        name
                        path
                        slug
                    }
                }
            }
          }
      `}
      
      render={data => (  
            <div className="sidebar-content-container categories">
                <div className="section-heading">
                    <h2 className="section-title">Categories</h2>
                    <div className="med-divider"></div>
                </div>
                <div className="tabs-block">
                    {data.allWordpressCategory.edges.map(({ node }) => (
                        <Link to={'blog/category/'+node.name}>
                            <div className="tag">{node.name}</div>                 
                        </Link>                    
                    ))}  
                </div>
            </div>
      )}
    />
  )

// const CategoriesSection = (props) =>{
//   return(
    
//   )
// };

// export default CategoriesSection;