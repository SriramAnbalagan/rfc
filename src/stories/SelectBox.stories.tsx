import React, { useState } from 'react';

import { LCPDropdown } from '../components/SelectBox';

export default {
  title: 'Components/SelectBox',
  component: LCPDropdown,
  // argTypes: {
  //   disabled: {
  //     options: ['true', 'false'],
  //     control: { type: 'radio' },
  //   },
  // },
};

export const Outlined = () => {
  const [selectedOption, setSelectedOptions] = useState(null)
  const [error, seterror] = useState(false)

  const options = [
    { label: 'one', value: 'one' },
    { label: 'two', value: 'two' },
    { label: 'three', value: 'three' },
    { label: 'four', value: 'four' },
    { label: 'five', value: 'five' },
    { label: 'six', value: 'six' },
    { label: 'seven', value: 'seven' },
    { label: 'eight', value: 'eight' },
  ]

  const updateSelectedOption = (event: any) => {
    const selectedOption = event.target.value
    seterror(false)
    setSelectedOptions(selectedOption)
  }

  const validateSelectedOption = (event: any) => {
    const selectedOption = event.target.value
    console.log('selectedOption',selectedOption);
    
    setSelectedOptions(selectedOption)
  }


  return (
    <>
      <h3>SelectBox</h3>
      <LCPDropdown
        label={'Submission Frequency'}
        value={selectedOption}
        options={options}
        onBlur={validateSelectedOption}
        onChange={updateSelectedOption}
        disabled={false}
        error={error}
        helperText={"Select a valid option"}
      />
    </>
  );
};
