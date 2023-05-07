import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Location from "expo-location";
export default function App() {
  //recuperer coordonnées utilisateur
  const [location, setlocation] = useState(null);

  useEffect(() => {
    const getCoordinates = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      const userLocation = await Location.getCurrentPositionAsync();
      userLocation(userLocation);
    };

    getCoordinates();
  }, []);
  //2 requete vers les serveurs
  //ville
  //meteo du jour
  //previsions
  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Location est nulle</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>{location.coords.latitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
