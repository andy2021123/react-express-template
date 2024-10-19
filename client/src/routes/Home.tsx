import { Link, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import api from "api";
import Title from "components/Title";
import useApi from "hooks/useApi";

export default function Home() {
  const { data, loading, error } = useApi(api.hello);

  return (
    <Paper sx={{ p: 2 }}>
      <Title>Home</Title>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography>{error}</Typography>}
      {data && <Typography>{data.message}</Typography>}
      <Typography>
        Click <Link href="/data">here</Link> to see example data from the
        database.
      </Typography>
    </Paper>
  );
}
