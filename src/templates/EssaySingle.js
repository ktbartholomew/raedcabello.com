import React from 'react';
import Main from '../layouts/Main';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const WorkSingle = ({ location, pageContext }) => {
  return (
    <Main location={location}>
      <div className="essay single">
        <h1>{pageContext.frontmatter.title}</h1>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </div>
    </Main>
  );
};

export default WorkSingle;
