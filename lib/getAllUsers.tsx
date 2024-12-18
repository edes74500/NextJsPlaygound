export default async function getAllUsers(): Promise<User[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  console.log("🚗FETCH FROM GET ALL USERS");
  return res.json();
}
// , {
//     next: {
//       revalidate: 1, // Cache the response for 1 minute (60 seconds) before revalidating it.
//     },
