module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-mdx',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'work',
        path: `${__dirname}/content/work`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'essays',
        path: `${__dirname}/content/essays`,
      },
    },
  ],
};
