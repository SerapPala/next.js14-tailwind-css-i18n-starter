"use client";
import React, { useState } from "react";
import Link  from "next/link";
import NavLinks from "./NavLinks";
import {CloseIcon, MenuToggleIcon} from "@/components/Icons";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import {useTranslation} from "react-i18next";

const Header = () => {

    //#region states

    const {t} = useTranslation();

    const [open, setOpen] = useState(false);

    //#endregion

    return (
        <header className={"bg-green-500 shadow sticky top-0 z-50 py-3 md:py-0"}>
            <nav className="content-container">
                <div className="flex items-center justify-between">
                    {/* Desktop nav */}
                    <div
                        className="z-50  md:w-auto w-full flex justify-between title-md-regular text-slate-950 dark:text-white-950 ">
                        <Link href={t("layout.header.navItems.0.url")}><img src={""} alt="logo" className="md:cursor-pointer h-9 hidden"/>
                            Serap</Link>
                        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                            {open ? <CloseIcon
                                    fill={"#fff"}
                                /> :
                                <MenuToggleIcon
                                    fill={"#fff"}
                                />
                            }
                        </div>
                    </div>
                    <ul className="md:flex-center hidden items-center gap-8 title-xs-medium">
                        <li className={"text-slate-950 dark:text-white-950 hover:text-white-950 hover:dark:text-slate-950 transition duration-300"}>
                            <Link href={t("layout.header.navItems.0.url")} className="py-5 md:py-7 inline-block">
                                {t("layout.header.navItems.0.title")}
                            </Link>
                        </li>
                        <NavLinks/>
                    </ul>
                    <div className="md:block hidden">

                    </div>

                    {/* Mobile nav */}
                    <ul
                        className={`bg-white dark:bg-dark-950
                    md:hidden  fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                    duration-500 title-xs-medium text-white-900 ${open ? "left-0" : "left-[-100%]"}
                     `}>
                        <li>
                            <Link href={t("layout.header.navItems.0.url")}
                                  className="py-5 md:py-7 inline-block text-slate-950 dark:text-white-950">
                                {t("layout.header.navItems.0.title")}
                            </Link>
                        </li>
                        <NavLinks/>
                        <div className="py-5">

                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
