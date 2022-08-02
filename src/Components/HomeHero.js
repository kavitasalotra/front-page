import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Header from './Header';
import { theme } from '../utils/theme';
import Button from './element/Button';
import general from '../content/general/general.yaml';

const Wrapper = styled.div`
  .has-background-image {
    background-image: url('images/front-page-header.jpg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .dot {
    vertical-align: sub;
    color: ${theme.backgroundColorLite} !important;
    font-size: 3.3rem;
  }
`;

export default function HomeHero() {
  return (
    <Wrapper>
      <section className="hero has-background-image is-medium">
        <div className="hero-head">
          <Header />
        </div>
        <div className="hero-body has-text-centered">
          <div className="container columns is-multiline is-centered">
            <p className="is-title has-text-XL has-text-white is-line-height  has-text-weight-bold is-size-2-mobile">
              Clean
              <span className="dot is-size-2-mobile">•</span>
              Slick
              <span className="dot is-size-2-mobile">•</span>
              Pixel Perfect
            </p>
            <div className="column is-8">
              <p className="has-text-white is-size-6 has-text-weight-normal mb-5">
                {general.description}
              </p>
            </div>
            <div className="column is-7 is-flex is-justify-content-center is-flex-wrap-wrap">
              <Link to="/#service">
                <Button secondary padding width="204px" text="Service" />
              </Link>
              <Link to="/#about">
                <Button
                  border
                  padding
                  borderColor
                  width="204px"
                  text="About Us"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
