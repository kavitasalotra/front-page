import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
// import { graphql } from 'gatsby';
import styled from 'styled-components';
import Heading from './element/Heading';
import Button from './element/Button';
import blog from '../content/blog.yaml';

const Section = styled.div`
  .is-hovered:hover {
    color: ${(props) => props.theme.textColor}!important;
  }
`;

export default function NewsItems() {
  return (
    <Section className="section has-text-centered has-background-color">
      <div className="container">
        <div className="has-text-centered">
          <Heading color text={blog.title} />
          <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-1">
            {blog.subtitle}
          </h2>
          <span>
            <Button border borderColor width="25px">
              <span>
                {' '}
                <IoIosArrowDroprightCircle /> see blog
              </span>
            </Button>
          </span>
        </div>
        <div className="columns is-centered">
          {blog?.posts?.map((item) => (
            <div className="column is-4 m-3">
              <div className="card is-shadowless has-text-left">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={item.image} alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="block">
                    <h2 className="text-small is-title is-text-primary has-text-weight-bold is-hovered">
                      {item.title}
                    </h2>
                    <p className="has-text-grey-lite is-size-6 has-text-weight-normal my-6">
                      {item.description}
                    </p>
                    <span>
                      <a href="# " className="footer-item">
                        <IoIosArrowDroprightCircle className="mr-3" /> Save
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
