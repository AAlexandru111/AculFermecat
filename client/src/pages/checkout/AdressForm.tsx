import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useFormContext } from 'react-hook-form';
import AppTextInput from '../../components/AppTextInput';
import AppCheckbox from '../../components/AppCheckbox';

export default function AddressForm() {
    const { control, formState } = useFormContext();
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <AppTextInput control={control} name='fullName' label='Numele complet' />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput control={control} name='address1' label='Adresa linia 1' />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput control={control} name='address2' label='Adresa linia 2' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='city' label='Oras'  />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='state' label='Judet/Sector' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='zip' label='Cod postal' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='country' label='Tara' />
                </Grid>
                <Grid item xs={12}>
                    <AppCheckbox 
                        disabled={!formState.isDirty}
                        name='saveAddress' 
                        label='Salveaza adresa ' 
                        control={control} 
                    />
                </Grid>
            </Grid>
        </>
    );
}