
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

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

    // console.log(rooms); 
    return (
        <div className='card'>
              
              {rooms.map((room)=>{
                return(
                    <div>
                        {/* <p>{room.image}</p><br/> */}
                        <p>{room.name}</p>
                    </div>
                )
              })}
       
           
        </div>
     
    )
}

