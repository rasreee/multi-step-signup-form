import type { InputHTMLAttributes } from "react";

export interface StepConfig {
  id: SignUpStep;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  label: string;
  rules?: any[];
}

export enum SignUpStep {
  NAME = "name",
  EMAIL = "email",
  DATE_OF_BIRTH = "date-of-birth",
  PASSWORD = "password",
}

export const SIGNUP_STEPS: StepConfig[] = [
  {
    id: SignUpStep.NAME,
    type: "text",
    label: "Name",
  },
  {
    id: SignUpStep.EMAIL,
    type: "email",
    label: "Email",
  },
  {
    id: SignUpStep.DATE_OF_BIRTH,
    type: "datetime-local",
    label: "Date of Birth",
  },
  {
    id: SignUpStep.PASSWORD,
    type: "password",
    label: "Password",
  },
];