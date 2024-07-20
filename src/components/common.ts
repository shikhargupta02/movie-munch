export type objectType = Record<string, any>;
export type EmailAction = { type: "USER_INPUT" | "INPUT_BLUR"; val: string };
export type EmailState = { value: string; isValid: boolean | null };
export type PasswordAction = {
  type: "PASSWORD_INPUT" | "INPUT_BLUR";
  val: string;
};
export type PasswordState = { value: string; isValid: boolean | null };
