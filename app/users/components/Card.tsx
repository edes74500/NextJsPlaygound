import Link from "next/link";

export default function Card({ user }: { user: User }) {
  console.log("hello from card component");
  return (
    <div className="card">
      <Link href={`/users/1`}>
        {/* <Link href={`/users/${user.id}`}> */}
        <h3 className="font-merienda">{user.username}</h3>
      </Link>

      <p>{user.email}</p>
    </div>
  );
}
