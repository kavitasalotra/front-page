import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .navbar {
    background: ${(props) =>
      props.background ? props.theme.backgroundColor : props.theme.none};
  }
  .navbar-item,
  .navbar-link,
  .navbar-burger {
    color: ${(props) => props.theme.textColorWhiteLite} !important;
  }
  .navbar-item img {
    max-height: 5rem;
  }
  .is-hovered:hover {
    color: ${(props) => props.theme.textColor}!important;
    background-color: transparent !important;
  }
  .navbar-item:focus,
  .navbar-item:focus-within {
    background-color: transparent;
    color: ${(props) => props.theme.textColorWhiteLite}!important;
  }
  @media screen and (max-width: 1023px) {
    .navbar-menu {
      background-color: #d9d9d9 !important;
    }
  }
`;

export default function Header({ background }) {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <Wrapper background={background}>
      <nav className="navbar " role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand  ">
            <a className="navbar-item" href="/">
              <img src="images/cropped-logo-1.png" alt="logo" />
            </a>
            <button
              type="button"
              onClick={handleToggle}
              className={`navbar-burger ${active && 'is-active'}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div
            id="navbarBasicExample"
            className={`navbar-menu is-justify-content-flex-end ${
              active && 'is-active'
            }`}
          >
            <div className="navbar-end">
              <div className="navbar-item  is-size-6 has-text-weight-bold color">
                <Link to="/#about" className="navbar-item ml-4 is-hovered">
                  About
                </Link>
                <Link to="/ " className="navbar-item ml-4 is-hovered">
                  Portfolio
                </Link>
                <Link
                  to="/#testimonial"
                  className="navbar-item  ml-4 is-hovered"
                >
                  Testimonials
                </Link>
                <Link to="/#service" className="navbar-item  ml-4 is-hovered ">
                  Services
                </Link>
                <Link to="/blogs" className="navbar-item  ml-4 is-hovered ">
                  Blog
                </Link>
                <Link to="/#team" className="navbar-item   ml-4 is-hovered">
                  Our Team
                </Link>
                <Link to="/contact " className="navbar-item ml-4 is-hovered">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}
