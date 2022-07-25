
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from "react-router-dom";

export default function Room() {
    //récuperer l'id donné dans l'url
  let params = useParams()
  const [room, setRoom] = useState([])

  useEffect(() => {
    getSalle()
  }, [])

  const getSalle = async () => {
    const res = await axios
      // faire un fetch avec la route  GET /:id
      .get(`http://localhost:5000/rooms/${params._id}`)
    console.log(res.data)
    setRoom(res.data);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
       <img src='https://jardinage.lemonde.fr/images/dossiers/2016-09/lezards-151648.jpg' alt="img" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      Créneaux disponibles
      <Link to={`/bookings/${params._id}`}>Reservation</Link>
      </CardActions>
    </Card>
  );
}
