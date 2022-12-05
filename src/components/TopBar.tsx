// Config
import { APP_NAME } from '@/config/constants/app'
// MUI
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

interface TopBarProps {
  hideMenuButton?: boolean
}

// TODO: サインイン
// https://docs.moralis.io/docs/sign-in-with-metamask
const TopBar: React.FC<TopBarProps> = ({
  hideMenuButton = false
}) => {
  const { connectAsync } = useConnect()

  const handlerClick = async () => {
    console.log('クリック')
    const { account, chain } = await connectAsync({ connector: new InjectedConnector() });
    const userData = { address: account, chain: chain.id, network: 'evm' };
    console.log(userData)
  }

  const MenuButton = () => {
    return (
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
    )
  }

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        {!hideMenuButton && <MenuButton />}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {APP_NAME}
        </Typography>
        {!hideMenuButton && <Button color="inherit">Connect wallet</Button>}
        <Button color="inherit" onClick={() => handlerClick()}>Test</Button>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default TopBar
