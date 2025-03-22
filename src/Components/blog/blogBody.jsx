import React from "react";
import { useNavigate } from "react-router-dom";

function BlogBody({ imageUrl, title, subdescription, readTime, id, passkey }) {
  console.log(imageUrl, "imageUrl");

  const navigate = useNavigate();
  const blogPageChange = ({ id }) => {
    navigate(`/blog/${id}`);
  };
  return (
    <>
      <article
        className={`dark:border rounded-lg overflow-hidden dark:shadow-md dark:bg-darkblack flex justify-center items-center flex-col ${
          passkey ? "" : "w-[380px]"
        }`}
        onClick={() =>
          blogPageChange({
            id,
          })
        }
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-[350px] h-[211px] rounded-lg mt-3"
        />
        <div className="p-4">
          <p className="text-sm text-gray-500 dark:text-white">{readTime}</p>
          <h2 className="text-xl font-semibold mb-2 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-700 mb-3 dark:text-white">{subdescription}</p>
        </div>
      </article>
    </>
  );
}

export default BlogBody;
