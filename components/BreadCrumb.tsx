import Link from "next/link";
import React from "react";

//#region type

interface BreadCrumbModel {
  parentTitle: string;
  parentUrl: string;
  childTitle: string;
}

//#endregion

const BreadCrumb: React.FC<BreadCrumbModel> = ({
  parentTitle,
  parentUrl,
  childTitle,
}) => {
  return (
    <ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
      <li className="inline-flex items-center">
        <Link
          className="flex items-center text-sm-medium text-orange-500"
          href={parentUrl}
        >
          {parentTitle}
        </Link>
        <div className="px-2 text-sm-regular text-grey-300">/</div>
      </li>

      <li
        className="inline-flex items-center text-sm-medium text-grey-400 truncate"
        aria-current="page"
      >
        {childTitle}
      </li>
    </ol>
  );
};

export default BreadCrumb;
