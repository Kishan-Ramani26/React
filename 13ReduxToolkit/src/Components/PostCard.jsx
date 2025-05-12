import React from "react";
import Service from "../appwrite/conf";
import { Link } from "react-router-dom";
import authService from "../appwrite/auth";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            className="rounded-xl"
            src={Service.filePreview(featuredImage)}
            alt={title}
          />
          {/* <img className="" src={authService.filePreview(featuredImage)} /> */}

          <h2 className="text-xl font-bold">
            {title}
            </h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
