import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Wrapper = styled.div`
  .navbar-item img {
    max-height: 5rem;
  }
  .is-hovered:hover {
    color: ${theme.textColor}!important;
    background-color: transparent !important;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <div className="container py-2">
        <nav class="navbar " role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="images/cropped-logo-1.png" alt="logo" />
            </a>
            <a
              href=" "
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            id="navbarBasicExample"
            class="navbar-menu is-justify-content-flex-end"
          >
            <div class="navbar-end ">
              <div class="navbar-item  is-size-6 has-text-weight-bold">
                <Link
                  to=" /"
                  class="navbar-item has-text-white ml-4 is-hovered"
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  class="navbar-item has-text-white ml-4 is-hovered"
                >
                  Portfolio
                </Link>
                <Link to=" " class="navbar-item has-text-white ml-4 is-hovered">
                  Testimonials
                </Link>
                <Link
                  to=" "
                  class="navbar-item has-text-white  ml-4 is-hovered"
                >
                  Services
                </Link>
                <Link
                  to=" "
                  class="navbar-item has-text-white  ml-4 is-hovered"
                >
                  Blog
                </Link>
                <Link
                  to=" "
                  class="navbar-item has-text-white  ml-4 is-hovered"
                >
                  Our Team
                </Link>
                <Link
                  to=" "
                  class="navbar-item has-text-white  ml-4 is-hovered"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Wrapper>
  );
}
