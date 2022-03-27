import React, { useState } from 'react';
import { LCPDropdown } from './index'

const SelectBoxControl = () => {

    const [selectedOption, setSelectedOptions] = useState(null)
    const [error, setError] = useState(false)

    const options = [
        { label: 'one', value: 'one' },
        { label: 'two', value: 'two' },
        { label: 'three', value: 'three' },
        { label: 'four', value: 'four' },
    ]

    const updateSelectedOption = (event: any) => {
        const selectedOption = event.target.value
        console.log('onChange',selectedOption);
        setError(false)
        setSelectedOptions(selectedOption)
    }

    const validateSelectedOption = (event: any) => {
        const selectedOption = event.target.value
        console.log('selectedOption',selectedOption);
        
        if (selectedOption === '' || selectedOption === null) {
            setError(true)
        } else {
            setError(false)
        }
        setSelectedOptions(selectedOption)
    }

    return (
        <>
            <LCPDropdown
                label={'Submission Frequency'}
                value={selectedOption}
                options={options}
                onBlur={(event: any) => validateSelectedOption(event)}
                onChange={(event: any) => updateSelectedOption(event)}
                disabled={false}
                error={error}
                helperText={"Select a valid option"}
            />
        </>

    );
}

export default SelectBoxControl;
