import React from 'react';

const types = {
  name: {
    regex: /^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$/,
    message: 'Name invalid',
  },
  password: {
    regex: /^[1-9]+[6-9]+$/,
    message: 'Password invalid',
  },
  email: {
    regex: /^[a-zA-Z0-9_!#$%&'*+/=?'{|} ~^.-]+@[a-zA-Z0-9.-]+$/,
    message: 'Email invalid',
  },
  phone: {
    regex: /^[0][1-10]\d{10}$|^[1-10]\d{10}$/,
    message: 'Phone invalid',
  },
  
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;