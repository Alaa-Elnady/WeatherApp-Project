import React from "react"
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS, ICONSIZE , images } from '../constants';
import { Styles } from './styles';
import { RFValue } from "react-native-responsive-fontsize";
import { BackArrowHeader } from "../components";


export class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      id: 1,
      location: "Cairo",
      date: "29-04-2024",
      temperature: "28",
      image: images.locationImage,

    };
  }

  render() {
    return (
      <>
        <View style={Styles.PageContainer}>

          {/* Page Header */}
          <View style={Styles.homeHeader}>

            {/* Back Arrow */}
            <BackArrowHeader isAuth={true} navigation={this.props.navigation} />

            {/* Page Title */}
            <View style={Styles.headerTitleContainer}>
              <Text style={Styles.headerTitleText}>App Weather</Text>
            </View>
          </View>

          {/* Page Content */}
          <View style={Styles.homeContentContainer}>

            <ScrollView showsVerticalScrollIndicator={false}>

              {/* City Weather Container */}
              <View style={Styles.cityWeatherContainer}>
                <ImageBackground source={this.state.image} resizeMode="cover" style={Styles.cityImageStyle} imageStyle={{ borderRadius: RFValue(20) }} >

                  {/* Weather Status & Temperature */}
                  <View style={Styles.cityWeatherStatus_tempContainer}>
                    <FontAwesome5 name="cloud-sun-rain" color={COLORS.Yellow} size={ICONSIZE.mdIcon} />
                    <Text style={[Styles.cityWeatherDetailsText, {color:COLORS.Yellow}]}>{this.state.temperature}</Text>
                  </View>

                  {/* City Location & Date */}
                  <View style={Styles.cityLocation_dateContainer}>

                    {/* Location */}
                    <View style={Styles.cityLocationContainer}>
                      <FontAwesome6 name="location-dot" color={COLORS.SecondaryTeaRose} size={ICONSIZE.smIcon} />
                      <Text style={Styles.cityWeatherDetailsText}>{this.state.location}</Text>
                    </View>

                    {/* Date */}
                    <View style={Styles.dateContainer}>
                      <MaterialIcons name="date-range" color={COLORS.SecondaryTeaRose} size={ICONSIZE.smIcon} />
                      <Text style={Styles.cityWeatherDetailsText}>{this.state.date}</Text>
                    </View>

                  </View>

                </ImageBackground>
              </View>

              {/* City Weather Container */}
              <View style={Styles.cityWeatherContainer}>
                <ImageBackground source={this.state.image} resizeMode="cover" style={Styles.cityImageStyle} imageStyle={{ borderRadius: RFValue(20) }} >

                  {/* Weather Status & Temperature */}
                  <View style={Styles.cityWeatherStatus_tempContainer}>
                    <FontAwesome5 name="cloud-sun-rain" color={COLORS.Yellow} size={ICONSIZE.mdIcon} />
                    <Text style={[Styles.cityWeatherDetailsText, {color:COLORS.Yellow}]}>{this.state.temperature}</Text>
                  </View>

                  {/* City Location & Date */}
                  <View style={Styles.cityLocation_dateContainer}>

                    {/* Location */}
                    <View style={Styles.cityLocationContainer}>
                      <FontAwesome6 name="location-dot" color={COLORS.SecondaryTeaRose} size={ICONSIZE.smIcon} />
                      <Text style={Styles.cityWeatherDetailsText}>{this.state.location}</Text>
                    </View>

                    {/* Date */}
                    <View style={Styles.dateContainer}>
                      <MaterialIcons name="date-range" color={COLORS.SecondaryTeaRose} size={ICONSIZE.smIcon} />
                      <Text style={Styles.cityWeatherDetailsText}>{this.state.date}</Text>
                    </View>

                  </View>

                </ImageBackground>
              </View>


            </ScrollView>

          </View>
        </View>
      </>
    )
  }

}
