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

type TFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  avatar: string;
}

interface ICreateAccount {
  formInitialValues: TFormValues;
  currentStep: number;
  totalSteps: number;
  handleNextStep: (data: Partial<TFormValues>) => void;
  handlePreviousStep: () => void;
}

export const useUser = create<IUseUser>((set, get) => ({
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
    await storeData({ id: 'user-token', value: accessToken });
    await storeData({ id: 'user-data', value: user });

    set({ isUserSignedIn: true });
  },
}));

export const useCreateAccount = create<ICreateAccount>((set, get) => ({
  formInitialValues: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    avatar: ""
  },
  currentStep: 1,
  totalSteps: 4,
  handleNextStep: (data) => {
    const prevCurrentStep = get().currentStep;
    const prevFormValues = get().formInitialValues;
    const lastStep = get().totalSteps;

    if (prevCurrentStep === lastStep) {
      set({ formInitialValues: { ...prevFormValues, ...data } });
    } else {
      set({
        currentStep: prevCurrentStep + 1,
        formInitialValues: { ...prevFormValues, ...data }
      });
    }
  },
  handlePreviousStep: () => {
    const currentStep = get().currentStep;

    set({ currentStep: currentStep - 1 });
  }
}));