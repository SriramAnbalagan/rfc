import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./dropdown.css";

export const LCPDropdown = ({
  label,
  value,
  options,
  onChange,
  disabled,
  onBlur,
  error,
  helperText,
}) => {
  console.log('error',error);
  if (options.length > 5) {
    return (
      <>
       <FormControl className={"select-box"}>
        <Autocomplete
          disablePortal
          id={disabled ? "disabled" : "combo-box-demo"}
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={label} />}
          disabled={disabled}
          className={"select-box"}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
        />
        {error && (
          <FormHelperText className="rfc-helper-text">
            {helperText}
          </FormHelperText>
        )}
        </FormControl>
      </>
    );
  } else {
    return (
      <FormControl className={"select-box"}>
        <InputLabel id="demo-simple-select-error-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="select-box-id"
          value={value}
          label={label}
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
          className={error ? "select-box error" : "select-box"}
        >
          {options.map((item, index) => {
            const { label, value } = item;
            return (
              <MenuItem key={index} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
        {error && (
          <FormHelperText className="rfc-helper-text">
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
};
