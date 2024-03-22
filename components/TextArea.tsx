"use client"
import React, {FC, useState} from "react";

//#region type

interface TextAreaModel {
  placeholder: string;
}

//#endregion




const TextArea: FC<TextAreaModel> = ({ placeholder }) => {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      <textarea
        placeholder={placeholder}
        className={`
        flex items-center gap-2 py-4 px-1 h-22
        pl-4
         focus:placeholder:pl-2
         placeholder:pl-4
         focus:pl-4
         border border-b-grey-300
         bg-white dark:bg-transparent placeholder self-stretch
         focus:placeholder:hidden
         focus:bg-white-950
         focus:border-green-400
         focus:outline-none 
         transition duration-150 ease-in-out
         focus:text-slate-950
         focus:dark:text-white-950
         placeholder:text-green-600
         placeholder:dark:text-green-200
         placeholder:text-md-regular 
        `}
      />
    </div>
  );
};

export default TextArea;
