import { createContext, useContext } from 'react'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from './Button'
import DynamicFields from './DynamicFields'
import Input from './Input'
import Select from './Select'

const FormMethodsContext = createContext()

function FormMethodsProvider({ defaultValues, children }) {
  const contextValue = useForm({ defaultValues })

  return (
    <FormMethodsContext.Provider value={contextValue}>
      {children}
    </FormMethodsContext.Provider>
  )
}

function useFormMethods() {
  return useContext(FormMethodsContext)
}

function FormBox({ children, spacing, onSubmit, ...rest }) {
  const { handleSubmit } = useFormMethods()

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <Grid container spacing={spacing || 1} justifyContent={'center'}>
        {children}
      </Grid>
    </Box>
  )
}

function Form({ defaultValues, children, ...rest }) {
  return (
    <FormMethodsProvider defaultValues={defaultValues}>
      <FormBox {...rest}>{children}</FormBox>
    </FormMethodsProvider>
  )
}

export { useFormMethods, Form, Input, DynamicFields, Button, Select }
