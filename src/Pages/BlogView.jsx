import React from "react";
import ViewBlogHeader from "../Components/blog/ViewBlogHeader";
import { useTheme } from "../Context/ThemeContext";
import ViewBlogContent from "../Components/blog/viewBlogContent";
import { useParams } from "react-router-dom";
import { blogPosts } from "../util/blog";
import BlogBody from "../Components/blog/blogBody";
import Faq from "../Components/Faq";

function BlogView() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { id } = useParams();
  const blogId = Number(id);
  const blog = blogPosts.find((post) => post.id === blogId);

  function getRandomPosts(posts, count, excludeId) {
    const filteredPosts = posts.filter((post) => post.id !== excludeId);
    const shuffled = filteredPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomPosts = getRandomPosts(blogPosts, 3, blogId);

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
        <div className="flex justify-center items-center flex-col">
          <div className="bg-white rounded-full py-2 px-6 shadow-md text-lg font-medium">
            Recent Posts
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 dark:bg-darkblack">
            {randomPosts.map((post, index) => (
              <BlogBody key={index} {...post} passkey={true} />
            ))}
          </div>
        </div>
        <Faq />
      </div>
    </>
  );
}

export default BlogView;
