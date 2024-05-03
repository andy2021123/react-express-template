import { Fragment } from 'react'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/system'
import { useFormMethods } from '.'

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

function InnerInput({ name, ...rest }) {
  const { register } = useFormMethods()

  return (
    <TextField
      name={name}
      {...register(name)}
      fullWidth
      {...rest}
    />
  )
}

export default function Input({ variant, label, placeholder, required, xs, sm, md, lg, ...rest }) {
  return (
    <FormGrid item xs={xs || 12} sm={sm} md={md} lg={lg}>
      {variant !== 'compact' && label ? (
        <Fragment>
          <FormLabel required={required}>{label}</FormLabel>
          <InnerInput required={required} placeholder={placeholder || label} {...rest} />
        </Fragment>
      ) : (
        <InnerInput required={required} placeholder={placeholder || label} {...rest} />
      )}
    </FormGrid>
  )
}