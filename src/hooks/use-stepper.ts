import { useEffect, useState } from "react";

export function useStepper<T>(steps: Array<T>): {
  step: T;
  isFirst: () => boolean;
  isLast: () => boolean;
  next: () => void;
  back: () => void;
} {
  const [stepIndex, setStepIndex] = useState(0);
  const [step, setStep] = useState<T>(steps[stepIndex]);

  useEffect(() => {
    setStep(steps[stepIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIndex]);

  function next() {
    setStepIndex((prev) => prev + 1);
  }

  function back() {
    setStepIndex((prev) => prev - 1);
  }

  function isFirst() {
    return stepIndex === 0;
  }

  function isLast() {
    return stepIndex === steps.length - 1;
  }

  return { step, next, back, isFirst, isLast };
}
