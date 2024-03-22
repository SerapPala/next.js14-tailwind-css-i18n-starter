import React, { FC, useState } from "react";

//#region  type

interface InputModel {
  placeholder: string;
  type:string;
  name:string;
}

//#endregion

const Input: FC<InputModel> = ({ placeholder, name, type }) => {

  //#region  state

  const [isFocused, setIsFocused] = useState(false);

  //#endregion

  //#region  function

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  //#endregion

  return (
    <div className="flex flex-col items-start gap-6 self-stretch w-full">
      <input
        type={type}
        placeholder={isFocused ? "" : placeholder}
        className={`
        flex items-center gap-2 py-4 px-1 h-14 
        pl-4
         focus:placeholder:pl-2
          placeholder:pl-4
          focus:pl-4
         border border-b-grey-300
         bg-white dark:bg-transparent placeholder self-stretch
         text-${isFocused ? "grey-950" : "grey-400"} 
         focus:bg-white-950
         focus:border-green-400
         focus:outline-none 
         transition duration-150 ease-in-out
         focus:text-slate-950
          focus:dark:text-white-950
         placeholder:text-green-600
          placeholder:dark:text-green-200
         placeholder:text-md-regular 
         leading-6 ${isFocused ? "focused" : ""}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
