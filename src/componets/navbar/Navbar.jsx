import React from "react";
import { GoHeart } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";

import SearchBar from "../buttons/SearchBar";

const Navbar = () => {
  const handleSearch = () => {
    console.log("Search button clicked");
  };
  return (
    <>
      <div className="grid grid-cols-3 bg-customBlue poppins-regular ">
        <div></div>
        <div>
          <div className="flex justify-center items-center p-5">
            <div className="w-3/4">
              <SearchBar
                placeholder="Search anything here"
                buttonText="Search"
                onSearch={handleSearch}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-5 text-customWhite p-6">
            <GoHeart className="text-2xl" />
            <span>Count</span>
            <h5>Sign in</h5>
            <MdOutlineShoppingCart className="text-2xl" />
            <h5>Cart</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
