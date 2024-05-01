// MARK:Imports
import React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Styles } from './styles';
import { AuthHeader } from '../components';
import Feather from "react-native-vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";
import { SocialMediaIcon } from '../components/SocialMediaIcons';
import { COLORS, ICONSIZE, FONTSIZE, images } from '../constants';

import axios from 'axios';

export class SignIn extends React.Component {

  // MARK:State
  constructor(props) {
    super(props);
    this.state = {
      // Header Data
      headerImage: images.AuthImage,
      headerTitle: "Sign In to your account",

      // User Data (Data entered by user)
      userEmail: '',
      email_err: '',

      userPassword: '',
      pass_err: '',

      // // Existes User Data (Correct Data to Sign In)
      // correctEmail: 'alaa@gmail.com',
      // correctPassword: 'alaa123',
    }
  }


  // MARK:Functions:
  validation() {
    let email = this.state.userEmail;
    let pass = this.state.userPassword;
    let errors = 0;

    // Email Validation
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd
    if (email.trim().length == 0) {
      this.setState({ email_err: 'Email Field is required!' });
      errors++;
    } else if (reg.test(email.trim()) == false) {
      this.setState({ email_err: 'Please Enter correct Email!' });
      errors++;
    } else {
      this.setState({ email_err: '' });
    }

    // Password Validation
    if (pass.trim().length == 0) {
      this.setState({ pass_err: 'Password Field is required!' });
      errors++;
    } else if (pass.trim().length < 6) {
      this.setState({ pass_err: 'Pass should be more than 6 digits!' });
      errors++;
    } else {
      this.setState({ pass_err: '' });
    }

    // if (errors == 0) {
    //   if (email == this.state.correctEmail && pass == this.state.correctPassword) {
    //     alert('Welcome to Weather App');
    //     this.props.navigation.navigate('HomePage');
    //     this.signIn();
    //   } else {
    //     alert('Please make sure that you entered correct data');
    //   }
    // }


    if (errors == 0) {
      this.signIn();
    } else {
      alert('Please make sure that you entered correct data');
    }
  }

  signIn = async () => {

    // Using axios:
    // -----------------------
    const options = {
      method: 'GET',
      url: 'https://node-express-api-tutorial.p.rapidapi.com/users',
      headers: {
        'X-RapidAPI-Key': 'eb261c2f00msh823eebecd8ab343p1e033fjsn55ec4005892f',
        'X-RapidAPI-Host': 'node-express-api-tutorial.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const users = response.data;
      for (var i = 0; i < users.length; i++) {
        let user = users[i];
        var emailFounded = false;
        for (let key in user) {
          if (key == 'email') {
            if (user[key] == this.state.userEmail) {
              emailFounded = true;
              alert('Welcome to Weather App');
              this.props.navigation.navigate('HomePage');
              i = 2;
              break;
            }
          }
        }
      }
      if (i == 2 && emailFounded == false) {
        alert('The email you entered is NOT found! Please enter correct email')
      }
    } catch (error) {
      console.error(error);
    }

  }


  render() {
    return (
      <>
        <View style={Styles.PageContainer}>

          {/* SignIn Header */}
          <AuthHeader headerTitle={this.state.headerTitle} headerImage={this.state.headerImage} navigation={this.props.navigation} isAuth={false} />

          {/* SignUp Content */}
          <View style={Styles.authContentContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>

              {/* Email TextInput */}
              <View style={[Styles.authTextInputContainer]}>

                {/* Label */}
                <View style={[Styles.authTextInputLabel, { width: '20%' }]}>
                  <Text style={{ fontSize: RFValue(13), color: COLORS.DarkGray }}>Email</Text>
                </View>

                {/* TextInput */}
                <View style={Styles.passTextInput_eyeContainer}>

                  {/* Email Icon */}
                  <View style={Styles.passIconContainer}>
                    <Feather name={'mail'} color={COLORS.DarkGray} size={ICONSIZE.mdIcon} />
                  </View>

                  {/* TextInput */}
                  <TextInput
                    keyboardType='email-address'
                    value={this.state.userEmail}
                    onChangeText={value => {
                      this.setState({ userEmail: value });
                    }}
                    placeholder="Enter your email"
                    placeholderTextColor={COLORS.LightGray}
                    style={[Styles.authTextInput, { width: '90%', paddingHorizontal: RFValue(5) }]}
                  />
                </View>

              </View>
              {/* User email error message */}
              <Text
                style={{
                  fontSize: FONTSIZE.h6,
                  color: COLORS.PrimaryTeaRose,
                  marginLeft: RFValue(30),
                  marginBottom: RFValue(10)
                }}>
                {this.state.email_err}
              </Text>


              {/* Password TextInput */}
              <View style={Styles.authTextInputContainer}>

                {/* Label */}
                <View style={Styles.authTextInputLabel}>
                  <Text style={{ fontSize: RFValue(13), color: COLORS.DarkGray }}>Password</Text>
                </View>

                {/* TextInput & Pass Icon */}
                <View style={Styles.passTextInput_eyeContainer}>

                  {/* Pass Icon */}
                  <View style={Styles.passIconContainer}>
                    <Feather name={'lock'} color={COLORS.DarkGray} size={ICONSIZE.mdIcon} />
                  </View>

                  {/* TextInput */}
                  <TextInput
                    value={this.state.userPassword}
                    onChangeText={value => {
                      this.setState({ userPassword: value });
                    }}
                    placeholder="Enter your password"
                    placeholderTextColor={COLORS.LightGray}
                    style={[Styles.authTextInput, { width: '90%', paddingHorizontal: RFValue(5) }]}
                    secureTextEntry={!this.state.showPass}
                  />

                </View>

              </View>
              {/* Password error message */}
              <Text
                style={{
                  fontSize: FONTSIZE.h6,
                  color: COLORS.PrimaryTeaRose,
                  marginLeft: RFValue(30),
                }}>
                {this.state.pass_err}
              </Text>
              {/* Forget Pass Container */}
              <TouchableOpacity style={Styles.forgetPassContainer}>
                <Text style={Styles.forgetPassText}>Forget password?</Text>
              </TouchableOpacity>


              {/* SignIn Button */}
              <TouchableOpacity
                style={Styles.signUp_InBtn}
                onPress={() => {
                  this.validation();
                }}
              >
                <Text style={Styles.signUp_InText}>Sign In</Text>
              </TouchableOpacity>

              {/* Footer Section */}
              <View
                style={{
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: RFValue(18),
                  flexDirection: 'row',
                  width: RFValue(320),
                }}>
                <View
                  style={{
                    width: RFValue(138),
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.LightGray,
                  }}></View>

                <Text style={{ fontSize: FONTSIZE.h6, color: COLORS.DarkGray, fontWeight: 'bold', paddingHorizontal: RFValue(5) }}> Or </Text>

                <View
                  style={{
                    width: RFValue(138),
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.LightGray,
                  }}></View>
              </View>

              {/* Social Media Section */}
              <SocialMediaIcon />


            </ScrollView>
          </View>

        </View>
      </>
    )
  }
}