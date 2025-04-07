export const checkValidData = (name, email, password) => {
  if (name !== undefined) {
    const isNameValid = /^[A-Za-zÀ-ÿ\s'-]+$/.test(name);
    if (!isNameValid) return 'Your Name is not Valid';
  }
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return 'Email is not Valid';
  if (!isPasswordValid) return 'Password is not Valid';

  return null;
};
