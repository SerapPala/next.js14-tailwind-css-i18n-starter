"use client"
import React from "react";
import Link from "next/link";
import i18n from "@/i18n";
import LanguageButton from "@/components/Buttons/LanguageButton";
import ThemeSwitcher from "@/components/theme-switcher";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SubHeader = () => {
  return (
      <div className="py-3 bg-zinc-100 dark:bg-dark-950">
        <div className="flex-between content-container">
          <div className="flex-center">
            <div className="flex-center gap-4 text-sm">
              <div className="w-auto flex">
                <Link target={"_blank"} aria-label={i18n.t("layout.subHeader.socialItems.0.title")} href={i18n.t("layout.subHeader.socialItems.0.url")}>
                  <FaEnvelope className="text-slate-950 dark:text-white-950 hover:text-gray-400 hover:dark:text-gray-300 transition duration-300" />
                </Link>
              </div>
              <div className="w-auto flex">
                <Link target={"_blank"} aria-label={i18n.t("layout.subHeader.socialItems.1.title")} href={i18n.t("layout.subHeader.socialItems.1.url")}>
                  <FaLinkedin className="text-slate-950 dark:text-white-950 hover:text-blue-600 hover:dark:text-blue-600 transition duration-300" />
                </Link>
              </div>
              <div className="w-auto flex">
                <Link target={"_blank"} aria-label={i18n.t("layout.subHeader.socialItems.2.title")} href={i18n.t("layout.subHeader.socialItems.2.url")}>
                  <FaGithub className="text-slate-950 dark:text-white-950 hover:text-gray-800 hover:dark:text-gray-400 transition duration-300" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-center gap-4">
            <LanguageButton />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
  );
};

export default SubHeader;
