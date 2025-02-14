import React from "react";

const ParagraphText = (props) => {
  return (
    <div class="flex items-center justify-center max-w-[75%] px-4 mx-4 ">
      <span class="text-center text-gray-600 relative text-sm font-medium lg:text-lg lg:px-4 mx-4 z-10 bg-gray-100">
        {props.children}
      </span>
      <div class="hidden lg:block absolute w-[75%] border-t border-gray-300"></div>
    </div>
  );
};

export default ParagraphText;
