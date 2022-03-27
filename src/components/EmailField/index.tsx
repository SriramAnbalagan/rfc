import React from 'react'
import TextField from '@mui/material/TextField'
import './emailField.css'

interface IRFCEmailFieldProps {
  label: string;
  placeholder: string;
  value: string;
  helperText: string;
  className?: string;
  error: boolean;
  onChange: (event: any) => void;
  onBlur: (event: any) => void;
  maxLength: number;
  variant: "standard" | "filled" | "outlined" | undefined;
  disabled: boolean
  required: boolean
 }

export const RFCEmailField = ({
  label,
  placeholder,
  value,
  helperText,
  onChange,
  required,
  onBlur,
  className,
  error,
  variant
}: IRFCEmailFieldProps) => {
  return (
    <>
      {required && <div className={'required-field'}>* Required Field</div>}
      <TextField
        id="standard-error"
        className={className ? className : 'lcp-EmailField'}
        label={label}
        placeholder={placeholder}
        error={error}
        helperText={error ? helperText : ''}
        variant={variant}
        fullWidth
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        InputProps={{
          className: 'lcp-input-style',
        }}
      />
    </>
  )
}
