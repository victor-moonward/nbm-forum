import { ScrollView, StyleSheet, View } from "react-native";
import { IconButton, Input, Title } from "../common";
import { Plus, Profile, Search } from "@/assets/icons";
import { Colors } from "@/styles/theme";
import { SingleTag } from ".";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "@/types";

interface TopBarProps {
  receivedTags: Array<{ name: string }> | undefined
  handleTags: (tag: string) => void;
}

export function TopBar({ receivedTags, handleTags }: TopBarProps) {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title>Forum</Title>
        <View style={styles.actions}>
          <IconButton
            icon={<Plus color={Colors.primary} />}
            onPress={() => navigate("CreatePost")}
          />
          <IconButton
            icon={<Profile color={Colors.primary} />}
            onPress={() => console.log("test")}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Search"
          layout="secondary"
          icon={<Search color={styles.input.color} />}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.tagsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {receivedTags?.map(item => (
          <SingleTag
            key={item.name}
            onPress={handleTags}
            active={false}
          >
            {item.name}
          </SingleTag>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 5,
    borderBottomColor: Colors.borderCard
  },
  input: {
    color: Colors.placeholder,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 15
  },
  tagsContainer: {
    flexGrow: 1,
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  }
})