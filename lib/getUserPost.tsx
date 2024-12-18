// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function getUserPosts(userId: string): Promise<Post[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  console.log("✨ Fetching Data in getUserPosts");
  return res.json();
}
// , {
//     next: {
//       revalidate: 60, // Revalider toutes les 60 secondes
//     },
//   }
