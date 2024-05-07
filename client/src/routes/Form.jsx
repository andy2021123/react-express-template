import { Paper } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Submit, Form, Input } from 'src/components/Form'
import Title from 'src/components/Title'
import api from 'src/hooks/useAxios/api'

export default function FormPage() {
	const formMethods = useForm({ defaultValues: { first: "React", last: "Express" }})

	const handleSubmit = (data) => {
		api.post('/user', data)
			.then(() => console.log('success'))
	}

	return (
		<Paper sx={{ p: 2 }}>
			<Title>Example Form</Title>

			<Form formMethods={formMethods} onSubmit={handleSubmit} spacing={2}>
				<Input xs={6} name="first" label="First Name" required/>
				<Input xs={6} name="last" label="Last Name" required/>

				<Input xs={12} name="address[0]" label="Address Line 1" required/>
				<Input xs={12} name="address[1]" label="Address Line 2"/>

				<Submit variant="contained" innerWidth={4}>Submit</Submit>
			</Form>
		</Paper>
	)
}