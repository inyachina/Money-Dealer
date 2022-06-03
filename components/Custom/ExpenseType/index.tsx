import React, { FunctionComponent } from "react";
import { Dimensions, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import AppConstants from "styles/constants";
import { IIncomeExpenseType } from "libs/config";

interface IExpenseType {
  onPressHandler: () => void;
  isActive: boolean;
  data: IIncomeExpenseType;
}

const ExpenseType: FunctionComponent<IExpenseType> = ({ onPressHandler = () => {}, data, isActive = false }) => {
  return (
    <TouchableOpacity activeOpacity={AppConstants.ActiveOpacity} onPress={onPressHandler}>
      <Animatable.View transition="opacity" style={{ opacity: isActive ? 1 : 0.85 }}>
        <LinearGradient style={[styles.incomeType, isActive ? styles.shadow : {}]} colors={["#FACCD2", "#FECDF4"]}>
          <Image source={data.image} style={styles.image} />
          <Text style={styles.text}>{data.title}</Text>
        </LinearGradient>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  incomeType: {
    width: Dimensions.get("window").width / 2.8 - 38,
    height: Dimensions.get("window").width / 2.8 - 38,
    borderRadius: 20,
    marginTop: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: 8,
  },
  image: {
    width: Dimensions.get("window").width / 4 - 38,
    height: Dimensions.get("window").width / 4 - 38,
  },
  text: {
    marginTop: 8,
    fontSize: 11,
    fontFamily: AppConstants.FontBold,
  },
  shadow: {
    shadowColor: "#eeeeee",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 14.78,
    elevation: 14,
  },
});

export default ExpenseType;
