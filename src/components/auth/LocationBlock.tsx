import { StyleSheet, View } from "react-native";
import { AutoCompleteInput, Button, Text, Title } from "../common";
import { ArrowRight } from "@/assets/icons";
import { Colors } from "@/styles/theme";
import { useCreateAccountForm } from "@/hooks/useCreateAccountForm";
import { useCreateAccount } from "@/stores";
import { useState } from "react";

const data = [
  "144 Edward Street, Brisbane City"
];

export function LocationBlock() {
  const [selectedOption, setSelectedOption] = useState('');
  const handleNextStep = useCreateAccount(state => state.handleNextStep);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Title>Where are you Located?</Title>
        <Text>Add your address. Select your address from the suggested address below.</Text>
      </View>
      <AutoCompleteInput
        data={data}
        onSelect={setSelectedOption}
        label="Enter your address"
        placeholder="Start typing..."
      />
      <Button
        onPress={() => handleNextStep({ address: selectedOption })}
        icon={<ArrowRight color={Colors.clean} />}
        disabled={!selectedOption}
      >
        Next
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
  },
  textContainer: {
    gap: 10
  }
});