import { StyleSheet,Dimensions, useWindowDimensions } from "react-native";
import colors from "./colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useStyles = () => {
    const { width,height } = useWindowDimensions();
    return  StyleSheet.create({
        commonFlexOne:{
            flex:1
        },
        commonContainerMainStyle:{
            backgroundColor:colors.rgbLightYellow
        },
        commonFlexDirectionRow:{
            flexDirection:'row'
          },
        widthCommon:{
            width:width
        },
        widthCommon95per:{
            width:width*0.95
        },
        widthCommon90per:{
            width:width*0.90
        },
        widthCommon85per:{
            width:width*0.85
        },
        widthCommon80per:{
            width:width*0.80
        },
        widthCommon75per:{
            width:width*0.75
        },
        widthCommon70per:{
            width:width*0.70
        },
        widthCommon65per:{
            width:width*0.65
        },
        widthCommon60per:{
            width:width*0.60
        },
        widthCommon55per:{
            width:width*0.55
        },
        widthCommon50per:{
            width:width*0.50
        },
        widthCommon45per:{
            width:width*0.45
        },
        widthCommon40per:{
            width:width*0.40
        },
        widthCommon35per:{
            width:width*0.35
        },
        widthCommon30per:{
            width:width*0.30
        },
        widthCommon25per:{
            width:width*0.25
        },
        widthCommon20per:{
            width:width*0.20
        },
        widthCommon15per:{
            width:width*0.15
        },
        widthCommon10per:{
            width:width*0.10
        },
        widthCommon05per:{
            width:width*0.05
        },
        heightCommon45per:{
            height:height*0.45
        },
        heightCommon40per:{
            height:height*0.40
        },
        heightCommon35per:{
            height:height*0.35
        },
        heightCommon30per:{
            height:height*0.30
        },
        heightCommon25per:{
            height:height*0.25
        },
        heightCommon20per:{
            height:height*0.20
        },
        heightCommon15per:{
            height:height*0.15
        },
        heightCommon10per:{
            height:height*0.10
        },
        heightCommon05per:{
            height:height*0.05
        },
        buttonDarkYellowColor:{
            backgroundColor:colors.rgbDarkYellow,
        },
        bgWhiteColor:{
            backgroundColor:colors.whiteCode
        },
        commonAlignSelf:
        {
            alignSelf:'center',
        },
        commonJustifyContentCenter:
        {
            justifyContent:'center',
        },
        commonJustifyContentSpaceBetween:
        {
            justifyContent:'space-between',
        },
        commonAlignItems:{
            alignItems:'center',
        },
        textAligncenterText:{
            textAlign:'center'
        },
        colorShadedBlack:{
            color:colors.shadedBlack
        },
        colorBlack:{
            color:colors.blackColor,
        },
        colorGrayDarkCode:{
            color:colors.grayCodeDarkColor
        },
        colorWhite:{
            color:colors.whiteCode
        },
        roboto_Black:{
            fontFamily:"Roboto-Black",
        },
        robotoMedium:{
            fontFamily:'Roboto-Medium',
        },
        robotoRobotoBold:{
            fontFamily:'Roboto-Bold',
        },
        robotoRobotoLight:{
            fontFamily:'Roboto-Light',
        },
        robotoRobotoRegular: {
            fontFamily:'Roboto-Regular',
        },
        fontSizeText12:{
            fontSize:12
        },
        fontSizeText14:{
            fontSize:14
        },
        fontSizeText16:{
            fontSize:16
        },
        fontSizeText18:{
            fontSize:18
        },
        fontSizeText20:{
            fontSize:20
        },
        fontSizeText22:{
            fontSize:22
        },
        fontSizeText24:{
            fontSize:24
        },
        fontSizeText34:{
            fontSize:34
        },
        commonStyleLoginAndRegisteration:{
            borderWidth: 5,
            borderRadius:10,
            borderColor: colors.whiteCode,
            elevation:10,
            backgroundColor: colors.whiteCode,
            paddingVertical:10,
            marginTop:50,
          }
    })
}

 
;