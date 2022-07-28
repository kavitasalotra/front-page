import React from 'react';
import styled from 'styled-components';
import Button from './element/Button';

const Section = styled.div`
  .textarea,
  .input {
    border-radius: 0;
  }
  .input {
    height: 35px;
  }
`;
export default function ContactForm() {
  return (
    <Section className="section has-text-left px-0 pt-0">
      <div className="field is-horizontal m-3 mb-1">
        <div className="field-body">
          <div className="field m-3">
            <label className="has-text-grey-lite mb-0">
              Your Name (required)
            </label>
            <div className="control">
              <input className="input mr-5" type="text" />
            </div>
          </div>
          <div className="field m-3">
            <label className="has-text-grey-lite mb-0">
              Your Email (required)
            </label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field m-3">
            <label className="has-text-grey-lite mb-0">Subject</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal  m-3">
        <div className="field-body">
          <div className="field m-3">
            <label className=" has-text-grey-lite mb-0">Your Message</label>
            <div className="control">
              <textarea className="textarea  is-large" />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal is-justify-content-flex-end">
        <Button border borderColor text="Send" />
      </div>
    </Section>
  );
}
