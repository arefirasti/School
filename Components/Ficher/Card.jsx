import React from "react";

const Card = (props) => {
  return (
    <div
      key={props.teacher.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl m-3 flex "
    >
      {props.teacher !== null ? (
        <img
          src={props.teacher.image}
          alt={`${props.teacher.name} ${props.teacher.last_name}`}
          className={`w-full h-48 object-cover ${
            props.teacher !== null ? "hidden" : ""
          }`}
        />
      ) : null}

      <div className="p-4">
        <h2 className="text-xl font-semibold">
          {props.teacher.name} {props.teacher.last_name}
        </h2>
        <p className="text-gray-600 mt-2">{props.teacher.expertise}</p>
      </div>
    </div>
  );
};

export default Card;
