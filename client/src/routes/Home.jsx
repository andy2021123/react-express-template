import { Link, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import Title from 'src/components/Title'
import useAxios from 'src/hooks/useAxios'

export default function Home() {
	const { data, loading, error } = useAxios('/hello', 'get')

	return (
      <Paper
				sx={{
					p: 2,
					my: 2
				}}
			>
        <Title>Home</Title>
				{loading && <Typography>Loading...</Typography>}
				{error && <Typography>{error}</Typography>}
				{data && <Typography>{data.message}</Typography>}
				<Typography>Click <Link href="/data">here</Link> to see example data from the database.</Typography>
      </Paper>
	)
}