import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import { Suspense } from "react";
import Loading from "../loading";
import UserPosts from "./components/UserPosts";
import getAllUsers from "@/lib/getAllUsers";

type PageProps = {
  params: Promise<{ userId: string }>;
};

export const revalidate = 300; // Revalider toutes les 60 secondes
// Forcer le SSR avec l'option dynamique
// export const dynamic = "force-static";

export async function generateMetadata({ params }: PageProps) {
  const { userId } = await params;
  const user = await getUser(userId);

  // Générer les métadonnées OG dynamiquement
  return {
    title: `${user.name} | Profile`,
    description: `${user.name} est un utilisateur actif sur notre plateforme.`,
    openGraph: {
      title: `${user.name} | Profile`,
      description: `Découvrez les posts et activités de ${user.name} sur notre plateforme.`,
      url: `https://example.com/users/${userId}`,
      type: "profile",
      images: [
        {
          url: `https://via.placeholder.com/600x400?text=${encodeURIComponent(user.name)}`,
          width: 600,
          height: 400,
          alt: `${user.name}'s profile picture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${user.name} | Profile`,
      description: `Découvrez les posts et activités de ${user.name}.`,
      images: [`https://via.placeholder.com/600x400?text=${encodeURIComponent(user.name)}`],
    },
  };
}

//exemple d'idee qui ne marche pas a cause des metadonnees qui bloque la page
async function UserInfo({ userData }: { userData: Promise<User> }) {
  const user = await userData;

  return (
    <div>
      <h2 className="font-merienda text-4xl m-auto">{user.name}</h2>
    </div>
  );
}

export default async function UserPage({ params }: PageProps) {
  const { userId } = await params;
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold m-auto">User Details</h1>
        {/* //exemple d'idee qui ne marche pas a cause des metadonnees qui bloque la page */}
        <Suspense fallback={<p>loading user ...</p>}>
          <UserInfo userData={userData} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <UserPosts promise={userPostsData} />
        </Suspense>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const users = await getAllUsers();
  // const users = await usersData;

  return users.map((user) => ({ userId: String(user.id) }));
}
