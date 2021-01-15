// write your custom hook here to control your checkout form
import React, { useState } from "react";

const useForm = (initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(
    initialValue.sucessMessage
  );
  const [values, setValues] = useState(initialValue.formValues);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [showSuccessMessage, values, handleChanges, handleSubmit];
};

export default useForm;
