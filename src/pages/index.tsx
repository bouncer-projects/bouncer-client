// NextJS
import { useRouter } from 'next/router'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
// Component
import DefaultLayout from '@/components/Layout/DefaultLayout'

const Home = () => {
  const router = useRouter()

  return (
    <DefaultLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <h1>
              Dashboard
            </h1>
          </Grid>
          <Grid xs={12}>
            <Button
              variant="contained"
              onClick={() => router.push('/project/create')}
            >
              Add new project
            </Button>
          </Grid>
        </Grid>
      </Box>
    </DefaultLayout>
  )
}

export default Home
