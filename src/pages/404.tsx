// NextJS
import { useRouter } from 'next/router'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
// Component
import CallbackLayout from "@/components/Layout/CallbackLayout"

const Callback = () => {
  const router = useRouter()

  return (
    <CallbackLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} textAlign={'center'}>
            <Typography>certification failed.</Typography>
            <Button onClick={() => router.push('/')}>Back Home</Button>
          </Grid>
        </Grid>
      </Box>
    </CallbackLayout>
  )
}

export default Callback
