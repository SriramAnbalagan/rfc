import React, { useState } from 'react';

import { RFCEmailField } from '../components/EmailField';

export default {
  title: 'Components/EmailField',
  component: RFCEmailField,
  // argTypes: {
  //   disabled: {
  //     options: ['true', 'false'],
  //     control: { type: 'radio' },
  //   },
  // },
};

export const Outlined = () => {

  //Email
  const [emailId, setEmailId] = useState('')
  const [emailIdError, setEmailIdError] = useState(false)
  const handleEmailId = (event: any) => {
    const enteredText = event.target.value;
    setEmailIdError(false)
    setEmailId(enteredText)
  }

  const validateEmailId = (event: any) => {
    const enteredText = event.target.value;
    const EMAIL_REGEXP =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailRegExp = new RegExp(EMAIL_REGEXP)
    const isValidEmail = emailRegExp.test(enteredText)
    if (!isValidEmail) {
      setEmailIdError(true)
    } else {
      setEmailIdError(false)
    }
  }

  return (
    <>
      <h3>Outlined EmailField</h3>
      <RFCEmailField
        label={'Email'}
        placeholder={'Placeholder'}
        value={emailId}
        helperText="That doesn’t look like an email address"
        error={emailIdError}
        onChange={(event) => handleEmailId(event)}
        onBlur={(event) => validateEmailId(event)}
        className={""}
        maxLength={20}
        variant={'outlined'}
        disabled={false}
        required={true}
      />
    </>
  );
};

export const Standard = () => {
  //Email
  const [emailId, setEmailId] = useState('')
  const [emailIdError, setEmailIdError] = useState(false)
  const handleEmailId = (event: any) => {
    const enteredText = event.target.value;
    setEmailIdError(false)
    setEmailId(enteredText)
  }

  const validateEmailId = (event: any) => {
    const enteredText = event.target.value;
    const EMAIL_REGEXP =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailRegExp = new RegExp(EMAIL_REGEXP)
    const isValidEmail = emailRegExp.test(enteredText)
    if (!isValidEmail) {
      setEmailIdError(true)
    } else {
      setEmailIdError(false)
    }
  }
  return (
    <>
      <h3>Standard EmailField</h3>
      <RFCEmailField
        label={'Email'}
        placeholder={'Placeholder'}
        value={emailId}
        helperText="That doesn’t look like an email address"
        error={emailIdError}
        onChange={(event) => handleEmailId(event)}
        onBlur={(event) => validateEmailId(event)}
        className={""}
        maxLength={20}
        variant={'standard'}
        disabled={false}
        required={true}
      />
    </>
  );
};

export const Filled = () => {
  //Email
  const [emailId, setEmailId] = useState('')
  const [emailIdError, setEmailIdError] = useState(false)
  const handleEmailId = (event: any) => {
    const enteredText = event.target.value;
    setEmailIdError(false)
    setEmailId(enteredText)
  }

  const validateEmailId = (event: any) => {
    const enteredText = event.target.value;
    const EMAIL_REGEXP =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailRegExp = new RegExp(EMAIL_REGEXP)
    const isValidEmail = emailRegExp.test(enteredText)
    if (!isValidEmail) {
      setEmailIdError(true)
    } else {
      setEmailIdError(false)
    }
  }
  return (
    <>
      <h3>Filled EmailField</h3>
      <RFCEmailField
        label={'Email'}
        placeholder={'Placeholder'}
        value={emailId}
        helperText="That doesn’t look like an email address"
        error={emailIdError}
        onChange={(event) => handleEmailId(event)}
        onBlur={(event) => validateEmailId(event)}
        className={""}
        maxLength={20}
        variant={'filled'}
        disabled={false}
        required={true}
      />
    </>
  );
};