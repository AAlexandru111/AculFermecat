import { Box, Grid, Link, MenuItem, Typography } from "@mui/material";
import { TextField } from '@mui/material';
import { useState } from "react";
import Footer from "../../components/Footer";
import '../custom/CustomOrder.css';


export default function CustomOrder() {
    const types = [
        {
            value: 'Top',
        },
        {
            value: 'Bottom',
        },
        {
            value: 'Dress',
        },
        {
            value: 'Something else',
        },
    ];

        const [type, setType] = useState('Top');

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setType(event.target.value);
        };



        return (

            <>
                <Typography variant='h3' className="customtitle">Custom Order</Typography>
                <div className="customdiv">
                    <Typography variant='h4' align='center' className="customtext">We can do custom orders, here you can enter the details about the product that you want and you can get an estimation</Typography>
                </div>
                <div className="customforms">
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={4} spacing={4}>
                            <Box><Typography variant='h5'>Products that you want</Typography></Box>
                            <Box sx={{ p: 1 }}>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Required"
                                    defaultValue="First Name"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{ p: 1 }}>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Required"
                                    defaultValue="Last Name"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{ p: 1 }}>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Required"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{ p: 1 }}>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select"
                                    value={type}
                                    onChange={handleChange}
                                    helperText="Please select your type of product"
                                    variant="standard"
                                >
                                    {types.map((option: any) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <Footer/>
            </>
        )
    }
