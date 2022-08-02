import React from 'react';
import { graphql, Link } from 'gatsby';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import styled from 'styled-components';
import Layout from '../Components/Layout';
import Heading from '../Components/element/Heading';
import blog from '../content/general/blog.yaml';
import Header from '../Components/Header';

const Section = styled.div`
  .is-hovered {
    color: ${(props) => props.theme.mainBrandColor};
    :hover {
      color: ${(props) => props.theme.textColorPurple}!important;
    }
  }
  .text-small:hover {
    color: ${(props) => props.theme.textColor}!important;
  }
`;

export const pageQuery = graphql`
  {
    allMdx(sort: { fields: body }) {
      edges {
        node {
          slug
          frontmatter {
            title
            image
            description
          }
          id
          body
        }
      }
    }
  }
`;

export default function service({ data }) {
  const post = data.allMdx.edges;
  console.log(post, 'post');
  return (
    <Layout>
      <Header background />
      <div className="section has-text-centered has-background-color pt-6">
        <div className="container">
          <div className="has-text-centered">
            <Heading color text={blog.title} />
            <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-1">
              {blog.subtitle}
            </h2>
            <Section className="columns is-multiline mt-5">
              {post.map(({ node }) => (
                <div className="column is-4">
                  <div className="card is-shadowless has-text-left">
                    <div className="card-image">
                      <figure className="image is-3by2">
                        <img src={node.frontmatter.image} alt="Placeholder" />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="block">
                        <h2 className=" is-title  has-text-weight-bold">
                          <Link
                            to={`/${node.slug}`}
                            className="is-text-primary text-small"
                          >
                            {' '}
                            {node.frontmatter.title}
                          </Link>
                        </h2>
                        <p className="has-text-grey-lite is-size-6 has-text-weight-normal my-6">
                          {node.frontmatter.description}
                        </p>
                        <span>
                          <a
                            href={`/${node.slug}`}
                            className="footer-item is-hovered "
                          >
                            <IoIosArrowDroprightCircle className="mr-3" /> Read
                            more
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
