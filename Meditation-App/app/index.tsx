import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import "../global.css";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center text-sky-400">
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
  }
});
