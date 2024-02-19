import { 
  Bin, 
  Contacts, 
  Lock, 
  MenuBook, 
  Person, 
  Pin, 
} from "@/assets/icons";
import { InfoBlock, ProfileBar } from "@/components/profile";
import { Colors } from "@/styles/theme";
import { StyleSheet, View } from "react-native";

const settingsLinks = [
  {
    screen: "PersonalInformation",
    icon: <Person color={Colors.primary} />,
    label: "Personal Information"
  },
  {
    screen: "Location",
    icon: <Pin color={Colors.primary} />,
    label: "Location"
  },
  {
    screen: "UpdatePassword",
    icon: <Lock color={Colors.primary} />,
    label: "Update Password"
  },
  {
    screen: "DeleteAccount",
    icon: <Bin color={Colors.primary} />,
    label: "Delete Account"
  }
];

const legalLinks = [
  {
    screen: "TermsOfService",
    icon: <MenuBook color={Colors.primary} />,
    label: "Terms of service"
  },
  {
    screen: "PrivacyPolicy",
    icon: <Contacts color={Colors.primary} />,
    label: "Privacy policy"
  }
];

export function Settings() {
  return (
    <View style={styles.container}>
      <ProfileBar />
      <InfoBlock
        blockName="Settings"
        options={settingsLinks}
      />
      <InfoBlock
        blockName="Legal"
        options={legalLinks}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    gap: 25
  }
})