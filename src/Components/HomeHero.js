import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Button from './element/Button';
import general from '../content/general.yaml';

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
  }
`;

export default function HomeHero() {
  return (
    <Wrapper>
      <section class="hero has-background-image is-medium">
        <div class="hero-head">
          <Header />
        </div>
        <div class="hero-body has-text-centered">
          <div class="container columns is-multiline is-centered">
            <p class="is-title has-text-XL has-text-white  has-text-weight-bold is-size-3-mobile">
              Clean
              <span class="dot">•</span>
              Slick
              <span class="dot">•</span>
              Pixel Perfect
            </p>
            <div className="column is-8">
              <p class="has-text-white is-size-6 has-text-weight-normal mb-5">
                {general.description}
              </p>
            </div>
            <div className="column is-7">
              <Button
                className="button is-normal is-responsive py-5 px-6 is-size-6-mobile button-is-secondary  has-text-centered m-4"
                text="Learn more"
              />
              <Button
                className="button is-normal is-responsive py-5 px-6 is-size-6-mobile button-is-primary  has-text-centered m-4"
                text="Download"
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
