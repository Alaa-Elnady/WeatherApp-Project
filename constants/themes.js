import { RFValue } from "react-native-responsive-fontsize";

export  const COLORS = {
    black:"#000000",
    White: "#ffffff",
    Yellow: "#ffc700",
    DarkGray: "#353941",
    MidGray: "#7d7d7d",
    LightGray: "#b6b6b6",
    PrimaryPurple: "#5b4dbc",
    SecondaryPurple: "#b7bae4",
    PrimaryTeaRose: "#d26060",
    SecondaryTeaRose: "#ff8862",
}

export const ICONSIZE = {
    xsIcon: RFValue(10) >= 10 ? RFValue(10) : 5,
    smIcon: RFValue(15) >= 15 ? RFValue(15) : 10,
    mdIcon: RFValue(20) >= 20 ? RFValue(20) : 15,
    lgIcon: RFValue(25) >= 25 ? RFValue(25) : 20,
    xlIcon: RFValue(30) >= 30 ? RFValue(30) : 25,
};

export const FONTSIZE = {
    h1: RFValue(50) >= 35 ? RFValue(50) : 30,
    h2: RFValue(30) >= 30 ? RFValue(30) : 25,
    h3: RFValue(25) >= 25 ? RFValue(25) : 20,
    h4: RFValue(20) >= 20 ? RFValue(20) : 17,
    h5: RFValue(16) >= 16 ? RFValue(16) : 15,
    h6: RFValue(13) >= 13 ? RFValue(13) : 13
};

 