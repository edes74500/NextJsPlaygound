type User = {
  id: number; // Identifiant unique de l'utilisateur
  name: string; // Nom complet
  username: string; // Pseudonyme
  email: string; // Adresse email
  address: {
    street: string; // Rue
    suite: string; // Appartement/suite
    city: string; // Ville
    zipcode: string; // Code postal
    geo: {
      lat: string; // Latitude
      lng: string; // Longitude
    };
  };
  phone: string; // Numéro de téléphone
  website: string; // Site web
  company: {
    name: string; // Nom de la compagnie
    catchPhrase: string; // Slogan
    bs: string; // Activité principale
  };
};

type Post = {
  userId: number; // ID de l'utilisateur auteur du post
  id: number; // ID unique du post
  title: string; // Titre du post
  body: string; // Contenu du post
};
