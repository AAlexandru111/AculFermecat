import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer(){
    return(
        <footer>
            <Box
            className="footerbody"
             px={{ xd:3,sm:10 }}
            py={{xs:5, sm:10 }}
            color="white">
                <Container maxWidth='lg'>
                    <Grid container spacing={7} >
                        <Grid item xs={12} sm={4} spacing={4}>
                            <Box borderBottom={1}><Typography variant='h5'>Need Help</Typography></Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Home
                                </Link>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/contact' color='inherit'>
                                    Contact us
                                </Link>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/about' color='inherit'>
                                    About us
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><Typography variant='h5'>Products</Typography></Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/products' color='inherit'>
                                    Product page
                                </Link>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/basket' color='inherit'>
                                    Cart
                                </Link>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/checkout' color='inherit'>
                                    Checkout
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><Typography variant='h5'>Contact</Typography></Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Phone
                                </Link>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    WhatsApp
                                </Link>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Facebook
                                </Link>
                            </Box>
                        </Grid>

                    </Grid>
                    <Box textAlign="center" pt={{ xs:5, sm:10}} pb={{xs:5 , sm:0}}>
                        Acul Fermecat &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}