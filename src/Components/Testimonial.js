import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from './element/Heading';
import testimonial from '../content/general/testimonial.yaml';

const Wrapper = styled.div`
  .has-background-image {
    background-image: url('images/testiomnials-background.jpg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  /* tooltip element with border */
  .tooltip {
    position: relative;
    padding: 15px;
    margin: 1em 0 3em;
    border: 5px solid #6a4d8a;
    color: #333;
    background: #fff;
  }
  /* triangle green, first, below */
  .tooltip::before {
    content: '';
    position: absolute;
    bottom: -20px;
    right: 46%;
    border-width: 20px 20px 0;
    border-style: solid;
    border-color: #6a4d8a transparent;
  }
`;

export default function Testimonial() {
  const settings = {
    className: '',
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper id="testimonial">
      <section className="section has-text-centered  has-background-image">
        <div className="has-text-centered  mb-6">
          <Heading color text={testimonial.title} />
        </div>
        <div className="container">
          <div className="has-text-centered">
            <div className="columns is-centered">
              <div className="column is-10">
                <Slider {...settings}>
                  {testimonial?.reviews?.map((item) => (
                    <div>
                      <div className="is-flex is-justify-content-center">
                        <figure className="image is-128x128 mb-4">
                          <img
                            className="is-rounded"
                            src={item.image}
                            alt="testimonial"
                          />
                        </figure>
                      </div>
                      <div className="has-text-white">
                        <div className=" tooltip has-background-purple is-size-6 has-text-white">
                          {item.description}
                        </div>
                      </div>
                      <div className="mt-3 has-text-white ">
                        <span className="text-base is-title has-text-weight-bold">
                          {item.user}
                        </span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
