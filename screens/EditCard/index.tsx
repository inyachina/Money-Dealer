import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Database from "sql";
import { SQLResultSet, SQLTransaction } from "expo-sqlite";
import TheLayout from "layouts";
import AppConstants from "styles/constants";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Skin from "components/UI/Skin";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import PaymentSystem from "components/UI/PaymentSystem";

const EditCardScreen: FunctionComponent<IScreen> = ({ navigation, route }) => {
  const [activePaymentSystem, setActivePaymentSystem] = useState<IPaymentSystem>("Visa");
  const [activeSkin, setActiveSkin] = useState<number>(0);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  function onUpdateCardPressHandler(): void {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql("UPDATE cards SET number = ?, endDate = ?, paymentSystem = ?, colorId = ? WHERE id = ?", [
        cardNumber,
        endDate,
        activePaymentSystem,
        activeSkin,
        route.params.id,
      ]);
    });
    navigation.push("Home");
  }

  function onRemoveCardPressHandler(): void {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql("DELETE FROM cards WHERE id = ?", [route.params.id]);
      transaction.executeSql("DELETE FROM transactions WHERE cardId = ?", [route.params.id]);
      transaction.executeSql("SELECT * FROM cards", [], (transaction: SQLTransaction, result: SQLResultSet) => {
        if (result.rows.length) {
          navigation.push("Home");
        } else {
          navigation.push("Start");
        }
      });
    });
  }

  useEffect(() => {
    Database.transaction((transaction: SQLTransaction) => {
      transaction.executeSql(
        "SELECT * FROM cards WHERE id = ?",
        [route.params.id],
        (transaction: SQLTransaction, result: SQLResultSet) => {
          setActiveSkin(Number(result.rows._array[0].colorId));
          setActivePaymentSystem(result.rows._array[0].paymentSystem);
          setCardNumber(String(result.rows._array[0].number));
          setEndDate(result.rows._array[0].endDate.replace("/", "").replace("/", ""));
        }
      );
    });
  }, []);

  return (
    <TheLayout>
      <TopPanel navigation={navigation} withBack isGoBack />
      <View style={styles.body}>
        <Label>Измените стиль:</Label>
        <View style={styles.skins}>
          {AppConstants.CardSkins.map(skin => {
            return <Skin key={skin.id} setState={setActiveSkin} state={activeSkin} {...skin} />;
          })}
        </View>
        <View style={styles.mt}>
          <Label>Измените информацию:</Label>
          <View style={styles.cardInfoContent}>
            {Boolean(cardNumber) ? (
              <Input
                defaultValue={cardNumber}
                mask="9999 9999 9999 9999"
                state={cardNumber}
                setState={setCardNumber}
                keyboardType="decimal-pad"
                placeholder="Измените информацию о карту..."
              />
            ) : (
              <Input state={cardNumber} setState={setCardNumber} placeholder="Enter card number..." />
            )}
            {Boolean(endDate) ? (
              <Input
                defaultValue={endDate}
                mask="99/99/9999"
                state={endDate}
                setState={setEndDate}
                keyboardType="decimal-pad"
                placeholder="Enter end date..."
              />
            ) : (
              <Input state={endDate} setState={setEndDate} placeholder="Enter end date..." />
            )}
          </View>
        </View>
        <View style={styles.mt}>
          <Label>Измените платежную ситему:</Label>
          <View style={styles.paymentSystems}>
            <PaymentSystem
              system="visa"
              isActive={activePaymentSystem === "Visa"}
              onPress={() => setActivePaymentSystem("Visa")}
            />
            <PaymentSystem
              system="mir"
              isActive={activePaymentSystem === "Mir"}
              onPress={() => setActivePaymentSystem("Mir")}
            />
          </View>
        </View>
        <View style={styles.createButton}>
          <Button variant="primary" onPressHandler={onUpdateCardPressHandler}>
            Сохрнаить
          </Button>
        </View>
        <View style={styles.removeButton}>
          <Button variant="danger" onPressHandler={onRemoveCardPressHandler}>
            Удалить карту
          </Button>
        </View>
      </View>
    </TheLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 46,
  },
  mt: {
    marginTop: 42,
  },
  createButton: {
    marginTop: 82,
  },
  removeButton: {
    marginTop: 12,
    paddingBottom: 43,
  },
  skins: {
    marginTop: 23,
    height: 195,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardInfoContent: {
    marginTop: 23,
    height: 143,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  paymentSystems: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
  },
});

export default EditCardScreen;
