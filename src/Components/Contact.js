import React from 'react';
import styled from 'styled-components';
import { RiFacebookFill } from 'react-icons/ri';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import contact from '../content/general/contact.yaml';
import Heading from './element/Heading';
import ContactForm from './ContactForm';

const Wrapper = styled.div`
  .lineDivider {
    border-left: 1px solid #e1e1e1;
  }
`;

export default function Contact() {
  return (
    <Wrapper className="section  has-text-centered">
      <div className="container">
        <Heading text={contact.title} />
        <div className="columns section px-0 pt-6 mt-3">
          {contact?.residence?.map((item) => (
            <div className="column is-4 has-text-left is-flex">
              <div className="has-text-color box is-shadowless is-size-6 has-  py-2">
                {' '}
                {item.detail}
              </div>
              <p className="has-text-grey-lite  box is-shadowless is-size-6 lineDivider has-text-weight-normal  py-2  pl-4">
                {item.info}
              </p>
            </div>
          ))}
          <div className=" column is-4  is-flex is-justify-content-end">
            <div className="level-right level is-mobile">
              <a
                href="https://twitter.com/"
                className="level-item social-icons has-text-grey-lite "
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/"
                className="level-item social-icons has-text-grey-lite"
              >
                {' '}
                <RiFacebookFill />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="level-item social-icons has-text-grey-lite"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </Wrapper>
  );
}
