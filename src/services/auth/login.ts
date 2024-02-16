import * as Yup from 'yup';
import { dictionaryMessage } from "@/constants/validation";
import { useMutation } from "@tanstack/react-query";
import { axios } from '@/api/axios';
import { UserData } from '@/types';
import { useUser } from '@/stores';

type TLoginData = {
  email: string;
  password: string;
}

async function login(data: TLoginData) {
  try {
    const res: UserData = await axios({
      method: "POST",
      url: "/auth/login",
      data
    });

    return res;
  } catch (e) {
    throw (e);
  }
}

const loginSchema = Yup.object().shape({
  email: Yup
    .string()
    .email(dictionaryMessage.INVALID_EMAIL)
    .required(dictionaryMessage.GENERIC_REQUIRED_FIELD),
  password: Yup
    .string()
    .min(8, dictionaryMessage.MIN_CHARACTERS)
    .required(dictionaryMessage.GENERIC_REQUIRED_FIELD)
});

export function useLogin() {
  const setUserData = useUser(state => state.setUserData);
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.accessToken && data.user) {
        setUserData(data);
      }
    }
  });

  function handleFormSubmit(values: TLoginData) {
    mutate(values);
  }

  return {
    handleFormSubmit,
    loginSchema,
    isLoading: isPending,
    errorMessage: (isError || isSuccess) && dictionaryMessage.INVALID_CREDENTIALS
  }
}