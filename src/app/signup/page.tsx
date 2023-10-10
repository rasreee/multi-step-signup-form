"use client";

import { useStepper } from "@/hooks/use-stepper";
import { SIGNUP_STEPS } from "@/modules/signup/signup.types";

const SignUpPage = () => {
  const { step, back, next, isFirst, isLast } = useStepper(SIGNUP_STEPS);

  const handleBackClick = () => back();
  const handleNextClick = () => next();

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
          <input type={step.type} name={step.id} />
        </label>
      </div>
      <div className="flex justify-end">
        <button
          className="text-center font-semibold border px-6 py-2 rounded"
          onClick={handleNextClick}
        >
          {isLast() ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
