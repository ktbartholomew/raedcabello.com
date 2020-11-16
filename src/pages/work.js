import React from 'react';
import Main from '../layouts/Main';

import { graphql } from 'gatsby';

const WorkPage = ({ data, location }) => {
  return (
    <Main location={location}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xl mb-10">
          I’ve designed and built products for Enterprise companies, successful
          startups, and everything in-between for over a decade. My work leans
          heavily towards simplicity and clutter-free layouts that focus on
          content and user-centered workflows that feel natural. Below is a
          sampling of work that will reflect experience in multiple disciplines.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {data.allMdx.nodes.map((n) => {
            return (
              <div key={n.id}>
                <a
                  href={`/work/${n.slug}`}
                  className="link-block text-black-black"
                >
                  <div
                    className="bg-placeholder mb-6"
                    style={{ height: '200px' }}
                  ></div>
                  <h3>{n.frontmatter.title}</h3>
                  <p>{n.excerpt}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Main>
  );
};

export default WorkPage;

export const query = graphql`
  query WorkItems {
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
`;
