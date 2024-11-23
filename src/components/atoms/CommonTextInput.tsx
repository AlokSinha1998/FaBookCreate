import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useContext } from 'react';
  //types
  import { CommonTextInputProps } from '../../utils/types';
  //colors
  import colors from '../../utils/colors';
  //styles
  import { useStyles } from '../../utils/styles';
  
  
  const CommonTextInput = (props: CommonTextInputProps) => {
    const AppStyle = useStyles();
    return (
      <TextInput
        ref={props.ref}
        style={[
          AppStyle.fontSizeText16,
          AppStyle.robotoMedium,
          AppStyle.colorShadedBlack,
          {
            paddingHorizontal: 10,
            borderColor:colors.grayColorCode,
          },
          props.styleTextInput,
        ]}
        onFocus={props.onFocus}
              onBlur={props.onBlur}
        keyboardType={props.keyboardType}
        onSubmitEditing={props.onSubmitEditing}
        value={props.value}
        maxLength={props.maxLength}
        secureTextEntry={props.secureTextEntry}
        returnKeyType={props.returnKeyType}
        onChangeText={props.onChangeText}
        editable={props.editable}
        placeholder={props.placeholder}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholderTextColor={colors.grayColorCode}
      />
    );
  };
  
  export default CommonTextInput;
  
  const styles = StyleSheet.create({});
  