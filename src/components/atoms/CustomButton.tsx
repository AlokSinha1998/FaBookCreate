import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
  } from 'react-native';
  import React from 'react';
  //styles
  import colors from '../../utils/colors';
  //files
  import {CustomeButtonUIProps} from '../../utils/types';
  //SDK
import Animated,{FadeIn,FadeOut,FadeInUp} from 'react-native-reanimated';
  
  const CustomButton = (props: CustomeButtonUIProps) => {
    const {width, height} = useWindowDimensions();
    return (
      <TouchableOpacity
        style={[
          {
            backgroundColor: colors.whiteCode,
            width: width * 0.5,
            borderRadius: 5,
            height: width * 0.14,
            justifyContent: 'center',
          },
          props.touchableStyle,
        ]}
        disabled={props.disabled}
        onPress={props.onPress}>
        <Text style={[styles.textStyles, props.textStyles]}>{props.text}</Text>
      </TouchableOpacity>
    );
  };
  
  export default CustomButton;
  
  const styles = StyleSheet.create({
    textStyles: {
      textAlign: 'center',
      fontSize: 16,
      color: colors.rgbGreenBackColor,
      fontWeight: 'bold',
      paddingVertical: 10,
    },
  });
  