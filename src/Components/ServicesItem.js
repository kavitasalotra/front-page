import React from 'react';
import styled from 'styled-components';

const ServiceWrapper = styled.div`
  color: ${(props) => props.color};
`;

export default function ServicesItem({ services }) {
  return (
    <section className="section">
      <div className="columns">
        {services.map((item) => (
          <ServiceWrapper
            className="column is-4"
            key={item.id}
            color={item.color}
          >
            <span className="is-size-2 has-text-weight-bold mb-4">
              {item.icon}
            </span>
            <h2
              className="text-small is-title has-text-weight-bold"
              style={{ color: item.color }}
            >
              {item.title}
            </h2>
            <p className="has-text-grey-lite is-size-6 has-text-weight-normal  mt-2">
              {item.description}
            </p>
          </ServiceWrapper>
        ))}
      </div>
    </section>
  );
}
