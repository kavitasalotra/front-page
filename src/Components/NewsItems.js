import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Heading from './element/Heading';
import Button from './element/Button';

export default function NewsItems() {
  return (
    <section className="section  has-text-centered">
      <div className="container">
        <div className="columns is-multiline is-centered">
          <div className="column is-10">
            <Heading text="NewsItems" />
            <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-1">
              GYHUKHIUJ
            </h2>
            <span>
              <Button border borderColor>
                <span>
                  {' '}
                  <IoIosArrowDroprightCircle /> see blog
                </span>
              </Button>
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left" />
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
