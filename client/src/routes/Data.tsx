import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Title from "components/Title";
import useAxios from "hooks/useAxios";

export default function Data() {
  const { data, loading, error } = useAxios("/users", "get");

  return (
    <Paper sx={{ p: 2 }}>
      <Title>Data</Title>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography>{error}</Typography>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Paper>
  );
}
