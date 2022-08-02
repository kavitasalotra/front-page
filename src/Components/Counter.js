import React from 'react';
import styled from 'styled-components';

const data = [
  {
    id: 1,
    counterNumber: '260',
    counterTitle: 'PROJECTS',
  },
  {
    id: 2,
    counterNumber: '210',
    counterTitle: 'Clients',
  },
  {
    id: 3,
    counterNumber: '260',
    counterTitle: 'Coffes',
  },
];

const Wrapper = styled.div`
  background-image: url('images/front-page-counter.jpg');
  background-position: center;
  background-repeat: no-repeat;
  .lineDivider {
    border-right: 1px solid #e1e1e1;
    :last-child {
      border-right: 0px solid #e1e1e1;
    }
  }
`;

export default function Counter() {
  return (
    <Wrapper>
      <section className="section  has-text-centered">
        <div className="columns  is-flex-wrap-wrap">
          {data.map((item) => (
            <div className="column is-4 lineDivider">
              <span className="is-title has-text-white-lite text-large has-text-weight-bold">
                {item.counterNumber}
              </span>
              <p className="is-title has-text-white-lite text-base has-text-weight-bold">
                {item.counterTitle}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
