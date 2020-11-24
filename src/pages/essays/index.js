import React from 'react';
import Main from '../../layouts/Main';

import { graphql } from 'gatsby';

const IndexPage = ({ data, location }) => {
  return (
    <Main location={location}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-1 gap-10">
          {data.allFile.nodes.map((n) => {
            return (
              <div key={n.id} className="mb-4">
                <a
                  href={`/essays/${n.childMdx.slug}`}
                  className="link-block text-black-black"
                >
                  <h3>{n.childMdx.frontmatter.title}</h3>
                  <div className="text-black-muted mb-2">
                    {new Date(
                      n.childMdx.frontmatter.publish_date
                    ).toLocaleDateString()}
                  </div>
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
      filter: { sourceInstanceName: { eq: "essays" }, extension: { eq: "mdx" } }
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
            subtitle
            publish_date
            update_date
            excerpt
            sort
          }
        }
      }
    }
  }
`;
