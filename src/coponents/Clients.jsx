import React from 'react'
import OneClient from './OneClient';

export default function Clients() {
  /*{ tableau avis  des clients}}*/
    const reviews = [
        {
          id: 1,
          name: "Sophie L.",
          review: "Super séjour ! Maison très propre et bien située.",
        },
        {
          id: 2,
          name: "Thomas B.",
          review: "Hôte très sympathique, je recommande à 100% !",
        },
        { id: 3,
          name: "Emma D.", 
          review: "Excellente expérience, on reviendra." },
      ];
    return (<>
<h6 class="text-lg font-bold dark:text-white  ml-5 ">AVIS CLIENT</h6>
/*{ conteneur de grille avec 3 colonnes  }*/
<div class="grid    md:grid-cols-3 ">


              {
                reviews.map((client)=><OneClient client={client} key={client.id}/>)
              }
            </div>
            </>
  )
}
