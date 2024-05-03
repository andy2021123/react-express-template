import { Grid, IconButton } from '@mui/material'
import FormLabel from '@mui/material/FormLabel'
import Input from './Input'
import { useFormMethods } from '.'
import { useFieldArray } from 'react-hook-form'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { useEffect } from 'react'

export default function DynamicFields({ name, label, spacing, xs, sm, md, lg, required, ...rest }) {
  const { control } = useFormMethods()
  const { fields, append, remove, insert } = useFieldArray({ control, name: name })

  useEffect(() => {
    fields.length === 0 && append("")
  }, [fields, append])

  return (
    <Grid item xs={xs || 12} sm={sm} md={md} lg={lg}>
      <Grid container>
        <Grid item xs={12}>
          <FormLabel required={required}>{label}</FormLabel>
        </Grid>
        <Grid container item spacing={spacing || 1}>
          {fields && fields.map((field, index) => (
            <Grid container item key={field.id}>
              <Input
                variant='compact'
                name={(`${name}.${index}`)}
                placeholder={label?.slice(0, -1)}
                xs
                required={index === 0 && required}
                {...rest}
              />
              <Grid item container xs="auto" alignContent="center" >
                <Grid item>
                  <IconButton
                    size='small'
                    onClick={() => insert(index + 1)}
                  >
                    <AddIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    size='small'
                    onClick={() => remove(index)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}