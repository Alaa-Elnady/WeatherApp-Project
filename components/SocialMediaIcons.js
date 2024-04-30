import React from "react";
import {
  View,
  TouchableOpacity,
}from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../constants";
import { Styles } from "../screens";

export function SocialMediaIcon(props) {
  return (
    <>
      <View style={Styles.socialMediaContainer}>
        <TouchableOpacity style={Styles.social_btn}>
          <MaterialCommunityIcons name="google" size={25} color={'#f14336'} />
        </TouchableOpacity>

        <TouchableOpacity style={Styles.social_btn}>
          <MaterialCommunityIcons name="facebook" size={30} color={'#0077b7'} />
        </TouchableOpacity>

        <TouchableOpacity style={Styles.social_btn}>
          <MaterialCommunityIcons name="twitter" size={30} color={'#1d9bf0'} />
        </TouchableOpacity>
      </View>
    </>
  )
}