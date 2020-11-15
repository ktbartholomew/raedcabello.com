const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  return Promise.all([
    graphql(`
      {
        allFile(
          filter: { sourceInstanceName: { eq: "work" } }
          sort: { fields: childMdx___frontmatter___sort, order: ASC }
        ) {
          nodes {
            id
            name
            childMdx {
              slug
              body
              frontmatter {
                categories
                title
                excerpt
                sort
              }
            }
          }
        }
      }
    `).then((result) => {
      return result.data.allFile.nodes.forEach((node) => {
        actions.createPage({
          path: `/work/${node.childMdx.slug}`,
          component: path.resolve('src/templates/WorkSingle.js'),
          context: node.childMdx,
        });
      });
    }),
    graphql(`
      query EssayQuery {
        allFile(
          filter: { sourceInstanceName: { eq: "essays" } }
          sort: { fields: childMdx___frontmatter___sort, order: ASC }
        ) {
          nodes {
            id
            name
            childMdx {
              slug
              body
              frontmatter {
                categories
                title
                excerpt
                sort
              }
            }
          }
        }
      }
    `).then((result) => {
      return result.data.allFile.nodes.forEach((node) => {
        actions.createPage({
          path: `/essays/${node.childMdx.slug}`,
          component: path.resolve('src/templates/EssaySingle.js'),
          context: node.childMdx,
        });
      });
    }),
  ]);
};
