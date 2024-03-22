import Head from "next/head";
import React from "react";

//#region type

interface PageHeadModel {
  title: string;
  description: string;
}

//#endregion

const PageHead: React.FC<PageHeadModel> = ({ title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={description} key="title" />
      </Head>
    </div>
  );
};

export default PageHead;
