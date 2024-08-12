import React from "react";

const AnimeCard = ({ name, category, rating, episodes }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <p className="mt-2 text-sm text-gray-600">
          <strong>Category:</strong> {category}
        </p>
        <p className="mt-2 text-sm text-gray-600">
          <strong>MAL Rating:</strong> {rating}/10
        </p>
        <p className="mt-2 text-sm text-gray-600">
          <strong>Episodes:</strong> {episodes}
        </p>
      </div>
    </div>
  );
};

export default AnimeCard;
