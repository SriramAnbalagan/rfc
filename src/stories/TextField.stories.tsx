import React, { useState } from 'react';

import { RFCTextField } from '../components/TextField';

export default {
  title: 'Components/TextField',
  component: RFCTextField,
  // argTypes: {
  //   disabled: {
  //     options: ['true', 'false'],
  //     control: { type: 'radio' },
  //   },
  // },
};

export const Outlined = () => {
  const [value, setValue] = useState('');
  const [textError, setTextError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Enter valid text");

  const handleChange = (event: any) => {
    const enteredText = event.target.value;
    setValue(enteredText);
  };


  const validateText = (event: any) => {
    const enteredText = event.target.value;
    setTextError(false);
    const regex = new RegExp(/^.{5,}$/);
    const isValidText = regex.test(enteredText);
    console.log('isValidText', isValidText);

    if (!isValidText) {
      setTextError(true);
      setErrorMsg("Min of 5 and Max of 10 characters allowed")
    } else {
      setTextError(false);
    }
  };
  return (
  <>
  <h3>Outlined TextField</h3>
    <RFCTextField
      variant={'outlined'}
      label={'Label'}
      placeholder={'Placeholder'}
      value={value}
      helperText={textError ? errorMsg : ''}
      onChange={(event) => handleChange(event)}
      className={""}
      error={textError}
      onBlur={(event) => validateText(event)}
      maxLength={10}
      disabled={false}
      required={true}
    />
    </>
  );
};

export const Standard = () => {
  const [value, setValue] = useState('');
  const [textError, setTextError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Enter valid text");

  const handleChange = (event: any) => {
    const enteredText = event.target.value;
    setValue(enteredText);
  };


  const validateText = (event: any) => {
    const enteredText = event.target.value;
    setTextError(false);
    const regex = new RegExp(/^.{5,}$/);
    const isValidText = regex.test(enteredText);
    console.log('isValidText', isValidText);

    if (!isValidText) {
      setTextError(true);
      setErrorMsg("Min of 5 and Max of 10 characters allowed")
    } else {
      setTextError(false);
    }
  };
  return (
    <>
    <h3>Standard TextField</h3>
    <RFCTextField
      variant={'standard'}
      label={'Label'}
      placeholder={'Placeholder'}
      value={value}
      helperText={textError ? errorMsg : ''}
      onChange={(event) => handleChange(event)}
      className={""}
      error={textError}
      onBlur={(event) => validateText(event)}
      maxLength={10}
      disabled={false}
      required={true}
    />
    </>
  );
};

export const Filled = () => {
  const [value, setValue] = useState('');
  const [textError, setTextError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Enter valid text");

  const handleChange = (event: any) => {
    const enteredText = event.target.value;
    setValue(enteredText);
  };


  const validateText = (event: any) => {
    const enteredText = event.target.value;
    setTextError(false);
    const regex = new RegExp(/^.{5,}$/);
    const isValidText = regex.test(enteredText);
    console.log('isValidText', isValidText);

    if (!isValidText) {
      setTextError(true);
      setErrorMsg("Min of 5 and Max of 10 characters allowed")
    } else {
      setTextError(false);
    }
  };
  return (
    <>
    <h3>Filled TextField</h3>
    <RFCTextField
      variant={'filled'}
      label={'Label'}
      placeholder={'Placeholder'}
      value={value}
      helperText={textError ? errorMsg : ''}
      onChange={(event) => handleChange(event)}
      className={""}
      error={textError}
      onBlur={(event) => validateText(event)}
      maxLength={10}
      disabled={false}
      required={true}
    />
    </>
  );
};