import React from 'react';
import { Link } from 'gatsby';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Heading from './element/Heading';
import Button from './element/Button';
import blog from '../content/general/blog.yaml';
import NewsItem from './NewsItem';

export default function NewsItems() {
  return (
    <div className="section has-text-centered has-background-color">
      <div className="container">
        <div className="has-text-centered">
          <Heading color text={blog.title} />
          <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-1 mb-4">
            {blog.subtitle}
          </h2>
          <Link
            to
            href="/blogs"
            className=" is-hovered is-flex is-align-items-center is-justify-content-center"
          >
            <Button border borderColor width="130px">
              <span>
                <IoIosArrowDroprightCircle className="mr-2" /> See blog
              </span>
            </Button>
          </Link>
        </div>
        <NewsItem post={blog.post} />
      </div>
    </div>
  );
}
