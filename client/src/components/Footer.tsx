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
                            <Box borderBottom={1}><Typography variant='h5'>Informatii</Typography></Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Home
                                </Link>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/contact' color='inherit'>
                                    Contact
                                </Link>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/about' color='inherit'>
                                    Despre noi
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><Typography variant='h5'>Produse</Typography></Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/products' color='inherit'>
                                    Produse
                                </Link>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/basket' color='inherit'>
                                    Cosul de cumparaturi
                                </Link>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <Link className="footerlinks" to='/checkout' color='inherit'>
                                    Finalizeaza comanda
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><Typography variant='h5'>Contact</Typography></Box>
                            <Box sx={{ p: 1}}>
                                <a href="tel:+40755066044" className="footerlinks">Telefon</a>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <a href="https://wa.me/+40755066044" className="footerlinks" target="_blank">
                                    WhatsApp
                                </a>
                            </Box>
                            <Box sx={{ p: 1}}>
                                <a href="https://www.facebook.com/artelieraculfermecat" className="footerlinks" target="_blank">
                                    Facebook
                                </a>
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