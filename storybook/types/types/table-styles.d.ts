export type GetTableColor = (value: any) => TableColor;
export declare enum TableColor {
    GREEN = "GREEN",
    ORANGE = "ORANGE",
    RED = "RED",
    BLUE = "BLUE",
    BASE_BLUE_100 = "BASE_BLUE_100",
    GREY = "GREY",
    YELLOW = "YELLOW",
    PRIMARY_BLUE = "PRIMARY_BLUE",
    WHITE = "WHITE",
    LIGHTER_GREY = "LIGHT_GREYER",
    FONT_COLOUR = "FONT_COLOUR"
}
export declare const TableColorTokens: {
    GREEN: string;
    ORANGE: string;
    RED: string;
    BLUE: string;
    BASE_BLUE_100: string;
    GREY: string;
    YELLOW: string;
    PRIMARY_BLUE: string;
    WHITE: string;
    FONT_COLOUR: string;
    LIGHT_GREYER: string;
};
export declare class TableStyles {
    static linkStyles: {
        'font-weight': string;
        color: string;
    };
    static iconLinkStyles: {
        cursor: string;
        'font-weight': string;
        color: string;
    };
    static warningStyles: {
        'font-weight': string;
        color: string;
    };
    static infoIconStyle: {
        cursor: string;
        color: string;
        'font-size': string;
        height: string;
        width: string;
        'padding-left': string;
        'align-self': string;
    };
    static actionBtnStyle: {
        color: string;
        background: string;
        borderRadius: string;
        padding: string;
        cursor: string;
    };
}
