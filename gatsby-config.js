module.exports = {
  siteMetadata: {
    title: `Sukoon`,
    description: `Psychotherapy Center`,
    author: `@Deepak`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-150722051-1",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
      id: "GTM-PM83DZT",
      includeInDevelopment: false,
      },
    },
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sukoon`,
        short_name: `Sukoon`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `standalone`,
        icon: `src/images/sukoon-logo/logo_dark.png`,
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
          // Your WordPress source.
          baseUrl: `blog.sukoonhealth.com`,
          protocol: `https`,
          // Only fetches posts, tags and categories from the baseUrl.
          includedRoutes: ['**/posts', '**/tags', '**/categories'],
          // Not using ACF so putting it off.
          useACF: false,
          
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        ignore:["node_modules/slick-carousel/slick/slick-theme.css", "node_modules/slick-carousel/slick/slick.css"],
        purgeOnly: ["src/css/styles.css"]
      }
    }
  ]
};
