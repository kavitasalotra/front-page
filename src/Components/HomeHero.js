import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Button from './element/Button';

const Wrapper = styled.div`
  .has-background-image {
    background-image: url('images/front-page-header.jpg') !important;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .dot {
    height: 25px;
    width: 25px;
    background-color: ${theme.backgroundColorLite} !important;
    border-radius: 50%;
    display: inline-block;
  }
`;

export default function HomeHero() {
  return (
    <Wrapper>
      <section class="hero has-background-image is-medium">
        <div class="hero-head">
          <Header />
        </div>
        <div class="hero-body">
          <div class="container columns is-multiline has-text-centered">
            <p class="column is-12 is-title has-text-XL has-text-white  has-text-weight-bold is-size-4-mobile">
              Clean
              <span class="dot"></span>
              Slick
              <span class="dot"></span>
              Pixel Perfect
            </p>
            <p class="column is-8 is-offset-2 has-text-white is-size-6 has-text-weight-normal is-size-7-mobile  mb-5">
              lldy is a great one-page theme, perfect for developers and
              designers but also for someone who just wants a new website for
              his business. Try it now!
            </p>
            <div className="column is-half is-offset-one-quarter has-text-centered">
              <Button
                className="button is-normal is-responsive py-5 px-6 is-size-6-mobile button-is-secondary  has-text-centered mr-5"
                text="Learn more"
              />
              <Button
                className="button is-normal is-responsive py-5 px-6 is-size-6-mobile button-is-primary  has-text-centered mr-5 "
                text="Download"
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
