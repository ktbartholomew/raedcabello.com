const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___sort], order: ASC }) {
        nodes {
          id
          slug
          frontmatter {
            title
          }
          body
          excerpt
        }
      }
    }
  `).then((result) => {
    result.data.allMdx.nodes.forEach((node) => {
      actions.createPage({
        path: `/work/${node.slug}`,
        component: path.resolve('src/templates/WorkSingle.js'),
        context: node,
      });
    });
  });
};
