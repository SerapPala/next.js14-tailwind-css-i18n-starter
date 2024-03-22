import React, { useEffect, useState } from "react";
import i18next from "i18next";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const LanguageButton: React.FC = () => {
    //#region state
    const { theme } = useTheme();
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);

    useEffect(() => {
        setCurrentLanguage(localStorage.getItem("language"));
    }, []);

    //#endregion

    //#region function
    const changeLanguage = (lang: string | undefined) => {
        i18next.changeLanguage(lang);
        if (typeof lang === "string") {
            localStorage.setItem("language", lang);
            setCurrentLanguage(lang);
        }
    };

    //#endregion

    return (
        <div className="flex-center gap-2 text-sm">
            <Link aria-label={"language-item-tr"} href="#" passHref legacyBehavior>
                <a
                    role="language-tr"
                    tabIndex={-1}
                    onClick={() => changeLanguage("tr")}
                    style={{
                        color:
                            currentLanguage === "tr"
                                ? theme === "dark"
                                    ? "#fff"
                                    : "black"
                                : theme === "dark"
                                    ? "#e2e8f0"
                                    : "gray",
                    }}
                >
                    {t("languages.0.title")}
                </a>
            </Link>
            <div className="text-slate-400">|</div>
            <Link aria-label={"language-item-en"} href="#" passHref legacyBehavior>
                <a
                    role="language-en"
                    tabIndex={-1}
                    onClick={() => changeLanguage("en")}
                    style={{
                        color:
                            currentLanguage === "en"
                                ? theme === "dark"
                                    ? "#fff"
                                    : "black"
                                : theme === "dark"
                                    ? "#e2e8f0"
                                    : "gray",
                    }}
                >
                    {t("languages.1.title")}
                </a>
            </Link>
        </div>
    );
};

export default LanguageButton;
