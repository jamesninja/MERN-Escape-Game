import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//const data = [{id:1,employee_name:"Tiger Nixon",employee_salary:320800,employee_age:61,profile_image:""},{id:2,employee_name:"Garrett Winters",employee_salary:170750,employee_age:63,profile_image:""}]

export default function Player() {
    const [players, setPLayers] = useState([])

    useEffect(() => {
      fetch(`http://localhost:5000/users/`)
        .then((res) => {
          console.log('conn_api')
          return res.json()
        })
        .then((res) => {
            setPLayers(res)
          console.log('conn_api mise à jour');
        })
    }, [])
    
    const filterPosts = (posts, query) => {
      if (!query) {
        return posts;
      }
  
      return posts.filter((post) => {
        const postName = post.title.toLowerCase();
        return postName.includes(query);
      });
    };
  
    return (
        
      <div>
               <h1> players </h1>
        {players.map((player, index) => {
          return (
                
           <div className="item">
           <p key={index}>{player.firstname}   {player.lastname}</p>
           <p key={index}>{player.email}</p>
           <Link to={`post/${player.id}`}>
              <h1 key={index} className="item">
                {player.title}
              </h1>
              <p key={index}>{player.body}</p>
              Afficher detaile
            </Link>
            
           </div>
  
          
            
          )
        })}
        
      </div>
      
    )
  
  }
//   return (
//     <div >
//       <h1> {information.firstname} </h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
