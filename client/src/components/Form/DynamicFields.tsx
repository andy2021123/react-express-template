import { ComponentProps, useEffect } from "react";
import { useFieldArray } from "react-hook-form";
import { Grid2 as Grid, IconButton, FormLabel } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Input from "./Input";
import { useFormMethods } from ".";

interface DynamicFieldsProps extends ComponentProps<"input"> {
  name: string;
  label: string;
  spacing?: number;
  required?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export default function DynamicFields({
  name,
  label,
  spacing,
  required,
  xs,
  sm,
  md,
  lg,
  ...rest
}: DynamicFieldsProps) {
  const { control } = useFormMethods();
  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: name,
  });

  useEffect(() => {
    fields.length === 0 && append("");
  }, [fields, append]);

  return (
    <Grid
      size={{
        xs: xs || 12,
        sm: sm,
        md: md,
        lg: lg,
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <FormLabel required={required}>{label}</FormLabel>
        </Grid>
        <Grid container spacing={spacing || 1}>
          {fields &&
            fields.map((field, index) => (
              <Grid container key={field.id}>
                <Input
                  variant="compact"
                  name={`${name}.${index}`}
                  placeholder={label?.slice(0, -1)}
                  xs={xs}
                  required={index === 0 && required}
                  {...rest}
                />
                <Grid container size={{ xs: "auto" }} alignContent="center">
                  <Grid>
                    <IconButton
                      size="small"
                      onClick={() => insert(index + 1, "")}
                    >
                      <AddIcon />
                    </IconButton>
                  </Grid>
                  <Grid>
                    <IconButton size="small" onClick={() => remove(index)}>
                      <RemoveIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
