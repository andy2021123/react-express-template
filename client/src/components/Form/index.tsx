import { createContext, useContext } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { Box, BoxProps, Grid2 as Grid } from "@mui/material";
import Submit from "./Submit";
import DynamicFields from "./DynamicFields";
import Input from "./Input";
import Select from "./Select";

const FormMethodsContext = createContext<UseFormReturn<any>>(
  {} as UseFormReturn<any>
);

function useFormMethods() {
  return useContext(FormMethodsContext);
}

interface FormProps extends BoxProps<"form"> {
  spacing?: number;
  children: any;
  onSubmit: SubmitHandler<FieldValues>;
}

const Form = <TFormValues extends FieldValues>({
  spacing,
  children,
  onSubmit,
  ...rest
}: FormProps) => {
  const methods = useForm<TFormValues>();
  return (
    <FormMethodsContext.Provider value={methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
        <Grid container spacing={spacing || 1} justifyContent={"center"}>
          {children}
        </Grid>
      </Box>
    </FormMethodsContext.Provider>
  );
};

export { useFormMethods, Form, Input, DynamicFields, Submit, Select };
