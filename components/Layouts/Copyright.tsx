"use client"
import React from "react";
import {useTranslation} from "react-i18next";
import Link from "next/link";

const Copyright: React.FC = () => {

    //#region states

    const {t} = useTranslation();

    //#endregion

    return (
        <div className="mt-12 border-t border-slate-200 dark:border-slate-25/20 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
                <p className="text-sm text-gray-500">
                    <span className="block sm:inline">{t("layout.copyright.copyrightText")} &nbsp;</span>

                    <Link
                        className="inline-block text-green-400 underline transition hover:text-teal-600/75"
                        href={t("layout.copyright.terms.url")}
                    >
                        {t("layout.copyright.terms.title")}
                    </Link>

                    <span> &nbsp; &middot; &nbsp;</span>

                    <Link
                        className="inline-block text-green-400 underline transition hover:text-teal-600/75"
                        href={t("layout.copyright.privacy.url")}
                    >
                        {t("layout.copyright.privacy.title")}
                    </Link>
                </p>

                <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; {t("layout.copyright.companyName")}</p>
            </div>
        </div>
    );
};

export default Copyright;
