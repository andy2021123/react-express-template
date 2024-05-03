import { Grid, FormLabel, Select as MuiSelect, MenuItem } from '@mui/material'
import { useFormMethods } from "."
import { Controller } from 'react-hook-form'

function InnerSelect({ options, name, ...rest }) {
  const { register, control } = useFormMethods()

  return (
    <Controller
      render={({ field }) => (
        <MuiSelect
          {...field}
          {...register(name)}
          {...rest}
          fullWidth
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
  )
}

export default function Select({ label, required, xs, sm, md, lg, ...rest }) {
  return (
    <Grid item xs={xs || 12} sm={sm} md={md} lg={lg}>
      <FormLabel required={required}>{label}</FormLabel>
      <InnerSelect required={required} {...rest} />
    </Grid>
  )
}