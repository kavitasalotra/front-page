import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from './element/Heading';
import testimonial from '../content/testimonial.yaml';

const Wrapper = styled.div`
  .has-background-image {
    background-image: url('images/testiomnials-background.jpg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .toolwrapper {
    padding: 15px 20px;
    position: relative;
    text-align: center;
  }

  .toolwrapper .tooltip {
    bottom: 100%;
    display: block;
    left: 0;
    position: absolute;
  }
  .toolwrapper .tooltip:after {
    border-left: solid transparent 10px;
    border-right: solid transparent 10px;
    border-top: solid #6a4d8a 10px;
    bottom: -10px;
    content: ' ';
    height: 0;
    left: 50%;
    margin-left: -13px;
    position: absolute;
    width: 0;
  }
`;

export default function Testimonial() {
  const settings = {
    className: '',
    dots: true,
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
    <Wrapper>
      <section className="section is-medium has-text-centered  has-background-image">
        <div className="columns is-centered">
          <div className="column ">
            <Heading color text={testimonial.title} />
          </div>
        </div>
        <div className="container">
          <div className="has-text-centered">
            <Slider {...settings}>
              <div className="columns is-centered">
                <div className="column is-12">
                  <div className="is-flex is-justify-content-center">
                    {' '}
                    <figure className="image is-128x128">
                      <img
                        className="is-rounded"
                        src="https://bulma.io/images/placeholders/128x128.png"
                        alt="ygyjhb"
                      />
                    </figure>
                  </div>
                  <div className=" toolwrapper  has-text-white ">
                    <p className=" tooltip   has-background-purple has-text-white p-5">
                      Awesome theme with great design and awesome support. If
                      you don’t know how to code your own WordPress theme, but
                      you still want a good-looking website for your business,
                      Illdy might be exactly what you need. It is a slick theme
                      with a lot of of features to choose from.
                    </p>
                  </div>

                  <p>Height is adaptive</p>
                </div>
              </div>
              <div>
                <h3>3</h3>
                <p>See ....</p>
                <p>Height is adaptive</p>
              </div>
              <div>
                <h3>3</h3>
                <p>See ....</p>
                <p>Height is adaptive</p>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
