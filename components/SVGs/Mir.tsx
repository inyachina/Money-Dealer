import React, { FunctionComponent } from "react";
import Svg, { Path, Defs, LinearGradient,Stop } from "react-native-svg";

const MirSVG: FunctionComponent = () => {
  return (
    <Svg
    width={52}
    height={18}
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
  );
};

export default MirSVG;
