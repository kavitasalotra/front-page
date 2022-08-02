import * as React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .button {
    border: 3px solid
      ${(props) =>
        props.border
          ? props.theme.mainBrandColor
          : props.theme.textColorWhiteLite} !important;
    :hover {
      border-color: ${(props) =>
        props.borderColor
          ? props.theme.backgroundColor
          : props.theme.textColorWhiteLite} !important;
    }
  }
`;

const Button = ({
  text,
  children,
  border,
  borderColor,
  secondary,
  padding,
  ...props
}) => {
  return (
    <Section border={border} borderColor={borderColor}>
      <button
        type="button"
        className={`button is-normal has-text-white-lite is-responsive is-size-6-mobile has-text-centered has-text-weight-semibold m-4 ${
          secondary ? 'button-is-secondary' : 'button-is-primary'
        }  ${padding ? ' py-5 px-6' : 'px-6 py-0 '}`}
        style={{ width: `${props.width}` }}
        {...props}
      >
        {text || children}
      </button>
    </Section>
  );
};

export default Button;
