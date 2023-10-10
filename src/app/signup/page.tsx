"use client";

import type { ChangeEventHandler } from "react";
import { useState } from "react";

import { useStepper } from "@/hooks/use-stepper";
import { SIGNUP_STEPS } from "@/modules/signup/signup.types";

const SignUpPage = () => {
  const { step, back, next, isFirst, isLast } = useStepper(SIGNUP_STEPS);
  const [values, setValues] = useState(
    Object.fromEntries(SIGNUP_STEPS.map(({ id }) => [id, ""]))
  );

  const handleBackClick = () => {
    back();
  };
  const handleNextClick = () => {
    next();
  };

  const isNextDisabled = (): boolean => {
    return !values[step.id];
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValues((prev) => ({ ...prev, [step.id]: event.target.value }));
  };

  const handleSubmit = () => {};

  return (
    <div className="flex flex-col gap-8">
      <div className="flex">
        {!isFirst() && (
          <button
            className="text-center font-semibold -ml-4 py-3 px-4"
            onClick={handleBackClick}
          >
            {"<"} Back
          </button>
        )}
      </div>
      <div>
        <label className="flex flex-col gap-2">
          {step.label}
          <input
            type={step.type}
            name={step.id}
            value={values[step.id]}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="flex justify-end">
        <button
          className="text-center font-semibold border px-6 py-2 rounded disabled:opacity-60"
          disabled={isNextDisabled()}
          onClick={isLast() ? handleSubmit : handleNextClick}
        >
          {isLast() ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
