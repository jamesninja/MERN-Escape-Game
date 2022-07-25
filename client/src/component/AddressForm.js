import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function AddressForm() {
    const [value, setValue] = React.useState(null);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Participants
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
        <TextField
          id="standard-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        </Grid>
    </Grid>
    {/* {Participants.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} thirdly={product.age}  />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
       
        ))} */}
        {/*<Link to={`/salles/${params._id}`}>Reservation</Link>*/}
    </React.Fragment>
  );
}