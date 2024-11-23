import { Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreen } from '../../utils/types';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { useStyles } from '../../utils/styles';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonTextInput from '../../components/atoms/CommonTextInput';
import CustomButton from '../../components/atoms/CustomButton';

import metalogo from '../assets/images/metalogo.png';

type propType = NativeStackScreenProps<StackScreen, 'Login'>;


const Login = (props: propType) => {
  const AppStyle = useStyles();
  const { width, height } = useWindowDimensions();

  const [initialState, setInitialState] = useState({
    firstTimeKey: '',
    checkClick:false,
    email: "",
    password: '',
    showPassword:false,
  });

  const [focusStatus, setFocusStatus] = useState({
    input1: false,
    input2: false,
    input3: false,
  });

  const handleFocus = (inputName: string) => {
    setFocusStatus({ ...focusStatus, [inputName]: true });
  };

  const handleBlur = (inputName: string) => {
    setFocusStatus({ ...focusStatus, [inputName]: false });
  };

  useEffect(() => {


    return () => {

    }
  }, [])

  const onChangeText = (id: number, text: any) => {
    if (id === 1) {
      setInitialState({
        ...initialState,
        email: text
      });
      return
    }
    if (id === 2) {
      setInitialState({
        ...initialState,
        password: text
      });
      return
    }
  }
  return (
    <SafeAreaView style={[AppStyle.commonFlexOne]}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.leftSideClorLightWhite, colors.middleSideClorWhite, colors.rightSideClorRightWhite]} style={[AppStyle.commonFlexOne]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[AppStyle.commonFlexOne,{
          justifyContent:initialState.firstTimeKey !== "" || initialState.checkClick ? 'center' : 'space-evenly',
        }]}  

        >
        <View style={[AppStyle.commonAlignItems, AppStyle.commonJustifyContentCenter, {
          marginVertical: 20,
          // height: initialState.firstTimeKey !== "" || initialState.checkClick ? height * 0.40 : height * 0.30,
          justifyContent: initialState.firstTimeKey !== "" || initialState.checkClick ? 'center' : 'space-evenly',
          // backgroundColor:'pink',
        }]}>
          <View style={[AppStyle.commonFlexDirectionRow, AppStyle.commonJustifyContentCenter, AppStyle.commonAlignItems]}>
            <Text style={[AppStyle.colorGrayDarkCode, AppStyle.fontSizeText18, AppStyle.robotoMedium]}>English (US)</Text>
            <AntDesign name='down' color={colors.grayCodeDarkColor} size={16} style={{
              marginLeft: 5,
            }} />
          </View>
          <View>
            <Ionicons name='logo-facebook' color={colors.faceBookDarkBlue} size={width * 0.20} style={{
              // marginLeft:5,
              marginTop: 15,
            }} />
          </View>
          {(initialState.firstTimeKey !== "" || initialState.checkClick) && (<View style={[{
            marginTop: 25,
          }]}>
            <View
              style={[{
                width: width * 0.95,
                backgroundColor: colors.grayColorCode,
                height: 1.5,
              }]}
            />
            <Text style={[AppStyle.widthCommon95per, AppStyle.fontSizeText16, AppStyle.robotoRobotoRegular, {
              marginTop: 10,
              letterSpacing: 1,
            }]}>By continuing, you agree that your mobile provider will help with autofilling your mobile number on this device. Facebook will use this number to help you log in or access your account. The mobile number and your preference will be shared with your mobile provider and your preference can be changed in Settings.</Text>
            <TouchableOpacity style={[{
              marginTop: 5,
            }]} onPress={() => {

            }}>
              <Text style={[AppStyle.fontSizeText16, AppStyle.robotoMedium, {
                color: colors.faceBookDarkBlue
              }]}>{`Change Settings`}</Text>
            </TouchableOpacity>
            <View
              style={[{
                width: width * 0.95,
                backgroundColor: colors.grayColorCode,
                height: 1.5,
                marginTop: 10,
              }]}
            />
          </View>)}
        </View>
       
          <View style={styles.centeredView}
          // keyboardVerticalOffset={30}
          >
            <View style={[{
              justifyContent:'space-between',

            }]}>
            <View style={[{
              // backgroundColor:'yellow',
              // marginTop: initialState.firstTimeKey !== ""|| initialState.checkClick ?-height*0.12:0 ,
            }]}>

            
            <View style={[ AppStyle.commonAlignSelf, AppStyle.bgWhiteColor, {
            
            }]}>
              {initialState.email.length > 0 && (<Text style={[AppStyle.fontSizeText16, AppStyle.colorGrayDarkCode, {
                marginLeft: 15,
                marginTop: 5
              }]}>{'Mobile number or email'}</Text>)}
                <View
            style={[AppStyle.widthCommon90per,AppStyle.commonFlexDirectionRow, AppStyle.commonAlignItems, styles.passwordView, {
              borderWidth: 1,
              borderColor: focusStatus.input1 ? colors.shadedBlack : colors.grayCodeDarkColor,
              borderRadius: 10,
              // borderColor: focusStatus.input2 ? colors.shadedBlack : colors.grayColorCode,
            }]}>
              <CommonTextInput
                placeholder={"Mobile number or email"}
                value={initialState.email}
                onChangeText={(text) => { onChangeText(1, text) }}
                keyboardType={'email-address'}
                styleTextInput={[AppStyle.widthCommon75per,{
                  marginTop: initialState.email.length > 0 ? -10 : 0,
                  paddingLeft: 10,
                  margin: 5,

                }]}
                onFocus={() => handleFocus('input1')}
                onBlur={() => handleBlur('input1')}
              />
              <TouchableOpacity
              style={styles.styleTouch}
              onPress={() => {
                setInitialState({
                  ...initialState,
                  checkClick: !initialState.checkClick,
                });
              }}>
              <AntDesign
                name={'infocirlceo'}
                size={16}
                color={colors.blackColor}
              />
            </TouchableOpacity>
            </View>
            </View>
            <View style={[AppStyle.widthCommon90per, AppStyle.commonAlignSelf, AppStyle.bgWhiteColor, {
              borderWidth: 1,
              borderColor: focusStatus.input2 ? colors.shadedBlack : colors.grayCodeDarkColor,
              borderRadius: 10,
              marginTop: 10,
            }]}>
              {initialState.password.length > 0 && (<Text style={[AppStyle.fontSizeText16, AppStyle.colorGrayDarkCode, {
                // margin:10,
                marginLeft: 15,
                marginTop: 5
              }]}>{'Password'}</Text>)}
                 <View
            style={[AppStyle.commonFlexDirectionRow, AppStyle.commonAlignItems, styles.passwordView, {
              // borderColor: focusStatus.input2 ? colors.shadedBlack : colors.grayColorCode,
            }]}>
            <CommonTextInput
              placeholder={"Password"}
              value={initialState.password}
              onChangeText={(text) => { onChangeText(2, text) }}
              secureTextEntry={!initialState.showPassword}
              styleTextInput={[AppStyle.widthCommon75per, {
                margin: 5,
                marginTop: initialState.password.length > 0 ? -10 : 0,
                paddingLeft: 10,
              }]}
              onFocus={() => handleFocus('input2')}
              onBlur={() => handleBlur('input2')}
            />
            <TouchableOpacity
              style={styles.styleTouch}
              onPress={() => {
                setInitialState({
                  ...initialState,
                  showPassword: !initialState.showPassword,
                });
              }}>
              <Entypo
                name={!initialState.showPassword ? 'eye-with-line' : 'eye'}
                size={16}
                color={colors.blackColor}
              />
            </TouchableOpacity>
          </View>
            </View>
            <CustomButton
          delayNumber={300}
          text={'Log in'}
          touchableStyle={[AppStyle.widthCommon90per, AppStyle.commonAlignSelf, {
           backgroundColor:colors.faceBookDarkBlue,
            marginTop:30,
            borderRadius:30,
          }]}
          textStyles={[AppStyle.colorWhite]}
          onPress={()=>{

          }}
        />
        <TouchableOpacity style={[{
              marginTop: 5,
            }]} onPress={() => {

            }}>
              <Text style={[AppStyle.fontSizeText16, AppStyle.robotoMedium, {
                color: colors.grayCodeDarkColor,
                textAlign:'center',
                marginTop:20,
              }]}>{`Forgot password?`}</Text>
            </TouchableOpacity>
            </View>
          

       
        </View> 

          </View>
       
        <View style={[{
       
        }]}>
        <CustomButton
          delayNumber={300}
          text={'Create a new account'}
          touchableStyle={[AppStyle.widthCommon90per, AppStyle.commonAlignSelf, {
           backgroundColor:colors.whiteCode,
           borderWidth:1,
           borderColor:colors.faceBookDarkBlue,
            marginTop:initialState.firstTimeKey !== "" || initialState.checkClick?height*0.05: height*0.2,
            borderRadius:30,
          }]}
          textStyles={[{
            color:colors.faceBookDarkBlue
          }]}
          onPress={()=>{

          }}
        />
         <Image
          source={metalogo}
          style={[{
              height:height*0.05,
              width:width*0.20,
              alignSelf:'center',
          }]}
          resizeMode={'contain'}
        />
        </View>
        </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
  },
  styleTouch: {
    padding: 12,
  },
  passwordView: {
    // borderRadius: 8,
    // borderWidth: 3,
    // borderColor: colors.grayColorCode,
    // marginTop: 5,
  },
})