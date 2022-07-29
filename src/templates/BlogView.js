import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Header from '../Components/Header';
import Layout from '../Components/Layout';

const BlogPost = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <section
        className="hero is-fullheight"
        style={{
          backgroundImage: `url(/${post.frontmatter.featuredImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <div className="hero-body">
          <div className="has-text-centered">
            <p className="is-title has-text-white has-text-weight-bold is-size-1 is-size-2-mobile">
              {post?.frontmatter?.title}
            </p>
          </div>
        </div>
      </section>
      <div className="section">
        <div className="container">
          <div className="content">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        featuredImage
        description
      }
    }
  }
`;
export default BlogPost;
