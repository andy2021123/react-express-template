import { Button as MuiButton, Grid } from '@mui/material'

export default function Button({ xs, sm, md, lg, children, ...rest }) {
  return (
    <Grid item xs={xs || 12} sm={sm} md={md} lg={lg}>
      <MuiButton fullWidth {...rest}>{children}</MuiButton>
    </Grid>
  )
}