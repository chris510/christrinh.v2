const config = require('./config/index');

module.exports = {
  siteMetadata: {w
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ChristopherTrinh',
        short_name: 'ChrisTrinh',
        start_url: '/',
        background_color: config.darkNavyColor,
        theme_color: config.navyColor,
        display: 'minimal-ui',
        // icon: 'src/images/favicons/apple-touch-icon.png',
      },
    },
  ],
}
