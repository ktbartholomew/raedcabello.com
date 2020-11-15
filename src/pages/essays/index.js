import React from 'react';
import Main from '../../layouts/Main';

import { graphql } from 'gatsby';

const IndexPage = ({ data, location }) => {
  console.log(data);
  return (
    <Main location={location}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-1 gap-10">
          {data.allFile.nodes.map((n) => {
            return (
              <div key={n.id}>
                <a
                  href={`/essays/${n.childMdx.slug}`}
                  className="link-block text-black"
                >
                  <h3>{n.childMdx.frontmatter.title}</h3>
                  <p>{n.childMdx.frontmatter.excerpt}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Main>
  );
};

export default IndexPage;

export const query = graphql`
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
`;
