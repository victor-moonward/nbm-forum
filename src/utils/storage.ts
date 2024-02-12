import AsyncStorage from "@react-native-async-storage/async-storage";

interface IStoreData {
  id: string;
  value: unknown;
}

interface IGetData extends Omit<IStoreData, "value"> { }

export async function storeData({ id, value }: IStoreData) {
  try {
    await AsyncStorage.setItem(id, JSON.stringify(value));
  } catch (e) {
    throw e;
  }
}

export async function getStoredData({ id }: IGetData) {
  try {
    const value = await AsyncStorage.getItem(id);
    return value !== null ? JSON.parse(value) : null;
  } catch (e) {
    throw e;
  }
}