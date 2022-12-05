// Next
import { useRouter } from 'next/router'
// Layout
import DefaultLayout from '@/components/Layout/DefaultLayout'
// MUI
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
// Icon
import HomeIcon from '@mui/icons-material/Home'

const ContractIndexView = () => {
  const router = useRouter()

  const contracts = [
    {
      id: 1,
      name: 'USD Coin',
      symbol: 'USDC',
      contractAddress: '0xaa3516dE51e042663EE168Bb770Fc2fE55F4685A',
      network: 'Goerli'
    },
    {
      id: 2,
      name: 'Bouncer',
      symbol: 'BNC',
      contractAddress: '0xaa3516dE51e042663EE168Bb770Fc2fE55F4685B',
      network: 'Goerli'
    },
    {
      id: 3,
      name: 'ERC20 Token',
      symbol: 'ERC20',
      contractAddress: '0xaa3516dE51e042663EE168Bb770Fc2fE55F4685C',
      network: 'Goerli'
    }
  ]

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
          <Typography color="text.primary">Contracts</Typography>
        </Breadcrumbs>

        <Grid container spacing={2}>
          <Grid xs={12}>
            <h1>
              Contracts
            </h1>
          </Grid>
          
          {contracts.map((item) => {
            return (
              <Grid key={item.id} xs={4}>
                <Card>
                  <CardActionArea onClick={() => router.push(`/contract/${item.contractAddress}`)}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.symbol}
                      </Typography>

                      <Grid
                        container
                        justifyContent="end"
                        alignItems="center"
                      >
                        <Grid>
                          <Chip label={item.network} />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })}

        </Grid>
      </Box>
    </DefaultLayout>
  )
}

export default ContractIndexView
