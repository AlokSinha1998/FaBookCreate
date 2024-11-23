import { Falsy, RecursiveArray, RegisteredStyle, TextStyle, ViewStyle } from "react-native";

export type StackScreen = {
    Login:undefined,
    SignUp:undefined
}

export type CustomeButtonUIProps = {
    delayNumber:number
    disabled?:boolean,
      touchableStyle?:
        | Falsy
        | ViewStyle
        | RegisteredStyle<ViewStyle>
        | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>>;
      onPress?: any;
      textStyles?:
        | Falsy
        | TextStyle
        | RegisteredStyle<TextStyle>
        | RecursiveArray<Falsy | TextStyle | RegisteredStyle<TextStyle>>;
      text?: any;
    };

    export type CommonTextInputProps = {
      onPressTouchTextInput?: (event: GestureResponderEvent) => void;
      onFocus?: () => void;
      onBlur?: () => void;
      touchDisabled?: boolean;
      blurOnSubmit?: boolean;
      value?: any;
      maxLength?: number;
      ref?: any;
      keyboardType?: KeyboardTypeOptions | undefined;
      onSubmitEditing?: any;
      editable?: boolean;
      returnKeyType?: ReturnKeyTypeOptions | undefined;
      placeholder?: string;
      multiline?: boolean;
      placeholderTextColor?: string;
      numberOfLines?: number;
      secureTextEntry?: boolean;
      onChangeText?: ((text: string) => void) | undefined;
      touchStyle?:
        | Falsy
        | ViewStyle
        | RegisteredStyle<ViewStyle>
        | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>>;
      styleTextInput?:
        | Falsy
        | TextStyle
        | RegisteredStyle<TextStyle>
        | RecursiveArray<Falsy | TextStyle | RegisteredStyle<TextStyle>>;
    };