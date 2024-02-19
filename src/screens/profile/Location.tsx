import { AutoCompleteInput } from "@/components/common";
import { EditInfoBar } from "@/components/profile";
import { PageTitle } from "@/components/profile/PageTitle";
import { useUser } from "@/stores";
import { StyleSheet, View } from "react-native";

const data = [
  "144 Edward Street, Brisbane City"
];

export function Location() {
  const userData = useUser(state => state.data);

  return (
    <View style={styles.container}>
      <EditInfoBar onPress={() => console.log("test")} />
      <PageTitle>Location</PageTitle>
      <AutoCompleteInput
        data={data}
        onSelect={() => console.log("value")}
        label="Your address"
        placeholder="Start typing..."
        defaultValue={userData?.address}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 20
  }
});