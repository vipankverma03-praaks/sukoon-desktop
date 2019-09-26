module.exports = {
  siteMetadata: {
    title: `Sukoon`,
    description: `Psychotherapy Center`,
    author: `@Deepak`
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sukoon`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/sukoon-logo/logo_dark.png`
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
