import React from 'react';
import Main from '../layouts/Main';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const WorkSingle = ({ location, pageContext }) => {
  return (
    <Main location={location}>
      <h1>{pageContext.frontmatter.title}</h1>
      <MDXRenderer>{pageContext.body}</MDXRenderer>
    </Main>
  );
};

export default WorkSingle;