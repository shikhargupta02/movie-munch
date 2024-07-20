export type objectType = Record<string, any>;
export type PasswordState = {
  value: string;
  isValid: boolean;
};

export type PasswordAction = {
  type: "PASSWORD_INPUT" | "INPUT_BLUR";
  val: string;
};
