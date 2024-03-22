"use client";
import Input from "@/components/Input";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import React from "react";
import {useTranslation} from "react-i18next";

const LoginForm = () => {

    //#region states

    const {t} = useTranslation();

    //#endregion


    return (
        <>
            <div className="page-container">
                <div className="content-container">
                    <div className="text-center">
                        <h1 className="title-2xl-bold font-montserrat text-grey-950 pb-8">
                            {t("components.loginForm.title")}
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            {t("components.loginForm.description")}
                        </p>
                    </div>

                    <div className="mt-12">

                        <div className="flex flex-col border rounded p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                                {t("components.loginForm.formTitle")}
                            </h2>
                            <form>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Input
                                            type={"text"}
                                            name={"username"}
                                            placeholder={t(
                                                "components.loginForm.formItems.0.placeholder"
                                            )}
                                        />
                                    </div>
                                    <Input
                                        type={"password"}
                                        name={"password"}
                                        placeholder={t(
                                            "components.loginForm.formItems.1.placeholder"
                                        )}
                                    />

                                </div>
                                <div className="mt-4">
                                    <PrimaryButton title={t(
                                        "components.loginForm.button.title"
                                    )} url={"/"} type={"submit"}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
        ;
};

export default LoginForm;