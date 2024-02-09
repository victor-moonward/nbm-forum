import { create } from "zustand";
import { getStoredData, storeData } from "@/utils/storage";
import { UserData } from "@/types";

interface UseUserProps {
  isLoading: boolean;
  isUserSignedIn: boolean;
  data: null | UserData['user'];
  token: null | UserData['accessToken'];
  getUserData: () => void;
  setUserData: (data: UserData) => void;
}
interface CreateAccountProps {
  formInitialValues: TFormValues;
  currentStep: number;
  totalSteps: number;
  handleNextStep: (data: Partial<TFormValues>) => void;
}

type TFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

export const useUser = create<UseUserProps>((set) => ({
  isLoading: true,
  isUserSignedIn: false,
  data: null,
  token: null,
  getUserData: async () => {
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
}));

export const useCreateAccount = create<CreateAccountProps>((set, get) => ({
  formInitialValues: {
    firstName: "",
    lastName: "",
    email: "",
    address: ""
  },
  currentStep: 0,
  totalSteps: 4,
  handleNextStep: (data) => {
    const prevCurrentStep = get().currentStep;
    const prevFormValues = get().formInitialValues;

    set({
      currentStep: prevCurrentStep + 1,
      formInitialValues: { ...prevFormValues, ...data }
    });
  },
  handlePreviousStep: () => {
    const currentStep = get().currentStep;

    set({ currentStep: currentStep - 1 });
  }
}));