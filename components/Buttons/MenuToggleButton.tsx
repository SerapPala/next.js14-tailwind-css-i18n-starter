import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

//#region type
export interface MenuToggleButtonModel {
  toggle: any;
  t: TFunction<"translation", undefined>;
}

//#endregion

const MenuToggleButton: React.FC<MenuToggleButtonModel> = ({ toggle }) => {
  //#region state

  const { t } = useTranslation();

  //#endregion

  return (
    <div>
      <button className="flex-center p-3.5 h-[3.25rem] rounded-full border border-orange-500 bg-orange-500">
        <Image
          src={t("layout.header.navButtons.2.toggleButton.icon")}
          width={24}
          height={24}
          alt={t("layout.header.navButtons.2.toggleButton.alt")}
        />
      </button>
    </div>
  );
};

export default MenuToggleButton;
