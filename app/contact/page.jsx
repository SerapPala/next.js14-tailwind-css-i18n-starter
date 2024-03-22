 "use client";

 import Input from "@/components/Input"
 import TextArea from "@/components/TextArea"
 import {useTranslation} from "react-i18next";
 import PrimaryButton from "@/components/Buttons/PrimaryButton";
 import Link from "next/link";
 import i18n from "@/i18n";
 import {FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow} from "react-icons/fa";
 import React from "react";


const ContactPage = () => {

    //#region states

    const {t} = useTranslation();

    //#endregion


  return (
          <div className="page-container">
              <div className="content-container">
                  <div className="text-center">
                      <h1 className="title-2xl-bold font-montserrat text-grey-950 pb-8">
                          {t("components.contactForm.title")}
                      </h1>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                          {t("components.contactForm.description")}
                      </p>
                  </div>

                  <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                      <div className="divide-y divide-gray-200 dark:divide-gray-800">
                          <div className="flex gap-x-7 py-6">
                              <Link target={"_blank"} aria-label={t("layout.subHeader.socialItems.1.title")}
                                    href={t("layout.subHeader.socialItems.1.url")}>
                                  <FaLinkedin
                                      className="text-slate-950 dark:text-white-950 hover:text-blue-600 hover:dark:text-blue-600 transition duration-300"/>
                              </Link>
                              <div className="grow">
                                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{t("layout.subHeader.socialItems.1.title")}</h3>
                                  <Link href={t("layout.subHeader.socialItems.1.url")} target={"_blank"}
                                        aria-label={t("layout.subHeader.socialItems.1.title")}
                                        className="mt-1 text-sm text-gray-500">{t("layout.subHeader.socialItems.1.text")}</Link>
                              </div>
                          </div>
                          <div className="flex gap-x-7 py-6">
                              <Link target={"_blank"} aria-label={t("layout.subHeader.socialItems.2.title")}
                                    href={t("layout.subHeader.socialItems.2.url")}>
                                  <FaGithub
                                      className="text-slate-950 dark:text-white-950 hover:text-gray-800 hover:dark:text-gray-400 transition duration-300"/>
                              </Link>
                              <div className="grow">
                                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{t("layout.subHeader.socialItems.2.title")}</h3>
                                  <Link href={t("layout.subHeader.socialItems.2.url")} target={"_blank"}
                                        aria-label={t("layout.subHeader.socialItems.2.title")}
                                        className="mt-1 text-sm text-gray-500">{t("layout.subHeader.socialItems.2.text")}</Link>
                              </div>
                          </div>
                          <div className="flex gap-x-7 py-6">
                              <Link target={"_blank"} aria-label={t("layout.subHeader.socialItems.0.title")}
                                    href={t("layout.subHeader.socialItems.0.url")}>
                                  <FaEnvelope
                                      className="text-slate-950 dark:text-white-950 hover:text-gray-400 hover:dark:text-gray-300 transition duration-300"/>
                              </Link>
                              <div className="grow">
                                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{t("layout.subHeader.socialItems.0.title")}</h3>
                                  <Link href={t("layout.subHeader.socialItems.0.url")} target={"_blank"}
                                        aria-label={t("layout.subHeader.socialItems.0.title")}
                                        className="mt-1 text-sm text-gray-500">{t("layout.subHeader.socialItems.0.text")}</Link>
                              </div>
                          </div>
                          <div className="flex gap-x-7 py-6">
                              <Link target={"_blank"}
                                    aria-label={i18n.t("layout.subHeader.socialItems.3.title")}
                                    href={i18n.t("layout.subHeader.socialItems.3.url")}>
                                  <FaLocationArrow
                                      className="text-slate-900 dark:text-white-700 group-hover:text-green-500 dark:group-hover:text-green-500 transition duration-300"/>
                              </Link>
                              <div className="grow">
                                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{t("layout.subHeader.socialItems.3.title")}</h3>
                                  <Link href={t("layout.subHeader.socialItems.3.url")} target={"_blank"}
                                        aria-label={t("layout.subHeader.socialItems.3.title")}
                                        className="mt-1 text-sm text-gray-500">{t("layout.subHeader.socialItems.3.text")}</Link>
                              </div>
                          </div>
                      </div>
                      <div className="flex flex-col border rounded p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                          <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                              {t("components.contactForm.formTitle")}
                          </h2>
                          <form>
                              <div className="flex flex-col gap-4">
                                  <div>
                                      <Input
                                          type={"text"}
                                          name={"username"}
                                          placeholder={t(
                                              "components.contactForm.formItems.0.placeholder"
                                          )}
                                      />
                                  </div>
                                  <Input
                                      type={"text"}
                                      name={"email"}
                                      placeholder={t(
                                          "components.contactForm.formItems.1.placeholder"
                                      )}
                                  />
                                  <Input
                                      type={"text"}
                                      name={"subject"}
                                      placeholder={t(
                                          "components.contactForm.formItems.2.placeholder"
                                      )}
                                  />
                                  <TextArea
                                      type={"text"}
                                      name={"message"}
                                      placeholder={t(
                                          "components.contactForm.formItems.3.placeholder"
                                      )}
                                  />
                              </div>
                              <div className="mt-4">
                                  <PrimaryButton title={t(
                                      "components.contactForm.button.title"
                                  )} url={"/"} type={"submit"}/>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
  );
};

 export default ContactPage;
