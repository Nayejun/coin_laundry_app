import { ThemeColors, ThemeFontNames } from "@/config/types";

const MappingLightThemeColor: ThemeColors = {
    primary: ['#13C2C2', '#00A5A1', '#008781'],
    label: ['#171719', '#000000', '#5A5C63', '#878A93', '#AEB0B6', '#E1E2E4'],
    background: ['#FFFFFF', '#F7F7F8'],
    interaction: ['#989BA2', '#F4F4F5'],
    status: ['#00BF40', '#FF9200', '#FF4242'],
    accent: ['#58CF04', '#13C2C2', '#008DCF', '#F553DA'],
    inverse: ['#08979C', '#1B1C1E', '#F7F7F8'],
    static: ['#FFFFFF', '#000000'],
};

const MappingDarkThemeColor: ThemeColors = {
    primary: ['#13C2C2', '#08979C', '#006A60'],
    label: ['#F7F7F8', '#FFFFFF', '#AEB0B6', '#5A5C63', '#37383C', '#1B1C1E'],
    background: ['#1B1C1E', '#1B1C1E','#212225','#141415'],
    interaction: ['#5A5C63', '#2E2F33'],
    status: ['#1ED45A', '#FFA938', '#FF6363'],
    accent: ['#6BE016', '#13C2C2', '#008DCF', '#FA73E3'],
    inverse: ['#08979C', '#1B1C1E', '#F7F7F8'],
    static: ['#FFFFFF', '#000000'],
};

const mapColors = (theme: ThemeColors) => {
    const colors: { [key: string]: string } = {};
    Object.keys(theme).forEach((key) => {
        const colorArray = theme[key as keyof ThemeColors];
        for (let i = 0; i < colorArray.length; i++) {
            colors[`${key}${i + 1}`] = colorArray[i];
        }
    });
    return colors;
}

const lightColors = mapColors(MappingLightThemeColor);
const darkColors = mapColors(MappingDarkThemeColor);

const fontStyles: {[key in ThemeFontNames]: string} = {
    Title1: 'normal; font-size: 24px; line-height: 32px; letter-spacing: -0.023em; font-weight: 700;',
    Heading1: 'normal; font-size: 22px; line-height: 30px; letter-spacing: -0.0194em; font-weight: 600;',
    Heading2: 'normal; font-size: 20px; line-height: 28px; letter-spacing: -0.012em; font-weight: 600;',
    Headline1: 'normal; font-size: 18px; line-height: 26px; letter-spacing: -0.002em; font-weight: 600;',
    Headline2: 'normal; font-size: 17px; line-height: 24px; letter-spacing: 0em; font-weight: 600;',
    Body1_Normal: 'normal; font-size: 16px; line-height: 24px; letter-spacing: 0.0057em; font-weight: 400;',
    Body1_Reading: 'normal; font-size: 16px; line-height: 26px; letter-spacing: 0.0057em; font-weight: 400;',
    Body2_Normal: 'normal; font-size: 15px; line-height: 22px; letter-spacing: 0.0096em; font-weight: 400;',
    Body2_Reading: 'normal; font-size: 15px; line-height: 24px; letter-spacing: 0.0096em; font-weight: 400;',
    Label1_Normal: 'normal; font-size: 14px; line-height: 20px; letter-spacing: 0.0145em; font-weight: 600;',
    Label1_Reading: 'normal; font-size: 14px; line-height: 22px; letter-spacing: 0.0145em; font-weight: 600;',
    Label2: 'normal; font-size: 13px; line-height: 18px; letter-spacing: 0.0194em; font-weight: 400;',
    Caption1:'normal; font-size: 12px; line-height: 16px; letter-spacing: 0.0252em; font-weight: 400;',
    Caption2: 'normal; font-size: 11px; line-height: 14px; letter-spacing: 0.0311em; font-weight: 400;',
};

const theme = {
    lightColors,
    darkColors,
    fontStyles,
};

export default theme;
