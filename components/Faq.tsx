import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@/components/Icons";

//#region  types

interface Information {
  id: number;
  title: string;
  content: string;
}

//#endregion

const Faq = ({ informations }: { informations: Information[] }) => {
  //#region  states

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  //#endregion

  //#region  functions

  const handleFaqClick = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  //#endregion

  return (
    <div className="w-full">
      {informations.map((info) => (
        <div key={info.id} className="hs-accordion w-full">
          <button
            className={`hs-accordion-toggle rounded-t-lg button-lg flex-between w-full mt-8 ${
              activeFaq === info.id
                ? "bg-grey-200 border border-grey-200 text-grey-950"
                : "bg-white border border-grey-200 text-grey-700"
            }`}
            onClick={() => handleFaqClick(info.id)}
          >
            <div className="button-lg text-grey-950 pl-4">{info.title}</div>
            {activeFaq === info.id ? (
              <MinusIcon fill="#64748B" />
            ) : (
              <PlusIcon fill="#F28705" />
            )}
          </button>
          {activeFaq === info.id && (
            <div className="hs-accordion-content mt-8">
              <p
                className="text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: info.content }}
              ></p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
