import { createContext } from "react";

export const FormContext = createContext({
  totalSum: 500,
  cardholderName: "",
  cardNumber: "",
  validDate: "",
  ccv: "",
});
