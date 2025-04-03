import React from 'react';
import OneClient from './OneClient';

export default function Clients() {
  // Tableau des avis des clients
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
    {
      id: 3,
      name: "Emma D.",
      review: "Excellente expérience, on reviendra.",
    },
  ];

  return (
    <>
       <h6 className="ml-5 text-lg font-bold dark:text-white">AVIS CLIENT</h6>

      {/* Conteneur de grille avec trois colonnes */}
      <div className="grid md:grid-cols-3">
        {/* Boucle sur les avis des clients */}
        {reviews.map((client) => (
          <OneClient client={client} key={client.id} />
        ))}
      </div>
    </>
  );
}