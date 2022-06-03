import React, { FunctionComponent } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Svg, { G, Defs, Path, LinearGradient, Stop } from "react-native-svg"
import AppConstants from "styles/constants";

const VisaSystem: FunctionComponent<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <Animatable.View transition={"opacity"} style={{ opacity: isActive ? 1 : 0.3 }}>
      <Svg width="52" height="25" viewBox="0 0 52 25" fill="none">
        <Path d="M22.5256 5.27512L19.4991 19.2152H23.1676L26.1023 5.27512H22.5256Z" fill="#E4E4E4" />
        <Path
          d="M17.2064 5.27513L13.4462 14.7213L11.8871 6.65079C11.7037 5.73368 10.97 5.27513 10.2363 5.27513H4.09169L4 5.64199C5.28395 5.91713 6.65963 6.37567 7.57674 6.83422C8.12701 7.10936 8.21868 7.38448 8.40211 8.02645L11.2452 19.1235H15.097L20.9665 5.18344H17.2064V5.27513Z"
          fill="#E4E4E4"
        />
        <Path
          d="M45.7284 5.27512H42.6102C41.8765 5.27512 41.3263 5.64199 41.0512 6.28397L35.6402 19.2152H39.4003L40.134 17.1058H44.7196L45.1781 19.2152H48.4797L45.7284 5.27512ZM41.3263 14.2628L43.2522 9.03529L44.3527 14.2628H41.3263Z"
          fill="#E4E4E4"
        />
        <Path
          d="M30.8712 9.12698C30.8712 8.66843 31.3298 8.11818 32.4303 7.93476C32.9806 7.84304 34.3563 7.84306 36.0071 8.57674L36.649 5.64199C35.8236 5.36685 34.6314 5 33.2557 5C29.679 5 27.2028 6.92593 27.2028 9.58554C27.2028 11.6032 29.037 12.7037 30.321 13.3457C31.6966 13.9876 32.1552 14.4462 32.1552 15.0882C32.1552 16.0053 31.0547 16.4638 29.9541 16.4638C28.1199 16.4638 27.1111 16.0053 26.2857 15.5467L25.6437 18.5732C26.4691 18.94 28.0282 19.3069 29.679 19.3069C33.4391 19.3069 35.9153 17.4727 35.9153 14.5379C35.9153 11.0529 30.7795 10.7778 30.8712 9.12698Z"
          fill="#E4E4E4"
        />
      </Svg>
    </Animatable.View>
  );
};

const MirSystem: FunctionComponent<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <Animatable.View transition={"opacity"} style={{ opacity: isActive ? 1 : 0.3 }}>
       <Svg
       width={52}
       height={25}
       viewBox="0 0 157 48"
       fill="none"
     >
       <Path
         d="M34.59 7.77l-5.829 20.194h-.997L21.934 7.77A8.015 8.015 0 0014.23 2H.25v43.96h13.998V19.979h.997l8.013 25.981h10.009l7.996-25.981h.997V45.96h13.998V2h-13.98a8.01 8.01 0 00-7.688 5.77zm77.503 38.19h14.084v-13h14.17c7.411 0 13.722-4.19 16.164-10.079h-44.418V45.96zM87.142 6.636l-9.854 21.345h-.997V2H62.293v43.96h11.883c3.13 0 5.967-1.82 7.274-4.636l9.853-21.328h.998V45.96h13.997V2H94.415a8.022 8.022 0 00-7.273 4.636z"
         fill="#006848"
       />
       <Path
         d="M140.989 0c4.041 0 7.704 1.545 10.473 4.087a15.34 15.34 0 015.038 11.385c0 .927-.103 1.837-.258 2.73h-26c-8.805 0-16.268-5.77-18.778-13.737-.035-.086-.052-.19-.086-.292-.069-.24-.121-.498-.189-.739A20.423 20.423 0 01110.69 0h30.299z"
         fill="url(#paint0_linear_5105_91864)"
       />
       <Defs>
         <LinearGradient
           id="paint0_linear_5105_91864"
           x1={156.5}
           y1={56.9276}
           x2={110.97}
           y2={56.9276}
           gradientUnits="userSpaceOnUse"
         >
           <Stop stopColor="#1E5CD8" />
           <Stop offset={1} stopColor="#02AFFF" />
         </LinearGradient>
       </Defs>
     </Svg>
     </Animatable.View>
  )
};

interface IPaymentSystem {
  system: "visa" | "mir";
  isActive?: boolean;
  onPress?: () => void;
}

const PaymentSystem: FunctionComponent<IPaymentSystem> = ({
  system = "visa",
  isActive = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity activeOpacity={AppConstants.ActiveOpacity} onPress={onPress}>
      <View style={[styles.tag]}>
        {system === "visa" && <VisaSystem isActive={isActive} />}
        {system === "mir" && <MirSystem isActive={isActive} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tag: {
    width: Dimensions.get("window").width / 2 - 37,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 18,
    backgroundColor: "#1E1E2D",
    borderRadius: 20,
  },
});

export default PaymentSystem;
