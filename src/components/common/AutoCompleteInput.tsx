import { ChangeEvent, useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Input, Text } from ".";
import { ArrowForward } from "@/assets/icons";
import { Colors } from "@/styles/theme";

interface IAutoCompleteInput {
  data: Array<string>;
  onSelect: (name: string) => void;
  placeholder: string;
  label: string;
  defaultValue?: string;
}

export function AutoCompleteInput({
  data,
  onSelect,
  label,
  placeholder,
  defaultValue
}: IAutoCompleteInput) {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState<Array<string | never>>([]);

  function handleInputChange(text: string) {
    setQuery(text);
    if (text.length > 0) {
      const filtered = data.filter(item =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  function handleItemSelect(item: string) {
    setQuery(item);
    setFilteredData([]);
    onSelect(item);
  };

  useEffect(() => {
    if (!defaultValue) return;

    handleItemSelect(defaultValue);
  }, [defaultValue])

  return (
    <View style={styles.container}>
      <Input
        label={label}
        placeholder={placeholder}
        value={query}
        onChangeText={(value) => handleInputChange(value as string)}
      />
      <FlatList
        style={styles.listContainer}
        data={filteredData}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleItemSelect(item)}
          >
            <Text>{item}</Text>
            <ArrowForward
              color={styles.listItem.color}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8
  },
  listContainer: {
    gap: 3,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: Colors.inputIcon,
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
})