import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography, Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import '../components/Navbar.css'
import { useStoreContext } from "../context/StoreContext";
import logo from '../pictures/logo.png'

const midLinks=[
    {title: 'products', path: '/products'},
    {title: 'about ', path: '/about'},
    { title: 'contact', path: '/contact' },
    {title: 'custom', path: '/custom'},
]

const rightLinks=[
    {title: 'login', path: '/login'},
    {title: 'register ', path: '/register'},
]



export default function Navbar() {

    const {basket} = useStoreContext();
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)
    return (
        <>
            <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>

            <Box display='flex' alignItems='center'>
                <Typography variant="h6" component={NavLink} to='/' exact
                 sx={{color: 'black', textDecoration:'none',fontFamily: 'Raleway',fontWeight: 700}}>
                   <img src={logo} className='logo'></img>
                </Typography>

            </Box>

                <List sx={{display:'flex'}} className="nav">
                    {midLinks.map(({title, path})=> (
                        <ListItem className="links border"
                        component={NavLink}
                        to={path}
                        key={path}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                <IconButton component={Link} to='/basket' size='large' sx={{color: 'black'}}>
                    <Badge badgeContent={itemCount} color='primary'>
                        <ShoppingCart></ShoppingCart>
                        </Badge>
                </IconButton>
                <List sx={{display:'flex', fontFamily: 'Raleway',
                    fontWeight: 700}}>
                    {rightLinks.map(({title, path})=> (
                        <ListItem className="linksa border"
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={{fontFamily: 'Raleway',
                        fontWeight: 700}}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                </Box>

            </Toolbar>
        </AppBar>
        </>
    )
}