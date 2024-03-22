import Link from "next/link";
import React from "react";

//#region model

interface PrimaryButtonModel {
    title: string;
    url: string;
    type?: string;
}

//#endregion

const SecondaryButton: React.FC<PrimaryButtonModel> = ({
                                                           title,
                                                           url,
                                                           type,
                                                       }) => {
    const buttonClass = type === "animated"
        ? "btn2 px-6 py-4 rounded relative button-md-semibold tracking-wider leading-none overflow-hidden hover:text-teal-600 border border-green-600 bg-transparent"
        : "px-6 py-4 rounded relative button-md-semibold tracking-wider leading-none overflow-hidden border border-green-600 bg-transparent";

    return (
        <div className="flex flex-col items-center mx-auto">
            <Link href={url}>
                <button
                    className={buttonClass}
                    type="button"
                >
                    {type === "animated" && (
                        <>
                            <span className="absolute inset-0 bg-green-700"></span>
                            <span className="absolute inset-0 flex justify-center items-center button-md-semibold text-white-950">
                                {title}
                            </span>
                        </>
                    )}
                    {title}
                </button>
            </Link>
        </div>
    );
};

export default SecondaryButton;
