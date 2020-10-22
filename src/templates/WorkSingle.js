import React from 'react';
import Main from '../layouts/Main';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const WorkSingle = ({ pageContext }) => {
  return (
    <Main>
      <h1>{pageContext.frontmatter.title}</h1>
      <MDXRenderer>{pageContext.body}</MDXRenderer>
    </Main>
  );
};

export default WorkSingle;
