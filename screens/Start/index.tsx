import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Database from "sql";
import initializeTables from "sql/initializeTables";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import TheLayout from "layouts";
import AppConstants from "styles/constants";
import Button from "components/UI/Button";
import Logo from "components/UI/Logo";
import TopPanel from "components/UI/TopPanel";

const StartScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function onLetsStartPressHandler(): void {
    navigation.push("AddCard");
  }

  useEffect(() => {
    Database.transaction((transaction: SQLTransaction) => {
      initializeTables(transaction);
      transaction.executeSql("SELECT * FROM cards", [], (transaction: SQLTransaction, result: SQLResultSet) => {
        if (result.rows.length) {
          navigation.push("Home");
        } else {
          setIsLoading(false);
        }
      });
    });
  }, []);

  return (
    <TheLayout>
      {!isLoading && (
        <View style={styles.body}>
          <TopPanel />
          <View>
            <Logo variant="big" />
            <Text style={styles.bodyText}>
              Money Dealer - мобильное приложение для отслеживания ваших расходов и доходов, управления накоплениями и
              отслеживания балансов на ваших картах.
            </Text>
            <View style={styles.bodyButton}>
              <Button onPressHandler={onLetsStartPressHandler}>Поехали</Button>
            </View>
          </View>
          <View style={styles.footer} />
        </View>
      )}
    </TheLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 43,
  },
  bodyText: {
    fontFamily: AppConstants.FontRegular,
    color: "#F9F9F9",
    marginTop: 13,
  },
  bodyButton: {
    marginTop: 60,
  },
  footer: {
    height: 40,
  },
});

export default StartScreen;
