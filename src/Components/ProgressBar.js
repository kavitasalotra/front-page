import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .progress {
    height: 4px;
  }
  .tooltip {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .tooltip .tooltiptext {
    width: 120px;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -60px;
  }
  .tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #f1d204 transparent transparent transparent;
  }
`;

const ProgressWrapper = styled.div`
  .progress.is-primary::-moz-progress-bar {
    background-color: ${(props) => props.color};
    color: ${(props) => props.color};
  }
`;

const ProgressBar = ({ works }) => {
  return (
    <Wrapper>
      <section className="section">
        <div className="columns">
          {works.map((item) => (
            <ProgressWrapper
              key={item.id}
              className="column is-4 has-text-lite"
              color={item.color}
            >
              <div className="tooltip">
                <progress
                  className="progress is-primary "
                  value={item.value}
                  max="100"
                >
                  {item.value}%
                </progress>
                <span className="icon-text is-flex">
                  <span style={{ color: item.color }}>{item.title}</span>
                </span>
                <span
                  className="tooltiptext  has-text-white-lite "
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  {' '}
                  {item.value}%
                </span>
              </div>
            </ProgressWrapper>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default ProgressBar;
