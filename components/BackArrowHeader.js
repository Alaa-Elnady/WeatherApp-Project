import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import { COLORS, ICONSIZE } from '../constants';
import { Styles } from '../screens/styles';



export function BackArrowHeader(props) {
  const { isAuth , navigation } = props;
  return (
    <>

      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() =>isAuth? navigation.navigate('SignUp') : navigation.goBack()}
        style={[Styles.backArrowContainer, { backgroundColor: isAuth ? COLORS.PrimaryPurple : COLORS.SecondaryPurple }]}>
        <Feather name="chevron-left" color={COLORS.White} size={ICONSIZE.lgIcon} />
      </TouchableOpacity>

    </>
  )
}
