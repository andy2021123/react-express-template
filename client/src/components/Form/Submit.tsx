import { ButtonProps, Button as MuiButton, Grid2 as Grid } from "@mui/material";

interface SubmitProps extends ButtonProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  innerWidth?: any;
  children: string;
}

export default function Submit({
  xs,
  sm,
  md,
  lg,
  innerWidth,
  children,
  ...rest
}: SubmitProps) {
  return (
    <Grid
      container
      size={{
        xs: xs || 12,
        sm: sm,
        md: md,
        lg: lg,
      }}
      justifyContent="center"
    >
      <Grid size={{ xs: innerWidth }}>
        <MuiButton fullWidth type="submit" {...rest}>
          {children}
        </MuiButton>
      </Grid>
    </Grid>
  );
}
