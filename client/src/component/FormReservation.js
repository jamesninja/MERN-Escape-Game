
import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


//import PaymentForm from './PaymentForm';

const theme = createTheme();

export default function Reservation() {

    const [capacities, setCapacities] = useState(0);
    const [room, setRoom] = useState(0);
    const [value, setValue] =useState(0);

    // 1 faire un fetch pour récupèrer les infos de la room grace à l'id ( et donc la capacity de la room)
    useEffect(() => {
        getOneSalle()
    }, [])
    const getOneSalle = async () => {
        const res = await axios
            .get(`http://localhost:5000/rooms/${room.id}`)
        setRoom(res.data);
    }    

    // 2 créer un tableau de 0 à capacity : numberParticipants = [0,1,2,3,...]
    // 3 faire le map de menuitem sur le tableau 
    let tab =[];
    let capMin = 5;
    let capMax = 8;
    
    for(let i = capMin; i<=capMax; i++){
         tab.push(i)
    }
    console.log(tab);

    // [0,1,2,3,4,5,6,7,8]
    // const numberParticipants =

    function handleChange(event) {
        setCapacities(event.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setValue(evt.target.value)

        fetch(`http://localhost:5000/reservations`, {
            method: "POST",
            body: JSON.stringify(value),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => console.log("Success:", JSON.stringify(response)))
            .catch(error => console.error("Error:", error));
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            Vous allez réserver ...
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={capacities}
                        label="Capacity"
                        onChange={handleChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        {tab.map((participant) => {
                            
                            return (
                        <MenuItem value={participant}>{participant}</MenuItem>
                        )

                        })}
                    </Select>
                    <div>
                        {tab.map((retourFrom) => {
                            return <AddressForm />
                        })}
                        <Button type="submit" variant="contained" color="primary" onSubmit={handleSubmit}>
                        Valider Reservation
                        </Button>
                    </div>
                    
                </Paper>
            </Container>
         </ThemeProvider>
    );
}
