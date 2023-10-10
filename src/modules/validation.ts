export type ValidationRule = string | ((value: string) => boolean);

export const validateWithRule = (
  value: string,
  rule: ValidationRule
): boolean => {
  if (typeof rule === "string") {
    return new RegExp(rule).test(value);
  }
  return rule(value);
};

export const isNotEmptyString = (value: string): boolean => {
  return Boolean(value);
};
