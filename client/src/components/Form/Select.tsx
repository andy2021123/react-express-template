import {
  Grid2 as Grid,
  FormLabel,
  Select as MuiSelect,
  MenuItem,
} from "@mui/material";
import { useFormMethods } from ".";
import { Controller } from "react-hook-form";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

interface SelectProps extends SelectInputProps {
  name: string;
  label: string;
  required: boolean;
  options: string[];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export default function Select({
  name,
  label,
  required,
  options,
  xs,
  sm,
  md,
  lg,
  ...rest
}: SelectProps) {
  const { register, control } = useFormMethods();

  return (
    <Grid
      size={{
        xs: xs || 12,
        sm: sm,
        md: md,
        lg: lg,
      }}
    >
      <FormLabel required={required}>{label}</FormLabel>
      <Controller
        render={({ field }) => (
          <MuiSelect
            {...field}
            {...register(name)}
            required={required}
            fullWidth
            {...rest}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </MuiSelect>
        )}
        control={control}
        name={name}
        defaultValue=""
      />
    </Grid>
  );
}
