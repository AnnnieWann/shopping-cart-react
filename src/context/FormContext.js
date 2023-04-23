import { createContext } from "react";

export const FormContext = createContext({
  title: "",
  name: "",
  phoneNumber: "",
  email: "",
  region: "",
  address: "",
  totalSum: 500,
  cardholderName: "",
  cardNumber: "",
  validDate: "",
  ccv: "",
});
