import { dictionaryMessage } from '@/constants/validation';
import { useCreateAccount } from '@/stores';
import { useState } from 'react';
import * as Yup from 'yup';

const TOTAL_STEPS = 4;

const formInitialValues = {
  firstName: "",
  lastName: "",
  email: ""
};

const credentialsSchema = Yup.object().shape({
  email: Yup
    .string()
    .email()
    .required(dictionaryMessage.INVALID_EMAIL_ALTERNATIVE),
});

export function useCreateAccountForm() {
  const {
    formInitialValues,
    handleNextStep
  } = useCreateAccount(state => state);

  return {
    formInitialValues,
    credentialsSchema,
    handleNextStep,
  }
}