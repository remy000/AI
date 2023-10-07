import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

const Blog = () => {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is Happening, we are blogging about it
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
          <Article
            imgurl={blog01}
            date="22th-july-2023"
            title="AI is the Future let Explore it."
          />
        </div>
        <div className="gpt__blog-container_groupB">
          <Article
            imgurl={blog02}
            date="22th-july-2023"
            title="AI is the Future let Explore it."
          />
          <Article
            imgurl={blog03}
            date="22th-july-2023"
            title="AI is the Future let Explore it."
          />
          <Article
            imgurl={blog04}
            date="22th-july-2023"
            title="AI is the Future let Explore it."
          />
          <Article
            imgurl={blog05}
            date="22th-july-2023"
            title="AI is the Future let Explore it."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
