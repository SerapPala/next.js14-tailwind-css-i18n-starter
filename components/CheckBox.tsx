"use client";
import React, { useState } from "react";

import { CheckIcon } from "./Icons";


//#region type

interface CheckBoxModel {
  text: string;
  type: string;
}

//#endregion

const CheckBox: React.FC<CheckBoxModel> = ({ text, type }) => {
  //#region  state

  const [isChecked, setIsChecked] = useState(false);

  const [showModal, setShowModal] = useState(false);

  //#endregion

  //#region function

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setShowModal(true);
    }
  };

  const underlineLastTwoWords = (text: string) => {
    const words = text.split(" ");
    const lastTwoWords = words.slice(-2).join(" ");
    const remainingWords = words.slice(0, -2).join(" ");
    return (
      <span>
        {remainingWords}{" "}
        <span style={{ textDecoration: "underline" }}>{lastTwoWords}</span>
      </span>
    );
  };

  //#endregion

  return (
    <div className="flex items-center gap-3" onClick={handleCheckboxClick}>
      <div
        className={`flex-center w-[24px] h-[24px] sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] xl:w-5 xl:h-5 rounded-md border  ${
          isChecked ? "bg-[#132D9D]" : "bg-white border-grey-300"
        } cursor-pointer`}
      >
        {isChecked && <CheckIcon />}
      </div>

      {type === "filter" ? (
        <p
          className={
            type === "filter"
              ? "button-md text-grey-950 mt-1"
              : "text-md-regular text-slate-700 mt-[1px]"
          }
        >
          {text}
        </p>
      ) : (
        <p
          className={
            type === "filter"
              ? "button-md text-grey-950 mt-1"
              : "text-md-regular text-grey-700 mt-[1px]"
          }
        >
          {underlineLastTwoWords(text)}
        </p>
      )}


    </div>
  );
};

export default CheckBox;
