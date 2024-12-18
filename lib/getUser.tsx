export default async function getUser(userId: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  console.log("💵 Fetching data in getUser function");
  return res.json();
}
