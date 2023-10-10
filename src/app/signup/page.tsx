"use client";

import { useRouter } from "next/navigation";
import type { ChangeEventHandler } from "react";
import { useEffect, useState } from "react";

import { useStepper } from "@/hooks/use-stepper";
import { SIGNUP_STEPS } from "@/modules/signup";
import { isNotEmptyString, validateWithRule } from "@/modules/validation";

enum Status {
  IDLE = "idle",
  SUBMITTING = "submitting",
  SUCCESS = "success",
}

const SignUpPage = () => {
  const { step, back, next, isFirst, isLast } = useStepper(SIGNUP_STEPS);
  const [values, setValues] = useState(
    Object.fromEntries(SIGNUP_STEPS.map(({ id }) => [id, ""]))
  );
  const [status, setStatus] = useState(Status.IDLE);

  const value = values[step.id];

  const isValidInput = (): boolean => {
    const rules = step.rules || [isNotEmptyString];
    return rules
      .map((rule) => validateWithRule(value, rule))
      .reduce((prev, curr) => prev && curr);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValues((prev) => ({ ...prev, [step.id]: event.target.value }));
  };

  const handleSubmit = async () => {
    setStatus(Status.SUBMITTING);
    await new Promise((res) => {
      setTimeout(() => {
        res(null);
      }, 1500);
    });
    setStatus(Status.SUCCESS);
  };

  const router = useRouter();

  useEffect(() => {
    if (status === Status.SUCCESS) {
      router.push("/signup/success");
    }
  }, [status]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex">
        {!isFirst() && (
          <button
            className="text-center font-semibold -ml-4 py-3 px-4"
            onClick={back}
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
          disabled={!isValidInput()}
          onClick={isLast() ? handleSubmit : next}
        >
          {status === Status.SUBMITTING
            ? "Submitting..."
            : isLast()
            ? "Submit"
            : "Next"}
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
