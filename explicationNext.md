# Next.js Rendering Methods: Guide Complet (Version 15)

Next.js 15 introduit des changements dans la gestion du rendu, en particulier avec les nouvelles APIs de la **Route
Handlers** et la disparition des méthodes comme `getStaticProps` pour certaines configurations. Voici un aperçu des 5
principales méthodes avec leur implémentation, avantages, inconvénients, et coûts associés :

---

## 1. **Static Site Generation (SSG)**

### **Description**

Génération statique des pages au moment du build. Les pages sont servies en tant que fichiers HTML statiques depuis un
CDN.

### **Implémentation (App Directory)**

```javascript
// app/annonces/page.js
import { fetchData } from "@/utils/api";

export default async function Page() {
  const data = await fetchData("https://api.example.com/data");

  return <div>{data.title}</div>;
}

// Les données sont chargées côté serveur pendant le build
export const metadata = {
  title: "Page SSG",
};
```

### **Avantages**

- Performances élevées (pages servies depuis un CDN).
- Idéal pour des contenus rarement modifiés.
- SEO-friendly.

### **Inconvénients**

- Requiert un rebuild pour mettre à jour le contenu.
- Peu adapté aux contenus dynamiques.

### **Coût serveur**

- Très faible (pages statiques).

---

## 2. **Server-Side Rendering (SSR)**

### **Description**

Les pages sont générées à la volée pour chaque requête côté serveur.

### **Implémentation (App Directory)**

```javascript
// app/annonces/page.js
import { fetchData } from "@/utils/api";

export default async function Page({ params }) {
  const data = await fetchData(`https://api.example.com/data`);

  return <div>{data.title}</div>;
}

export const dynamic = "force-dynamic"; // Forcer le SSR
```

### **Avantages**

- Données toujours à jour.
- SEO-friendly.
- Bonne solution pour les contenus personnalisés ou dynamiques.

### **Inconvénients**

- Temps de réponse plus long.
- Charge élevée sur le serveur.

### **Coût serveur**

- Élevé (génération pour chaque requête).

---

## 3. **Incremental Static Regeneration (ISR)**

### **Description**

Permet de regénérer certaines pages statiques en arrière-plan après un intervalle de temps défini.

### **Implémentation (App Directory)**

```javascript
// app/annonces/page.js
import { fetchData } from "@/utils/api";

export default async function Page() {
  const data = await fetchData("https://api.example.com/data");

  return <div>{data.title}</div>;
}

export const revalidate = 60; // Régénération toutes les 60 secondes
```

### **Avantages**

- Performances élevées grâce au CDN.
- Contenus semi-dynamiques sans rebuild manuel.
- SEO-friendly.

### **Inconvénients**

- Les données peuvent être obsolètes entre les régénérations.

### **Coût serveur**

- Faible à modéré (régénération périodique).

---

## 4. **Client-Side Rendering (CSR)**

### **Description**

Les données et le rendu sont gérés entièrement côté client via des appels API.

### **Implémentation**

```javascript
"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.example.com/data");
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  return <div>{data ? data.title : "Chargement..."}</div>;
}
```

### **Avantages**

- Très flexible pour des données dynamiques ou en temps réel.
- Pas de charge côté serveur Next.js.

### **Inconvénients**

- Mauvais pour le SEO (contenu non prérendu).
- Dépend des performances réseau côté client.

### **Coût serveur**

- Faible pour Next.js, mais dépend de la charge sur l'API backend.

---

## 5. **Static Site Generation avec Client-Side Fetching (SSG + CSR)**

### **Description**

Combine SSG pour un contenu initial rapide avec du CSR pour charger dynamiquement des données additionnelles.

### **Implémentation (App Directory)**

```javascript
// app/annonces/page.js
import { fetchInitialData } from "@/utils/api";

export default async function Page() {
  const initialData = await fetchInitialData("https://api.example.com/initial-data");

  return <ClientComponent initialData={initialData} />;
}

("use client");

function ClientComponent({ initialData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchAdditionalData = async () => {
      const res = await fetch("https://api.example.com/additional-data");
      const additionalData = await res.json();
      setData(additionalData);
    };

    fetchAdditionalData();
  }, []);

  return <div>{data.title}</div>;
}
```

### **Avantages**

- Chargement rapide grâce à SSG.
- Données dynamiques avec CSR.
- SEO-friendly.

### **Inconvénients**

- Complexité accrue.
- Dépend des performances réseau pour les données dynamiques.

### **Coût serveur**

- Faible à modéré (dépend du backend pour les appels dynamiques).

---

## Résumé des Méthodes

| Méthode       | Rendu Initial        | SEO-Friendly | Données Dynamiques | Coût Serveur  |
| ------------- | -------------------- | ------------ | ------------------ | ------------- |
| **SSG**       | Build                | Oui          | Non                | Très faible   |
| **SSR**       | À la requête         | Oui          | Oui                | Élevé         |
| **ISR**       | Build + Régénération | Oui          | Semi-dynamiques    | Faible-Modéré |
| **CSR**       | Client               | Non          | Oui                | Très faible   |
| **SSG + CSR** | Build + Client       | Oui          | Oui                | Faible-Modéré |
