import React from "react";
import PropTypes from "prop-types";
import UserComents from "../UserComents/UserComents";

const ComentsPost = (props) => {
  return (
    <div className="flex   p-2 w-10/12  mt-4 border-b self-center	">
      <UserComents />
      <div className="flex flex-col flex-1 my-2 px-6 py-2 text-justify  text-slate-500">
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint
          aut doloribus velit maiores impedit eius dolorem eos molestias fugit,
          itaque, porro accusamus ipsa repellendus eum nisi magni in dolore.
        </p>
        <div className="flex flex-1"></div>
        <div className="text-right	mb-0">
          <p>20 marzo 2022</p>
        </div>
      </div>
    </div>
  );
};

ComentsPost.propTypes = {};

export default ComentsPost;
