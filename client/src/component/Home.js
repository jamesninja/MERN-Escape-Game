
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

//components
import CardRoom from './Card'

export default function Home() {
    const [rooms, setRooms] = useState([])
    useEffect(()=>{
        getAllSalle()
    },[])
    

    const getAllSalle = async ()=>{
          const res = await axios
            .get('http://localhost:5000/rooms/')
        setRooms(res.data);       
    }

    //console.log(rooms); 
    return (   
        <Box   sx={{
            display: 'flex',
            alignItems: 'flex-start',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            height: 100,
            borderRadius: 1,
          }}>           
               {rooms.map((room)=>{
                return(
                    <CardRoom room={room}/>
                )
              })} 
        </Box>
    )
}

