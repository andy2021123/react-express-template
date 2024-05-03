import { Link, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import Title from 'src/components/Title'

export default function NoPage() {
	return (
		<Paper sx={{ p: 2 }}>
			<Title>Page Not Found</Title>
			<Typography>The page you are looking for does not exist. Proceed to <Link href="/">Home</Link>?</Typography>
		</Paper>
	)
}