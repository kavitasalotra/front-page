import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Heading from './element/Heading';
import Button from './element/Button';
import blog from '../content/general/blog.yaml';
import BlogItem from './BlogItem';

export default function NewsItems() {
  return (
    <div className="section has-text-centered has-background-color">
      <div className="container">
        <div className="has-text-centered">
          <Heading color text={blog.title} />
          <h2 className="has-text-grey-lite is-size-6 has-text-weight-normal mt-1">
            {blog.subtitle}
          </h2>
          <span>
            <Button border borderColor width="130px">
              <span>
                <IoIosArrowDroprightCircle className="mr-2" /> ee blog
              </span>
            </Button>
          </span>
        </div>
        <BlogItem post={blog.post} />
      </div>
    </div>
  );
}
