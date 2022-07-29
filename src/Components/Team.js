import React from 'react';
import styled from 'styled-components';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Heading from './element/Heading';
import team from '../content/general/team.yaml';

const Wrapper = styled.div`
  section {
    background-image: url(https://colorlibhub.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png) !important;
  }
  .social-icons {
    width: 25px;
    height: 25px;
    line-height: 25px;
    display: inline-block;
    border-radius: 50%;
    font-size: 13px;
    text-align: center;
    border: 1px solid;
  }
  .image img {
    object-fit: scale-down;
  }
  color: ${(props) => props.color};
`;

export default function Team() {
  return (
    <Wrapper>
      <section id="team" className="section has-text-centered">
        <div className="container">
          <Heading text={team.title} />
          <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-1">
            {team.description}
          </h2>
          <section className="section px-0">
            <div className="columns is-desktop">
              {team?.teamInfo?.map((item) => (
                <div className="column is-4" color={item.color}>
                  {' '}
                  <article className="media">
                    <figure className="image is-128x128 mr-4">
                      <img src={item.image} alt="team" className="is-rounded" />
                    </figure>
                    <div className="media-content has-text-left">
                      <h1 className=" title is-title is-text-primary text-base has-text-weight-bold mb-3">
                        {item.teamMemberName}
                      </h1>
                      <h2
                        className="subtitle is-size-6 has-text-weight-normal mb-4 mt-1"
                        style={{ color: item.color }}
                      >
                        {item.post}
                      </h2>
                      <p className="has-text-grey-lite is-size-6 has-text-weight-normal">
                        {item.features}
                      </p>
                      <nav className="level is-mobile mt-3">
                        <div className="level-left">
                          <a
                            href=" "
                            className="level-item social-icons"
                            style={{ color: item.color }}
                          >
                            <TiSocialFacebook />
                          </a>
                          <a
                            href=" "
                            className="level-item social-icons"
                            style={{ color: item.color }}
                          >
                            {' '}
                            <FaTwitter />
                          </a>
                          <a
                            href=" "
                            className="level-item social-icons"
                            style={{ color: item.color }}
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Wrapper>
  );
}
