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
import { COLORS, ICONSIZE, images } from '../constants';
import { Styles } from './styles';
import { RFValue } from "react-native-responsive-fontsize";
import { BackArrowHeader } from "../components";


export class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      cities: [
        {
          id: 1,
          location: "Cairo",
          date: "29-04-2024",
          temperature: "28",
          image: images.cairoImage,
        },
        {
          id: 2,
          location: "Moska",
          date: "30-04-2024",
          temperature: "25",
          image: images.moskoImage,
        },
        {
          id: 3,
          location: "Kuwait",
          date: "30-04-2024",
          temperature: "16",
          image: images.kuwaitImage,
        },
      ]

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
              {/* Map */}
              {this.state.cities.map((city, index) => (
                <TouchableOpacity key={index} style={Styles.cityWeatherContainer} >
                  <ImageBackground source={city.image} resizeMode="cover" style={Styles.cityImageStyle} imageStyle={{ borderRadius: RFValue(20) }} >

                    {/* Weather Status & Temperature */}
                    <View style={Styles.cityWeatherStatus_tempContainer}>
                      <FontAwesome5 name="cloud-sun-rain" color={COLORS.Yellow} size={ICONSIZE.mdIcon} />
                      <Text style={[Styles.cityWeatherDetailsText, { color: COLORS.Yellow }]}>{city.temperature}</Text>
                    </View>

                    {/* City Location & Date */}
                    <View style={Styles.cityLocation_dateContainer}>

                      {/* Location */}
                      <View style={Styles.cityLocationContainer}>
                        <FontAwesome6 name="location-dot" color={COLORS.SecondaryTeaRose} size={ICONSIZE.smIcon} />
                        <Text style={Styles.cityWeatherDetailsText}>{city.location}</Text>
                      </View>

                      {/* Date */}
                      <View style={Styles.dateContainer}>
                        <MaterialIcons name="date-range" color={COLORS.SecondaryTeaRose} size={ICONSIZE.smIcon} />
                        <Text style={Styles.cityWeatherDetailsText}>{city.date}</Text>
                      </View>

                    </View>

                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View >
        </View >
      </>
    )
  }

}
