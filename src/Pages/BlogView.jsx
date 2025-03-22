import React from "react";
import ViewBlogHeader from "../Components/blog/ViewBlogHeader";
import { useTheme } from "../Context/ThemeContext";
import ViewBlogContent from "../Components/blog/viewBlogContent";
import { useParams } from "react-router-dom";
import { blogPosts } from "../util/blog";

function BlogView() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === Number(id));
  console.log(blog.imageUrl, "blog");

  return (
    <>
      <div className="relative px-[15rem] p-40  bg-white dark:bg-darkblack overflow-hidden ">
        {/* <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[28rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
        />{" "} */}
        <ViewBlogHeader
          image={blog.imageUrl}
          title={blog.title}
          readTime={blog.readTime}
          date={blog.date}
        />
        <ViewBlogContent />
      </div>
    </>
  );
}

export default BlogView;
