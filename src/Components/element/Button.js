import * as React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .button {
    border: 3px solid
      ${(props) =>
        props.border
          ? props.theme.mainBrandColor
          : props.theme.textColorwhitelite} !important;
    :hover {
      border-color: ${(props) =>
        props.borderColor
          ? props.theme.backgroundColor
          : props.theme.textColorwhitelite} !important;
    }
  }
`;

const Button = ({
  text,
  children,
  border,
  borderColor,
  secondary,
  ...props
}) => {
  return (
    <Section border={border} borderColor={borderColor}>
      <button
        type="button"
        className={`button is-normal is-responsive py-5 px-6 is-size-6-mobile has-text-centered m-4 ${
          secondary ? 'button-is-secondary' : 'button-is-primary'
        } `}
        style={{ width: `${props.width}` }}
        {...props}
      >
        {text || children}
      </button>
    </Section>
  );
};

export default Button;
