import * as ErrorMessages from './errorMessages.js';

export const required = (input) => {
  if (input || input === 0) {
    return null;
  } else {
    return ErrorMessages.isRequired;
  }
};

export const mustMatch = (field) => {
  return (input, state) => {
    return state[field] === input ? null : ErrorMessages.mustMatch(field);
  };
};

export const minLength = (length) => {
  return (input) => {
    if (input) {
      return input.length >= length ? null : ErrorMessages.minLength(length);
    } else {
      return null;
    }
  }
}

export const mustPositive = (input) => {
  if (input === '') {
    return null;
  } else {
    return parseInt(input) > -1 ? null : ErrorMessages.mustPositive;
  }
};

export const notSelect = (val) => {
  return (input) => {
    return input !== val ? null : ErrorMessages.notSelect;
  };
};

export const isEmailValid = (input) => {
  const typeEmail = /\S+@\S+\.\S+/;
  const typeNumber = /[0-9]/;
  if (typeEmail.test(input)) {
    return null;
  }
  if (typeNumber.test(input) && input.length == 10) {
    return null;
  }
  else {
    return ErrorMessages.isEmail(input);
  }
};

export const identify = (input) => {
  const typeIdentify = /^[A-Z][A-Z0-9_\/-]*$/i;
  if (typeIdentify.test(input)) {
    return null;
  } else {
    return ErrorMessages.isIdentify;
  }
};

export const validNumber = (input) => {
  const typeIdentify = /^\s*-?\d*(\.\d*)?\s*$/;
  if (!input || typeIdentify.test(input)) {
    return null;
  } else {
    return ErrorMessages.isNumber(input);
  }
};

export const isInt = (input) => {
  if (input > 0) {
    return null;
  } else {
    return ErrorMessages.isInterger;
  }
}

export const validPassword = (password) => {
  const isValid = password?.length > 5 && password?.length < 13
  if (isValid) return null
  return ErrorMessages.isPasswordErorr
}
