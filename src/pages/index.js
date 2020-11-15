import React from 'react';
import Main from '../layouts/Main';

import { graphql } from 'gatsby';

const IndexPage = ({ data, location }) => {
  console.log(data);
  return (
    <Main location={location}>
      <div className="max-w-5xl mx-auto">
        <h1 className="dark:text-lightgreen">
          I design &amp; build products for the web.
        </h1>
        <p className="text-xl mb-10">
          I’m a Product Designer based in San Antonio, TX. I’m currently a Sr.
          Product Designer at H-E-B — an American privately held supermarket
          chain based in Texas. Below is a sampling of work that reflects
          experience in multiple disciplines. You can find me on{' '}
          <a href="https://www.linkedin.com/in/raedcabello">LinkedIn</a>,{' '}
          <a href="https://twitter.com/raedcabello">Twitter</a>,{' '}
          <a href="https://open.spotify.com/user/raedcabello">Spotify</a>, and{' '}
          <a href="https://instagram.com/raedcabello">Instagram</a>.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {data.allFile.nodes.map((n) => {
            return (
              <div key={n.id}>
                <a
                  href={`/work/${n.childMdx.slug}`}
                  className="link-block text-black"
                >
                  <div
                    className="bg-placeholder mb-6"
                    style={{ height: '200px' }}
                  ></div>
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
  query IndexQuery {
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
`;