import React, { FC } from "react";

//#region model

interface SelectBoxModel {
  placeholder: string;
}

//#endregion

const SelectBox: FC<SelectBoxModel> = ({ placeholder }) => {
  return (
    <div
      className="border-b border-b-grey-300 mr-2"
      style={{ marginTop: "-2px" }}
    >
      <select
        id="select-1"
        className="min-w-full items-end flex-between py-4
            bg-white placeholder self-stretch text-grey-400 
            focus:bg-white-950
             focus:placeholder-grey-950
             placeholder-white
             focus:border-orange-500
            focus:outline-none 
            transition duration-150 ease-in-out
           focus:text-grey-950
            placeholder:text-grey-400
            placeholder:text-md-regular 
            leading-6
        "
      >
        <option disabled hidden>
          {placeholder}
        </option>
        <option className="text-md-regular text-grey-400">
          Select Product
        </option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
};

export default SelectBox;
