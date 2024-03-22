import Link from "next/link";
import React from "react";

//#region model

interface PrimaryButtonModel {
  title: string;
  url: string;
  type?: string;
}

//#endregion

const PrimaryButton: React.FC<PrimaryButtonModel> = ({
                                                        title,
                                                       url,
                                                       type,
                                                     }) => {


  return (
      <>
        {type === "animated" ? (

              <div className={"mr-3 md:mr-0"}>
                  <Link href={url}>
                      <button
                          className="btn2  px-6 py-4 rounded relative button-md-semibold tracking-wider leading-none overflow-hidden  bg-green-700 w-full"
                          type="button">
                          <span className="absolute inset-0 bg-green-800"></span>
                          <span
                              className="absolute inset-0 flex justify-center items-center button-md-semibold text-white-950">
      {title}
      </span>
                          {title}
                      </button>
                  </Link>
              </div>

        ) : (
            <div className="">
                <Link href={url}>
                    <button
                        className="btn2  px-6 py-4 rounded relative button-md-semibold tracking-wider leading-none overflow-hidden bg-green-700 w-full"
                        type="button">
                        <span className="absolute inset-0 bg-green-800"></span>
                        <span
                            className="absolute inset-0 flex justify-center items-center button-md-semibold text-white-950">
                          {title}
                          </span>
                        {title}
                    </button>
                </Link>
            </div>
        )}
      </>
  );
};

export default PrimaryButton;
