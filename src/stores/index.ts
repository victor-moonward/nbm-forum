import { create } from "zustand";
import { getStoredData, storeData } from "@/utils/storage";
import { UserData } from "@/types";

interface IUseUser {
  isLoading: boolean;
  isUserSignedIn: boolean;
  data: null | UserData['user'];
  token: null | UserData['accessToken'];
  getUserData: () => void;
  setUserData: (data: UserData) => void;
}

export const useUser = create<IUseUser>((set, get) => ({
  isLoading: true,
  isUserSignedIn: false,
  data: null,
  token: null,
  getUserData: async () => {

    // Wrapped just to show the exceptional loader
    setTimeout(async () => {
      const token = await getStoredData({ id: 'user-token' });
      const data = await getStoredData({ id: 'user-data' });

      if (token !== null && data !== null) {
        set({
          token,
          data,
          isLoading: false,
          isUserSignedIn: true
        });
      } else {
        set({
          isLoading: false,
          isUserSignedIn: false
        });
      }
    }, 3000);
  },
  setUserData: async ({ accessToken, user }: UserData) => {
    const token = await storeData({ id: 'user-token', value: accessToken });
    const data = await storeData({ id: 'user-data', value: user });

    set({ isUserSignedIn: true });
  },
}))