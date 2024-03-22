import React, { useState } from "react";

//#region  type

interface Information {
  id: number;
  title: string;
  content: string;
}

//#endregion

const Tab = ({ informations }: { informations: Information[] }) => {
  //#region state

  const [activeTab, setActiveTab] = useState(1);

  //#endregion

  //#region function

  const handleTabClick = (tabNumber: React.SetStateAction<number>) => {
    setActiveTab(tabNumber);
  };

  //#endregion

  return (
    <div>
      <div className="">
        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
          {informations?.map((info, index) => (
            <button
              key={index}
              type="button"
              className={`rounded-t-3xl py-[14px] px-8 button-lg ${
                activeTab === index + 1
                  ? "bg-grey-200 border border-grey-200 text-grey-950"
                  : "bg-white border border-grey-200 text-grey-700"
              }`}
              onClick={() => handleTabClick(index + 1)}
              id={`tabs-with-underline-item-${index + 1}`}
              data-hs-tab={`#tabs-with-underline-${index + 1}`}
              aria-controls={`tabs-with-underline-${index + 1}`}
              role="tab"
            >
              <div className="button-lg text-grey-950">{info.title}</div>
            </button>
          ))}
        </nav>
      </div>

      <div className="rounded-b-3xl border border-grey-200 py-8 px-4">
        {informations?.map((info, index) => (
          <>
            <div
              key={index}
              id={`tabs-with-underline-${index + 1}`}
              role="tabpanel"
              aria-labelledby={`tabs-with-underline-item-${index + 1}`}
              className={`${activeTab === index + 1 ? "block" : "hidden"}`}
            >
              {/* <p
                className="text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: info.content }}
              ></p> */}

              <div>
                <div className="text-md-regular text-grey-600">
                  Whisker Delights Premium Cat Cuisine is a meticulously
                  formulated cat food designed to meet the nutritional needs of
                  your beloved feline companion. Our recipe combines
                  high-quality protein sources, essential vitamins, and minerals
                  to support overall health and well-being.
                </div>
                <div className="text-md-medium text-grey-950 mt-8 mb-4">
                  Key Features:
                </div>
                <ol className="flex flex-col gap-2">
                  <li className="">
                    <span className="text-md-medium text-grey-950">
                      • Protein-Rich Formula:{" "}
                    </span>
                    <span className="text-md-regular text-grey-600">
                      Packed with premium sources of protein, our cat food
                      ensures that your cat receives the necessary nutrients for
                      muscle maintenance and energy.
                    </span>
                  </li>
                  <li className="mt-2">
                    <span className="text-md-medium text-grey-950">
                      • Balanced Nutrition:{" "}
                    </span>
                    <span className="text-md-regular text-grey-600">
                      Our formula includes a precise balance of vitamins and
                      minerals to support a healthy immune system, shiny coat,
                      and strong teeth.
                    </span>
                  </li>
                  <li className="mt-2">
                    <span className="text-md-medium text-grey-950">
                      • Irresistible Flavor:{" "}
                    </span>
                    <span className="text-md-regular text-grey-600">
                      We understand that cats are discerning eaters, which is
                      why our Whisker Delights cat food boasts a flavor that
                      cats find irresistible. It's a meal they'll look forward
                      to every.
                    </span>
                  </li>
                  <li className="mt-2">
                    <span className="text-md-medium text-grey-950">
                      • Artificial Additives:{" "}
                    </span>
                    <span className="text-md-regular text-grey-600">
                      We prioritize the well-being of your cat, and that's why
                      our cat food is free from artificial preservatives,
                      colors, and flavors. It's a pure and natural delight for
                      your feline friend. Digestive Health: Enriched with fiber,
                      our cat food promotes healthy digestion, ensuring that
                      your cat can comfortably enjoy each meal.
                    </span>
                  </li>
                </ol>
                <div className="text-md-regular text-grey-600">
                  Whisker Delights Premium Cat Cuisine is not just a meal; it's
                  an expression of love for your cat. Give them the taste they
                  crave and the nutrition they need with every bowl. Your cat
                  deserves the best, and Whisker Delights delivers excellence in
                  every bite.
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Tab;
