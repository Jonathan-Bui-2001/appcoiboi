import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/homes";
import TruyenThuyetScreen from "./screens/truyenthuyet";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    TruyenThuyet: TruyenThuyetScreen,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <View style={{ flex: 1 }}>
    <View style={{ marginBottom: 16 }}>
      <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('Home')}
      />
    </View>
    <View>
      <Button
        title="Go to TruyenThuyet"
        onPress={() => this.props.navigation.navigate('TruyenThuyet')}
      />
    </View>
    <AppContainer />
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
