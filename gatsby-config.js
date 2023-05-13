/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `motherfarkleberry`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "C2yXtHwRjFYX6L-cUAl0eCEtwk6irVigWMa4KDMF2Jk",
      "spaceId": "ip5zzxd1xtin",
    }
  }, 
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};