import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  .has-text-grey-lite:hover {
    color: ${(props) => props.theme.lightCreamAccent};
  }
  .section {
    background-color: #242320;
  }
  .text-style:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div className="footer has-background-blackLite has-text-white p">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <h2 className="is-title has-text-white-lite text-small has-text-weight-bold">
                PRODUCTS
              </h2>
              <div className="content">
                <ol type="none">
                  <li className="mb-4">
                    <Link to="/#service" className="has-text-grey-lite">
                      ➣ Our work
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#Club" className="has-text-grey-lite">
                      ➣ Club
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/blogs" className="has-text-grey-lite">
                      ➣ News
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#Announcement" className="has-text-grey-lite">
                      ➣ Announcement{' '}
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
            <div className="column is-3">
              <h2 className="is-title text-small has-text-white-lite has-text-weight-bold">
                INFORMATION
              </h2>
              <div className="content">
                <ol type="none">
                  <li className="mb-4">
                    <Link to="#Pricing work" className="has-text-grey-lite">
                      ➣ Pricing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#Terms" className="has-text-grey-lite">
                      ➣ Terms
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#Affiliates" className="has-text-grey-lite">
                      ➣ Affiliates
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/Blog" className="has-text-grey-lite">
                      ➣ Blog
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
            <div className="column is-3">
              <h2 className="is-title text-small has-text-white-lite has-text-weight-bold">
                SUPPORT
              </h2>
              <div className="content">
                <ol type="none">
                  <li className="mb-4">
                    <Link to="#Documentation" className="has-text-grey-lite">
                      ➣ Documentation
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#FAQs" className="has-text-grey-lite">
                      ➣ FAQs
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#Forums" className="has-text-grey-lite">
                      ➣ Forums
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/contact" className="has-text-grey-lite">
                      ➣ Contact
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section py-5">
        <div className="content has-text-centered">
          <span className="has-text-grey-lite">
            Theme:
            <a
              href="https://colorlibhub.com/illdy/"
              className="has-text-grey-lite text-style"
            >
              illdy
            </a>
            .
          </span>
          <span className=" has-text-white-lite">
            © Copyright 2017. All Rights Reserved.
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
