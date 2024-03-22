import i18n from "../i18n";

//#region  type

type NavItemType = {
    id: number;
    title: string;
    url: string;
    subItems: {
        title:string,
        url:string
    }[]
};

type IFooterDataType = {
    id: number;
    title: string;
    data: NavItemType[];
};

//#endregion

const generateFooterData = (): IFooterDataType[] => [
    {
        id: 1,
        title: 'layout.footer.data.0.title',
        data: [
            {
                id: 1,
                title: 'layout.footer.data.0.subItems.0.title',
                url: 'layout.footer.data.0.subItems.0.url',
                subItems: [

                ]
            },
            {
                id: 1,
                title: 'layout.footer.data.0.subItems.0.title',
                url: 'layout.footer.data.0.subItems.0.url',
                subItems: [

                ]
            }
        ]
    },
];

export default generateFooterData;
