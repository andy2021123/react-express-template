import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import api from "api";
import Title from "components/Title";
import useApi from "hooks/useApi";

export default function Data() {
  const { data, loading, error } = useApi(api.getUsers);

  return (
    <Paper sx={{ p: 2 }}>
      <Title>Data</Title>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography>{error}</Typography>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Paper>
  );
}
