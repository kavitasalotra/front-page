import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import styled from 'styled-components';

const Section = styled.div`
  .is-hovered:hover {
    color: ${(props) => props.theme.textColorPurple}!important;
  }
  .text-small:hover {
    color: ${(props) => props.theme.textColor}!important;
  }
`;

export default function BlogItem({ post }) {
  return (
    <Section>
      <div className="columns is-centered pt-6">
        {post.map((item) => (
          <div className="column is-4 m-1">
            <div className="card is-shadowless has-text-left">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={item.image} alt="Placeholder" />
                </figure>
              </div>
              <div className="card-content">
                <div className="block">
                  <h2 className="text-small is-title is-text-primary has-text-weight-bold ">
                    {item.title}
                  </h2>
                  <p className="has-text-grey-lite is-size-6 has-text-weight-normal my-6">
                    {item.description}
                  </p>
                  <span>
                    <a
                      href="# "
                      className="footer-item is-hovered has-text-color"
                    >
                      <IoIosArrowDroprightCircle className="mr-3" /> Read more
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
