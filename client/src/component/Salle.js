import React, { useEffect, useState } from "react";




const Salle = () => {

    const rooms = [
        {
            id: "",
            name: "",
            description: "",
            price: "",
            capacity: "",
            age_limit: ""
        }
    ]
    const [value, setValue] = useState([])

    // useEffect(() => {
    //     fetch(``)
    //         .then((res) => {
    //             console.log('user')
    //             return res.json()
    //         })
    //         .then((res) => {
    //             setValue(res)
    //             console.log('res');
    //         })
    // }, [])
        // faire un map sur rooms
       
   //{rooms.map((room) => {
        
            return (
                <div>
                <h1>room disponible</h1>
                {/* <p>{room.id}</p>
                <p>{room.name}</p>
                <p>{room.description}</p>
                <p>{room.price}</p>
                <p>{room.capacity}</p>
                <p>{room.age_limit}</p> */}
                </div>
            );
     //   })
    }
    
//}

export default Salle;