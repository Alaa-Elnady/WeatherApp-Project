import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import { COLORS, ICONSIZE } from '../constants';
import { Styles } from '../screens/styles';
import { RFValue } from "react-native-responsive-fontsize";
import { BackArrowHeader } from './BackArrowHeader';



export function AuthHeader(props) {
  const { headerTitle, headerImage , navigation } = props;
  return (
    <>

      {/* Auth Pages Header */}
      <View style={Styles.authPagesHeader}>
        <ImageBackground source={headerImage} resizeMode="cover" style={Styles.authHeaderBgStyle} imageStyle={{ borderBottomLeftRadius: RFValue(25) }}>
          <View style={{ padding: RFValue(20), paddingTop: RFValue(30) }}>

            {/* Back Arrow */}
            <BackArrowHeader isAuth={false} navigation={navigation} />

            {/* Page Title */}
            <View style={[Styles.headerTitleContainer, { width: '70%', alignItems: 'flex-start', paddingLeft: RFValue(5), paddingTop: RFValue(20) }]}>
              <Text style={Styles.headerTitleText}>{headerTitle}</Text>
            </View>

          </View>
        </ImageBackground>
      </View>

    </>
  )
}
