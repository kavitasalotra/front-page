import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .navbar {
    background: ${(props) =>
      props.background ? props.theme.mainBrandColor : props.theme.none};
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
`;

export default function Header({ background }) {
  return (
    <Wrapper background={background}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand ">
            <a className="navbar-item" href="/">
              <img src="images/cropped-logo-1.png" alt="logo" />
            </a>
            <a
              href=" "
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className="navbar-menu is-justify-content-flex-end"
          >
            <div className="navbar-end ">
              <div className="navbar-item  is-size-6 has-text-weight-bold">
                <Link
                  to="/#about"
                  className="navbar-item ml-4 is-hovered  has-text-white-lite"
                >
                  About
                </Link>
                <Link
                  to="/ "
                  className="navbar-item ml-4 is-hovered  has-text-white-lite"
                >
                  Portfolio
                </Link>
                <Link
                  to="/#testimonial"
                  className="navbar-item  ml-4 is-hovered  has-text-white-lite"
                >
                  Testimonials
                </Link>
                <Link
                  to="/#service"
                  className="navbar-item   ml-4 is-hovered  has-text-white-lite"
                >
                  Services
                </Link>
                <Link
                  to="/blogs"
                  className="navbar-item  ml-4 is-hovered  has-text-white-lite"
                >
                  Blog
                </Link>
                <Link
                  to="/#team"
                  className="navbar-item   ml-4 is-hovered  has-text-white-lite"
                >
                  Our Team
                </Link>
                <Link
                  to="/contact "
                  className="navbar-item ml-4 is-hovered  has-text-white-lite"
                >
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
