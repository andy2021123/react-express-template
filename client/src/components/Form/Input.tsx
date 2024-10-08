import { Fragment } from "react";
import { TextField, FormLabel, Grid2 as Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useFormMethods } from ".";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  variant?: "compact";
  required?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function Input({
  name,
  variant,
  label,
  placeholder,
  required,
  xs,
  sm,
  md,
  lg,
}: InputProps) {
  const { register } = useFormMethods();
  return (
    <FormGrid
      size={{
        xs: xs || 12,
        sm: sm,
        md: md,
        lg: lg,
      }}
    >
      <Fragment>
        {variant !== "compact" && label && (
          <FormLabel required={required}>{label}</FormLabel>
        )}
        <TextField
          {...register(name)}
          placeholder={placeholder || label}
          required={required}
          fullWidth
        />
      </Fragment>
    </FormGrid>
  );
}
