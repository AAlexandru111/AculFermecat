import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks=[
    {title: 'products', path: '/products'},
    {title: 'about ', path: '/about'},
    {title: 'contact', path: '/contact'},
]

const rightLinks=[
    {title: 'login', path: '/login'},
    {title: 'register ', path: '/register'},
]

const navStyles = {color: 'inherit',
                    typography: 'h6',
                    '&:hover': {
                    color: 'grey.500'
                    },
                    '&.active':{
                    color: 'text.secondary'
                    }

                    }


export default function Navbar() {
    return (
        <>
            <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>

            <Box display='flex' alignItems='center'>
                <Typography variant="h6" component={NavLink} to='/' exact
                 sx={{color: 'inherit', textDecoration:'none'}}>
                    ACUL FERMECAT[LOGO]
                </Typography>

            </Box>

                <List sx={{display:'flex'}}>
                    {midLinks.map(({title, path})=> (
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                <IconButton size='large' sx={{color: 'inherit'}}>
                    <Badge badgeContent={4} color='secondary'>
                        <ShoppingCart></ShoppingCart>
                        </Badge>
                </IconButton>
                <List sx={{display:'flex'}}>
                    {rightLinks.map(({title, path})=> (
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}>
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