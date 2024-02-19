import { create } from "zustand";
import { getStoredData, storeData } from "@/utils/storage";
import { UserData } from "@/types";

type TCreateAccountForm = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  acceptTerms: boolean,
  address: string
}

export type TCreatePostForm = {
  title: string;
  content: string;
  tags: Array<string | never>
}

interface UseUserProps {
  isLoading: boolean;
  isUserSignedIn: boolean;
  data: null | UserData['user'];
  token: null | UserData['accessToken'];
  getUserData: () => void;
  setUserData: (data: UserData) => void;
}

interface CreateAccountProps {
  formInitialValues: TCreateAccountForm;
  currentStep: number;
  totalSteps: number;
  handleNextStep: (data: Partial<TCreateAccountForm>) => void;
  handlePreviousStep: () => void;
}

interface CreatePostProps {
  formInitialValues: TCreatePostForm;
  currentStep: number;
  totalSteps: number;
  handleFormValues: (data: Partial<TCreatePostForm>) => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  resetFormValues: () => void;
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

    set({ isUserSignedIn: true, token, data });
  },
}));

export const useCreateAccount = create<CreateAccountProps>((set, get) => ({
  formInitialValues: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
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

export const useCreatePost = create<CreatePostProps>((set, get) => ({
  formInitialValues: {
    content: "",
    tags: [],
    title: ""
  },
  currentStep: 0,
  totalSteps: 2,
  handleFormValues: (data) => {
    const prevFormValues = get().formInitialValues;

    set({ formInitialValues: { ...prevFormValues, ...data } });
  },
  handleNextStep: () => {
    const prevCurrentStep = get().currentStep;

    set({
      currentStep: prevCurrentStep + 1,
    })

  },
  handlePreviousStep: () => {
    const currentStep = get().currentStep;

    set({ currentStep: currentStep - 1 });
  },
  resetFormValues: () => {
    set({
      formInitialValues: {
        content: "",
        tags: [],
        title: ""
      },
      currentStep: 0
    });
  }
}));