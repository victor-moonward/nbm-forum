import AsyncStorage from "@react-native-async-storage/async-storage";

interface StoreDataProps {
  id: string;
  value: unknown;
}

interface GetDataProps extends Omit<StoreDataProps, "value"> { }

export async function storeData({ id, value }: StoreDataProps) {
  try {
    await AsyncStorage.setItem(id, JSON.stringify(value));
  } catch (e) {
    throw e;
  }
}

export async function getStoredData({ id }: GetDataProps) {
  try {
    const value = await AsyncStorage.getItem(id);
    return value !== null ? JSON.parse(value) : null;
  } catch (e) {
    throw e;
  }
}