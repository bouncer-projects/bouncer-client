// Next
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// Layout
import DefaultLayout from '@/components/Layout/DefaultLayout'
// MUI
import {
  Breadcrumbs,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Chip,
  InputAdornment,
  IconButton,
  Link,
  TextField,
  Typography
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
// Icon
import HomeIcon from '@mui/icons-material/Home'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import LaunchIcon from '@mui/icons-material/Launch';

const ContractContractAddressView = () => {
  const router = useRouter()

  const { contractAddress } = router.query

  const [address, setAddress] = useState<string | string[] | undefined>('')
  const [contract, setContract] = useState<any>({
    address: '',
    network: ''
  })

  useEffect(() => {
    setContract({
      address: contractAddress,
      network: 'Goerli'
    })
  }, [contractAddress])

  return (
    <DefaultLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/contract"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Contracts
          </Link>
          <Typography color="text.primary">USD Coin</Typography>
        </Breadcrumbs>

        <Grid container spacing={2}>
          <Grid xs={12}>
            <h1>
              Contract
            </h1>
          </Grid>

          <Grid xs={12}>
            <Card>
              <CardContent>
                <Typography sx={{ pb: 3 }} variant="h5" component="div">
                  USD Coin
                </Typography>

                <Grid
                  container
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ p: 0 }}
                >
                  <Grid
                    display="flex"
                    spacing={3}
                  >
                    <Grid>
                      <label>Address</label>
                      <Box sx={{ mt: 1 }}>
                        <Chip label={contract.address ? `${contract.address.slice(0, 6).toUpperCase()}...${contract.address.slice(-4).toUpperCase()}` : ''} />
                        <IconButton sx={{ ml: 1 }} aria-label="copy">
                          <ContentCopyIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="popup">
                          <LaunchIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Grid>
                    <Grid>
                      <label>Network</label>
                      <Box sx={{ mt: 1 }}>
                        <Chip label={contract.network} />
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid sx={{ pt: 4.5 }}>
                    <Button variant="contained">NEW PROPOSAL</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DefaultLayout>
  )
}

export default ContractContractAddressView
