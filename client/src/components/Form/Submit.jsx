import { Button as MuiButton, Grid } from '@mui/material'

export default function Submit({ xs, sm, md, lg, innerWidth, children, ...rest }) {
  return (
    <Grid container item xs={xs || 12} sm={sm} md={md} lg={lg} justifyContent="center">
      <Grid item xs={innerWidth || 12}>
        <MuiButton fullWidth type="submit" {...rest}>{children}</MuiButton>
      </Grid>
    </Grid>
  )
}