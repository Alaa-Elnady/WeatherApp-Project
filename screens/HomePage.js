// MARK:Imports
import React , {useEffect} from "react"
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS, ICONSIZE, images } from '../constants';
import { Styles } from './styles';
import { RFValue } from "react-native-responsive-fontsize";
import { BackArrowHeader } from "../components";

import axios from "axios";

export class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      citiesDetails: [],

    };
  }

  // MARK:Functions
  componentDidMount() {
    let citiesNum = 2;   
    // Note: citiesNum Variable determine the number of cities that will be viewed in HomePage  
    for(var i=0 ; i<citiesNum ; i++) {
      this.getCities(i);
      // Note: I pass the i variable as a props to the getCities() function to use it in setting the id key of each cityWeatherDetails object created
    }
  }

  getCities = async (i) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: '53.1,-0.13' },
      headers: {
        'X-RapidAPI-Key': 'eb261c2f00msh823eebecd8ab343p1e033fjsn55ec4005892f',
        // 'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.request(options);
      // console.log('Response:' , response.data);

      // Create new cityWeatherDetails object from the response of API Request
      let cityWeatherDetails = {
        id: i,
        location: response.data.location.name,
        date: response.data.location.localtime,
        temperature: response.data.current.temp_c,
        image: images.moskoImage,
      };
      
      // Push new cityWeatherDetails object into the array of objects which is in the state
      let allCities = this.state.citiesDetails;
      allCities.push(cityWeatherDetails);
      this.setState({citiesDetails : allCities});
      // console.log(this.state.citiesDetails);
    } catch (error) {
      console.error('Error:', error);
    }
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
              {this.state.citiesDetails.map((city, index) => (
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
