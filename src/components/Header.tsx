
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Badge } from '@mui/material';
// import  ShoppingCartIcon   from '@mui/icons-material/ShoppingCartIcon ';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';

const Header = () => {
  const result = useSelector((store:RootState) => store.cartData)
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Product Store
              </Typography>
              <Link to='users'>Users</Link>
              <Badge badgeContent={result.length} color="secondary">
  <ShoppingCartCheckoutIcon  color="action" />
</Badge>
            </Toolbar>
          </AppBar>
        </Box>
      )};
export default Header





 