import React, { useState } from 'react';
import { RFCTextField } from './index'

const TextFieldControl = () => {

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
            setErrorMsg("Minimum of 5 characters required")
        } else {
            setTextError(false);
        }
    };

    return (
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
    );
}

export default TextFieldControl;
