import { Image, StyleSheet, View } from "react-native";
import { ArrowLeft } from "@/assets/icons/ArrowLeft";
import { Title } from "@/components/common";
import { Colors } from "@/styles/theme";
import Logo from "@/assets/images/logo.png";

export function AuthBar() {
  return (
    <View>
      <View style={styles.topBar}>
        <ArrowLeft color={styles.icon.color} />
        <View style={styles.logoContainer}>
          <Title style={styles.title}>NBM</Title>
          <Image source={Logo} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3
  },
  title: {
    color: Colors.primary
  },
  icon: {
    color: Colors.text
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
})