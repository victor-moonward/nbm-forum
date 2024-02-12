import { useCreateAccount } from "@/stores";
import * as Yup from 'yup';
import { dictionaryMessage } from '@/constants/validation';

export const credentialsSchema = Yup.object().shape({
  email: Yup
    .string()
    .email()
    .required(dictionaryMessage.INVALID_EMAIL_ALTERNATIVE),
});

export const passwordsSchema = Yup.object().shape({
  password: Yup
    .string()
    .matches(
      /^(?=.*[0-9])/,
      'Password must contain at least one number'
    )
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'Password must contain at least one symbol'
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      'Password must contain at least one uppercase and one lowercase character'
    )
    .min(6, 'Password must be at least 6 characters long')
    .required(dictionaryMessage.GENERIC_REQUIRED_FIELD),
  confirmPassword: Yup
    .string()
    .test('passwords-match', dictionaryMessage.INVALID_PASSWORD_MATCH, function (value) {
      return this.parent.password === value
    })
});

export function useSignUp() {
  const formValues = useCreateAccount(state => state.formInitialValues);

  function handleFormSubmit() {
    console.log("values", formValues)
  }

  return {
    handleFormSubmit
  }
}