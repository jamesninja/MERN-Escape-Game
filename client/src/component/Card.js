import React ,{useState,useEffect } from "react";
import { Link } from 'react-router-dom';    
import axios from 'axios';


import NavBar from './NavBar';


function Card(props){
  const [data, setData] = useState([]);

  // similaire à "componentDidMount" et "componentDidUpdate"

  useEffect(() => {
    const fetchData = async () => {
    const result = await axios( 'https://jardinage.lemonde.fr/images/dossiers/2016-09/lezards-151648.jpg',
    );
    setData(result.data);
    };
    fetchData();
  })

  return(
    <Link to={`/salles/${props.room._id}`}>
        <img src='https://jardinage.lemonde.fr/images/dossiers/2016-09/lezards-151648.jpg'  alt="image" />
        <p>{props.room.image}</p><br/> 
        <p>{props.room.name}</p>
    </Link>

    )
}
export default Card;