import { Paper } from "@mui/material";
import { Submit, Form, Input } from "components/Form";
import Title from "components/Title";
import api from "hooks/useAxios/api";

type FormValues = {
  first: string;
  last: string;
  address: string[2];
};

export default function FormPage() {
  const handleSubmit = (data: any) => {
    api.post("/user", data).then(() => console.log("success"));
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Title>Example Form</Title>

      <Form<FormValues> onSubmit={handleSubmit} spacing={2}>
        <Input xs={6} name="first" label="First Name" required />
        <Input xs={6} name="last" label="Last Name" required />

        <Input xs={12} name="address[0]" label="Address Line 1" required />
        <Input xs={12} name="address[1]" label="Address Line 2" />

        <Submit variant="contained" innerWidth={4}>
          Submit
        </Submit>
      </Form>
    </Paper>
  );
}
