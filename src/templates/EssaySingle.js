import React from 'react';
import Main from '../layouts/Main';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const EssaySingle = ({ location, pageContext }) => {
  console.log(pageContext);
  return (
    <Main location={location}>
      <article className="essay single">
        <header>
          <h1>{pageContext.frontmatter.title}</h1>
          <div className="mb-4">{pageContext.frontmatter.subtitle}</div>
          <div className="text-black-muted">
            {new Date(
              pageContext.frontmatter.publish_date
            ).toLocaleDateString()}
          </div>
        </header>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </article>
    </Main>
  );
};

export default EssaySingle;
