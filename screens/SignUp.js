// MARK:Imports
import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import { CheckBox } from '@rneui/base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS, ICONSIZE, FONTSIZE, images } from '../constants';
import { Styles } from './styles';
import { AuthHeader } from '../components';
import { RFValue } from "react-native-responsive-fontsize";



export class SignUp extends React.Component {

  // MARK:state
  constructor(props) {
    super(props);
    this.state = {
      // Header Data
      headerImage: images.AuthImage,
      headerTitle: "Sign up to your account",

      // TextInputs Data
      userName: '',
      name_err: '',

      userEmail: '',
      email_err: '',

      userPassword: '',
      showPass: false,
      pass_err: '',

      passConfirmation: '',
      showPassConfirmation: false,
      passCofirm_err: '',

      acceptTerms: false,
      acceptTerms_err: '',

    }
  };


  // MARK:Functions:
  validation() {
    let name = this.state.userName;
    let email = this.state.userEmail;
    let pass = this.state.userPassword;
    let passConfirm = this.state.passConfirmation;
    let acceptTerms = this.state.acceptTerms;
    let errors = 0;

    // Name Validation
    if (name.trim().length == 0) {
      this.setState({ name_err: 'User name is required!' });
      errors++;
    } else {
      this.setState({ name_err: '' });
    }

    // Email Validation
    // reg.test(email.trim()) == false 
    let reg = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/";      // Ex: name@gmail.com
    if (email.trim().length == 0) {
      this.setState({ email_err: 'Email is required!' });
      errors++;
    } else {
      this.setState({ email_err: '' });
    }

    // Password Validation
    if (pass.trim().length < 6 || pass.trim().length == 0) {
      this.setState({ pass_err: 'Pass should be more than 6 digits!' });
      errors++;
    } else {
      this.setState({ pass_err: '' });
    }

    // Password Confirmation Validation
    if (passConfirm.trim().length == 0) {
      this.setState({ passCofirm_err: 'Pass Confirmation is required!' });
      errors++;
    } else if (passConfirm != pass) {
      this.setState({ passCofirm_err: 'Confirm the password does not match!' });
      errors++;
    } else {
      this.setState({ name_err: '' });
    }

    // Accept Terms Validation
    if (!acceptTerms) {
      this.setState({ acceptTerms_err: 'Please check accept!' });
      errors++;
    } else {
      this.setState({ acceptTerms_err: '' });
    }

    if (errors == 0) {
      alert('You have Signed Up Successfully .. Please Sign In');
      this.props.navigation.navigate('SignIn');
      // axios
    }
  }


  // MARK:RenderedPage
  render() {
    return (
      <>
        <View style={Styles.PageContainer}>

          {/* SignUp Header */}
          <AuthHeader headerTitle={this.state.headerTitle} headerImage={this.state.headerImage} navigation={this.props.navigation} isAuth={false}/>

          {/* SignUp Content */}
          <View style={Styles.authContentContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>

              {/* UserName TextInput */}
              <View style={[Styles.authTextInputContainer, { marginTop: RFValue(12) }]}>

                {/* Label */}
                <View style={Styles.authTextInputLabel}>
                  <Text style={{ fontSize: RFValue(13), color: COLORS.DarkGray }}>User name</Text>
                </View>

                {/* TextInput */}
                <TextInput
                  keyboardType='name-phone-pad'
                  value={this.state.userName}
                  onChangeText={value => {
                    this.setState({ userName: value });
                  }}
                  placeholder="Enter your name"
                  placeholderTextColor={COLORS.LightGray}
                  style={Styles.authTextInput}
                />

              </View>
              {/* User name error message */}
              <Text
                style={{
                  fontSize: FONTSIZE.h6,
                  color: COLORS.PrimaryTeaRose,
                  marginLeft: RFValue(30),
                }}>
                {this.state.name_err}
              </Text>



              {/* Email TextInput */}
              <View style={Styles.authTextInputContainer}>

                {/* Label */}
                <View style={[Styles.authTextInputLabel, { width: '20%' }]}>
                  <Text style={{ fontSize: RFValue(13), color: COLORS.DarkGray }}>Email</Text>
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
                  style={Styles.authTextInput}
                />

              </View>
              {/* User email error message */}
              <Text
                style={{
                  fontSize: FONTSIZE.h6,
                  color: COLORS.PrimaryTeaRose,
                  marginLeft: RFValue(30),
                }}>
                {this.state.email_err}
              </Text>



              {/* Password TextInput */}
              <View style={Styles.authTextInputContainer}>

                {/* Label */}
                <View style={Styles.authTextInputLabel}>
                  <Text style={{ fontSize: RFValue(13), color: COLORS.DarkGray }}>Password</Text>
                </View>

                {/* TextInput & Eye Icon */}
                <View style={Styles.passTextInput_eyeContainer}>

                  {/* TextInput */}
                  <TextInput
                    value={this.state.userPassword}
                    onChangeText={value => {
                      this.setState({ userPassword: value });
                    }}
                    placeholder="Enter your password"
                    placeholderTextColor={COLORS.LightGray}
                    style={[Styles.authTextInput, { width: '80%' }]}
                    secureTextEntry={!this.state.showPass}
                  />

                  {/* Eye Icon */}
                  <TouchableOpacity
                    style={Styles.eyePassIconContainer}
                    onPress={() => {
                      this.setState({ showPass: !this.state.showPass });
                    }}
                  >
                    <Feather
                      name={this.state.showPass ? 'eye' : 'eye-off'}
                      color={COLORS.LightGray}
                      size={ICONSIZE.mdIcon}
                    />
                  </TouchableOpacity>

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



              {/* Confirm Password TextInput */}
              <View style={Styles.authTextInputContainer}>

                {/* Label */}
                <View style={[Styles.authTextInputLabel, { width: '51%' }]}>
                  <Text style={{ fontSize: RFValue(13), color: COLORS.DarkGray }}>Confirm Password</Text>
                </View>

                {/* TextInput & Eye Icon */}
                <View style={Styles.passTextInput_eyeContainer}>

                  {/* TextInput */}
                  <TextInput
                    value={this.state.passConfirmation}
                    onChangeText={value => {
                      this.setState({ passConfirmation: value });
                    }}
                    placeholder="Enter your password"
                    placeholderTextColor={COLORS.LightGray}
                    style={[Styles.authTextInput, { width: '80%' }]}
                    secureTextEntry={!this.state.showPassConfirmation}
                  />

                  {/* Eye Icon */}
                  <TouchableOpacity
                    style={Styles.eyePassIconContainer}
                    onPress={() => {
                      this.setState({ showPassConfirmation: !this.state.showPassConfirmation });
                    }}
                  >
                    <Feather
                      name={this.state.showPassConfirmation ? 'eye' : 'eye-off'}
                      color={COLORS.LightGray}
                      size={ICONSIZE.mdIcon}
                    />
                  </TouchableOpacity>

                </View>

              </View>
              {/* Confirm Password error message */}
              <Text
                style={{
                  fontSize: FONTSIZE.h6,
                  color: COLORS.PrimaryTeaRose,
                  marginLeft: RFValue(30),
                }}>
                {this.state.passCofirm_err}
              </Text>



              {/* Accept Terms CheckBox */}
              <View style={Styles.acceptTermsContainer}>

                {/* Checkbox */}
                <CheckBox
                  title={"I accept & agree terms conditions & privacy policy"}
                  checked={this.state.acceptTerms}
                  onPress={() => {
                    this.setState({ acceptTerms: !this.state.acceptTerms });
                  }}
                  checkedColor={COLORS.PrimaryPurple}
                />

              </View>
              {/* Accept Terms error message */}
              <Text
                style={{
                  fontSize: FONTSIZE.h6,
                  color: COLORS.PrimaryTeaRose,
                  marginLeft: RFValue(30),
                }}>
                {this.state.acceptTerms_err}
              </Text>



              {/* SignUp Button */}
              <TouchableOpacity
                style={Styles.signUp_InBtn}
                onPress={() => {
                  this.validation();
                }}
              >
                <Text style={Styles.signUp_InText}>Sign Up</Text>
              </TouchableOpacity>

            </ScrollView>
          </View>

        </View>
      </>
    )
  }
}