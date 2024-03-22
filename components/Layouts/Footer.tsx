"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import i18n from "../../i18n";
import {FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow} from "react-icons/fa";
import generateFooterData from "../../data/footer-data";
import Copyright from "./Copyright";

const Footer: React.FC = () => {

    //#region states

    const {t} = useTranslation();

    const footer_data = generateFooterData();

    //#endregion


    return (
      <div className={"bg-zinc-100 dark:bg-dark-950 py-6"}>
          <footer className="content-container">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                      <div>
                          <div className="flex justify-center text-teal-600 sm:justify-start">
                              <Link href={"/"}>
                        Logo
                              </Link>
                          </div>
                          <p className="mt-6 max-w-md text-center leading-relaxed  sm:max-w-xs sm:text-left text-slate-950 dark:text-white-950 text-sm-regular">
                              {t("layout.footer.text")}
                          </p>
                          <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                              <li>
                                  <Link target={"_blank"} aria-label={i18n.t("layout.subHeader.socialItems.1.title")} href={i18n.t("layout.subHeader.socialItems.1.url")}>
                                      <FaLinkedin className="text-slate-950 dark:text-white-950 hover:text-blue-600 hover:dark:text-blue-600 transition duration-300" />
                                  </Link>
                              </li>
                              <li>
                                  <Link target={"_blank"} aria-label={i18n.t("layout.subHeader.socialItems.2.title")} href={i18n.t("layout.subHeader.socialItems.2.url")}>
                                      <FaGithub className="text-slate-950 dark:text-white-950 hover:text-gray-800 hover:dark:text-gray-400 transition duration-300" />
                                  </Link>
                              </li>
                          </ul>
                      </div>
                      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                          {footer_data?.map((item, key) => (
                              <div key={key} className="text-center sm:text-left">
                                  <p className="text-lg-medium text-slate-800 dark:text-white-900 hover:text-slate-950 dark:hover:text-white-950">{t(item?.title)}</p>
                                  <ul className="mt-6 space-y-4 text-sm">
                                      {item?.data?.map((subItem, subKey) => (
                                          <li key={subKey}>
                                              <Link
                                                  className="text-sm-medium text-slate-900 dark:text-white-700 hover:text-green-500 dark:hover:text-green-500 transition duration-300"
                                                  href={t(subItem.url)}>
                                                  {t(subItem.title)}
                                              </Link>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          ))}
                          <div className="text-center sm:text-left">
                              <p className="text-lg-medium text-slate-800 dark:text-white-900 hover:text-slate-950 dark:hover:text-white-950">{t("layout.footer.contact.title")}</p>
                              <ul className="mt-6 space-y-4 text-sm">
                                  <li className={"flex-start gap-2 group"}>
                                      <Link target={"_blank"}
                                            aria-label={i18n.t("layout.subHeader.socialItems.0.title")}
                                            href={i18n.t("layout.subHeader.socialItems.0.url")}>
                                          <FaEnvelope
                                              className="text-slate-900 dark:text-white-700 group-hover:text-green-500 dark:group-hover:text-green-500 transition duration-300"/>
                                      </Link>
                                      <Link target={"_blank"}
                                            aria-label={i18n.t("layout.subHeader.socialItems.0.title")}
                                            href={i18n.t("layout.subHeader.socialItems.0.url")}>
                                          <p className="text-slate-900 dark:text-white-700 group-hover:text-green-500 dark:group-hover:text-green-500 transition duration-300">{i18n.t("layout.subHeader.socialItems.0.title")}</p>
                                      </Link>
                                  </li>
                                  <li className={"flex-start gap-2 group"}>
                                      <Link target={"_blank"}
                                            aria-label={i18n.t("layout.subHeader.socialItems.3.title")}
                                            href={i18n.t("layout.subHeader.socialItems.3.url")}>
                                          <FaLocationArrow
                                              className="text-slate-900 dark:text-white-700 group-hover:text-green-500 dark:group-hover:text-green-500 transition duration-300"/>
                                      </Link>
                                      <Link target={"_blank"}
                                            aria-label={i18n.t("layout.subHeader.socialItems.3.title")}
                                            href={i18n.t("layout.subHeader.socialItems.3.url")}>
                                          <p className="text-slate-900 dark:text-white-700 group-hover:text-green-500 dark:group-hover:text-green-500 transition duration-300">{i18n.t("layout.subHeader.socialItems.3.title")}</p>
                                      </Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              <Copyright/>
          </footer>
      </div>
    );
};

export default Footer;
