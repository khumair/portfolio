import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { reactProject } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Blogs() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="reactlive">
        <div className="blog-header">
          <h1 className="blog-header-text">{reactProject.title}</h1>
          <p className="subTitle blog-subtitle">{reactProject.subtitle}</p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {reactProject.blogs.map(blog => {
              return (
                <BlogCard
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
