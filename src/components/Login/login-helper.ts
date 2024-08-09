export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const validatePassWord = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@+\-#$%&*])[A-Za-z\d!@+\-#$%&*]{8,}$/;
  return password.trim().length >= 6 && passwordRegex.test(password);
};
