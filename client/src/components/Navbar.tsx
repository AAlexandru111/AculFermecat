import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import '../components/Navbar.css'

const midLinks=[
    {title: 'products', path: '/products'},
    {title: 'about ', path: '/about'},
    {title: 'contact', path: '/contact'},
]

const rightLinks=[
    {title: 'login', path: '/login'},
    {title: 'register ', path: '/register'},
]



export default function Navbar() {
    return (
        <>
            <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>

            <Box display='flex' alignItems='center'>
                <Typography variant="h6" component={NavLink} to='/' exact
                 sx={{color: 'black', textDecoration:'none',fontFamily: 'Raleway',fontWeight: 700}}>
                    ACUL FERMECAT[LOGO]
                </Typography>

            </Box>

                <List sx={{display:'flex'}} className="nav">
                    {midLinks.map(({title, path})=> (
                        <ListItem className="links"
                        component={NavLink}
                        to={path}
                        key={path}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                <IconButton size='large' sx={{color: 'black'}}>
                    <Badge badgeContent={4} color='primary'>
                        <ShoppingCart></ShoppingCart>
                        </Badge>
                </IconButton>
                <List sx={{display:'flex', fontFamily: 'Raleway',
                    fontWeight: 700}}>
                    {rightLinks.map(({title, path})=> (
                        <ListItem
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