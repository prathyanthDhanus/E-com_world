import React from "react";

const SearchBar = ({ placeholder = "Search", buttonText = "Search", onSearch }) => {
  return (
    <div className="relative w-full">
      {/* Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-3 py-3 border border-gray-300 rounded-full text-sm"
      />
      {/* Button */}
      <button
        type="submit"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-customYellow text-white text-sm py-3 rounded-full hover:bg-yellow-500 w-1/3"
        onClick={onSearch}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SearchBar;
