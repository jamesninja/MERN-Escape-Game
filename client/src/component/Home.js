
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const rooms = [
    { id: 1, name: "dsds", description: "rerere", price: 33, capacity: 3, age_limit: 4 },
    { id: 2, name: "dsds", description: "rerere", price: 33, capacity: 3, age_limit: 4 },
    { id: 3, name: "dsds", description: "rerere", price: 33, capacity: 3, age_limit: 4 },
    { id: 4, name: "dsds", description: "rerere", price: 33, capacity: 3, age_limit: 4 },
]


export default function Home() {
    return (

        // faire un map sur roomsList
        //<>
        <div className='card'>
       
            {rooms.map((room, index) => {
                return (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image='https://jardinage.lemonde.fr/images/dossiers/2016-09/lezards-151648.jpg'
                            alt="green iguana"
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to={`/salles/${room.id}`}>salle</Link></Button>
                        </CardActions>
                    </Card>
            
            );
        })}
    
        </div>
        //</>
    )
}

