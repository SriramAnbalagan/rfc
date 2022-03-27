import React from "react";
import TextField from "@mui/material/TextField";
import "./textField.css";

interface IRFCTextFieldProps {
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

export const RFCTextField = ({
  label,
  placeholder,
  value,
  helperText,
  onChange,
  className,
  error,
  onBlur,
  maxLength,
  variant,
  disabled,
  required
}: IRFCTextFieldProps) => {
  return (
    <>
    {required && <div className={'required-field'}>Required Field</div>}
    <TextField
      id="standard-error"
      className={className ? className : "lcp-TextField"}
      label={label}
      placeholder={placeholder}
      error={error}
      helperText={error ? helperText : ""}
      disabled={disabled}
      variant={variant}
      fullWidth
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputProps={{
        className: "lcp-input-style",
        maxLength: maxLength
      }}
    />
     </>
  );
};
