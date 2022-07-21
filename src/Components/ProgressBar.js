import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .progress {
    height: 4px;
  }
`;

const ProgressBar = ({ works }) => {
  return (
    <Wrapper>
      <section class="section">
        <div className="columns">
          {works.map((item) => (
            <div key={item.id} className="column is-4 has-text-lite">
              <progress
                class="progress"
                value={item.value}
                max="100"
                style={{ color: item.color }}
              >
                {item.value}%
              </progress>
              <span class="icon-text is-flex">
                <span class="icon">{item.icon}</span>
                <span style={{ color: item.color }}>{item.title}</span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default ProgressBar;
