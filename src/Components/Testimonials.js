import React from 'react';
import styled from 'styled-components';
import Heading from './element/Heading';
import TestimonialItem from './ TestimonialItems';

const Wrapper = styled.div`
  .has-background-image {
    background-image: url('images/testiomnials-background.jpg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export default function Testimonial() {
  return (
    <Wrapper>
      <section className="section  has-text-centered  has-background-image">
        <div className="columns is-centered">
          <div className="column ">
            <Heading color text="Testimonial" />
          </div>
        </div>
        <TestimonialItem />
      </section>
    </Wrapper>
  );
}
