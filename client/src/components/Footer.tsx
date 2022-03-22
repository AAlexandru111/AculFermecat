import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
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
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link className="footerlinks" to='/contact' color='inherit'>
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link className="footerlinks" to='/about' color='inherit'>
                                    Contact
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Contact
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link className="footerlinks" to='/' color='inherit'>
                                    Contact
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