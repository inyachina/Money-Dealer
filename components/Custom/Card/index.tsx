import React, { FunctionComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";
import toPriceFormat from "libs/toPriceFormat";
import VisaSVG from "components/SVGs/Visa";
import MirSvg from "components/SVGs/Mir";

interface ICard {
  onPressHandler?: () => void;
  paymentSystem?: string;
  number?: string;
  balance?: number;
  date?: string;
  colorId?: number;
}

const Card: FunctionComponent<ICard> = ({
  onPressHandler = undefined,
  paymentSystem = "Visa",
  balance = 45000,
  number = "0000 0000 0000 0000",
  date = "08/23",
  colorId = 0,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={onPressHandler ? AppConstants.ActiveOpacity : 1}
      onPress={() => {
        if (onPressHandler) {
          onPressHandler();
        }
      }}
    >
      <LinearGradient colors={AppConstants.CardSkins[colorId].colors} end={{ x: 0.9, y: 0.2 }} style={styles.minCard}>
        {paymentSystem === "Visa" ? <VisaSVG /> : <MirSvg />}
        <View>
          <Text style={styles.price}>{toPriceFormat(balance)} ₽</Text>
          <Text style={styles.typeBalance}>{paymentSystem} Balance</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>
            ****{" "}
            {number[number.length - 4] +
              number[number.length - 3] +
              number[number.length - 2] +
              number[number.length - 1]}
          </Text>
          <Text style={[styles.cardInfoText, styles.cardInfoDate]}>
            {date.slice(3)[0]}
            {date.slice(3)[1]}
            {date.slice(3)[2]}
            {date.slice(3)[5]}
            {date.slice(3)[6]}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  minCard: {
    height: 195,
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 32,
    paddingTop: 36,
    shadowColor: "#eeeeee",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 14.78,
    elevation: 14,
  },
  price: {
    fontFamily: AppConstants.FontExtra,
    fontSize: 16,
  },
  typeBalance: {
    fontSize: 11,
    marginTop: 7,
    fontFamily: "Lato-Regular",
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 11,
    fontFamily: AppConstants.FontRegular,
  },
  cardInfoText: {
    fontSize: 11,
  },
  cardInfoDate: {
    fontFamily: AppConstants.FontExtra,
  },
});

export default Card;
