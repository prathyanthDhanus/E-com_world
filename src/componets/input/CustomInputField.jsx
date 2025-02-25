import React from "react";

const CustomInputField = ({
  title,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  rows,
  className = "",
  onFocus,
  error,
  touched,
}) => {
  const InputElement = rows ? "textarea" : "input";

  return (
    <div className="pt-3 sm:text-sm md:text-sm lg:text-sm poppins-regular bg-white">
      <div className="flex justify-between">
        <h5 className="poppins-medium">{title}</h5>
      </div>
      <div
        className={`w-full flex items-center mt-2 p-3 border ${
          error && touched ? "border-red-500" : "border-gray-300"
        } rounded-lg focus-within:border-customYellow bg-customWhite ${className}`}
      >
        <InputElement
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          rows={rows}
          onFocus={onFocus}
          className="border-none outline-none w-full text-xs md:text-sm lg:text-sm xl:text-sm xxl:text-md bg-customWhite"
        />
      </div>
      {touched && error && (
        <div className="text-red-500 mt-1 text-xs md:text-sm lg:text-sm xl:text-sm xxl:text-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default CustomInputField;
