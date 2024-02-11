import { View } from "react-native";
import { Text } from "react-native-svg";
import { SplashScreen } from "./SplashScreen";

export function Feed() {
  const isLoading = true;

  if (isLoading) return <SplashScreen colorSchema="secondary" />

  return (
    <View style={{
      flex: 1
    }}>
      <Text>Feed</Text>
    </View>
  )
}