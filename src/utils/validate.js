export const checkValidData = (email, password) => {

// const isNameValid =  /^[A-Z][a-zA-Z]{1,49}$/.test(name)


  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

  // if (!isNameValid) return "Enter a valid Name";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Passwordd is not valid";

  return null;
};