
const path = require(`path`);



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      posts: allWordpressPost
      {
        edges
        {
          node
          {
              path
              slug
              categories {
                slug
                path
                name
              }
          }
        }
      } 
    cats: allWordpressCategory
      {
        edges
        {
          node
          {
              name
              path
              slug
          }
        }
      }    
    }
  `).then(result =>
    {
        let totalPosts=0;
        
        result.data.posts.edges.forEach(({ node }) => {
            totalPosts=totalPosts+1
          createPage({
            // Decide URL structure
            path: 'blog/'+node.categories[0].name+'/'+node.slug,
            // path to template
            component: path.resolve(`./src/pages/blog-post.js`),
            context: {
              // This is the $slug variable
              // passed to categories.js
              slug: node.slug,
            },
          })
        })
        result.data.cats.edges.forEach(({ node }) => {            
          createPage({
            // Decide URL structure
            path: 'blog/category/'+node.name,
            // path to template
            component: path.resolve(`./src/pages/categories.js`),
            context: {
              // This is the $slug variable
              // passed to categories.js
              name: node.name,
              nodePath:node.path
            },
          })
        })
       
      
    //     const postsPerPage = 2;
    //     const numPages = Math.ceil(totalPosts/postsPerPage);
    //     Array.from({ length: numPages }).forEach((_, index) => {
    //         const isFirstPage = index === 0
    //         const currentPage = index+1

    //         if(isFirstPage) return

        
    //     createPage({
    //         // Decide URL structure
    //         path: index === 0 ? '' : `/blog/${index + 1}`,
    //         // path to template
    //         component: path.resolve(`./src/pages/blogList.js`),
    //         context: {
    //         // This is the $slug variable
    //         // passed to blog-post.js
    //         limit:postsPerPage,
    //             skip: index * postsPerPage,
    //             currentPage,
    //             numPages

    //         },
    //     })
    //  })
        
    })
}