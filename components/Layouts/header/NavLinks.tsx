import React, { useState } from "react";
import Link from "next/link";
import { links } from "./MyLinks";
import { t } from 'i18next';
import { ChevronDownIcon, ChevronUpIcon } from "@/components/Icons";
// @ts-ignore
import { useTheme } from "next-themes";

const NavLinks = () => {

    //#region states

    const [heading, setHeading] = useState("");

    const [subHeading, setSubHeading] = useState("");

    const { theme, setTheme } = useTheme();

    const iconFill = theme === 'dark' ? '#e2e8f0' : '#0f172a';

    //#endregion

    //#region functions

    const handleClick = (linkUrl: React.SetStateAction<string>, isSubmenu: boolean) => {
        if (!isSubmenu) {
            if (typeof linkUrl === "string") {
                window.location.href = linkUrl;
            }
        } else {
            heading !== linkUrl ? setHeading(linkUrl) : setHeading("");
            setSubHeading("");
        }
    };

    //#endregion

    return (
        <>
            {links.map((link) => (
                <div key={link.name}>
                    <div className="text-left md:cursor-pointer group">
                        <div
                            className="py-5 md:py-7  flex-center md:pr-0 pr-5 group title-xs-medium text-slate-950 dark:text-white-950 hover:text-white-950 hover:dark:text-slate-950 transition duration-300"
                            onClick={() => {
                                const translatedLink = typeof link.link === 'string' ? t(link.link) : '';
                                handleClick(translatedLink, link.submenu);
                            }}
                        >
                            {t(link.name)}

                        </div>
                        {link.submenu && (
                            <div>
                                <div className="absolute top-26 hidden group-hover:md:block hover:md:block border">
                                    <div className="py-3">
                                        <div
                                            className="w-4 h-4 left-3 absolute
                    mt-1 bg-white rotate-45"
                                        ></div>
                                    </div>

                                </div>
                            </div>
                        )}
                        <div
                            className={`
        ${heading === link.name ? "" : "hidden  md:hidden group-hover:block group-hover:md:hidden"}
    `}
                        >

                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
export default NavLinks;
