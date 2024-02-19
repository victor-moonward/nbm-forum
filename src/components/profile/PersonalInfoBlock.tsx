import { StyleSheet, View } from "react-native";
import { Input, Link } from "../common";
import { Colors } from "@/styles/theme";
import { UserData } from "@/types";

interface PersonalInfoBlock {
  userData: UserData["user"] | null;
}

export function PersonalInfoBlock({ userData }: PersonalInfoBlock) {
  if (!userData) return;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.image}></View>
        <Link onPress={() => console.log("test")}>
          Edit profile picture
        </Link>
      </View>
      <View>
        <Input
          onChangeText={() => console.log("test")}
          onBlur={() => console.log("test")}
          placeholder="Enter your first name here"
          label="Your name"
          value={userData.firstName}
        />
        <Input
          onChangeText={() => console.log("test")}
          onBlur={() => console.log("test")}
          placeholder="Enter your last name here"
          value={userData.lastName}
        />
        <Input
          onChangeText={() => console.log("test")}
          onBlur={() => console.log("test")}
          label="Email"
          placeholder="Enter your last name here"
          value={userData.email}
          containerStyle={styles.emailInput}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20
  },
  image: {
    height: 183,
    width: 183,
    backgroundColor: Colors.placeholder,
    borderRadius: 92
  },
  emailInput: {
    marginTop: 5,
  },
  inputHighlighted: {
    borderColor: Colors.primary,
  }
})