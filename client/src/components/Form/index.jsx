import { createContext, useContext } from 'react'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Submit from './Submit'
import DynamicFields from './DynamicFields'
import Input from './Input'
import Select from './Select'

const FormMethodsContext = createContext()

function FormMethodsProvider({ formMethods, children }) {
  if (formMethods?.handleSubmit) {
    return (
      <FormMethodsContext.Provider value={formMethods}>
        {children}
      </FormMethodsContext.Provider>
    )
  } else {
    const defaultValue = useForm()
    return (
      <FormMethodsContext.Provider value={defaultValue}>
        {children}
      </FormMethodsContext.Provider>
    )
  }

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

function Form({ formMethods, children, onSubmit, ...rest }) {
  return (
    <FormMethodsProvider formMethods={formMethods}>
      <FormBox onSubmit={onSubmit} {...rest}>{children}</FormBox>
    </FormMethodsProvider>
  )
}

export { useFormMethods, Form, Input, DynamicFields, Submit, Select }
