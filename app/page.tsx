import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, Next.js!</h1>

      <p>Welcome to your new Next.js app.</p>
      <p>
        Get started by editing <code>pages/index.tsx</code> or adding more pages.
      </p>
      <Link href="/users">users</Link>
      <a
        href="https://nextjs.org/docs"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-800 rounded-md"
      >
        Documentation
      </a>
    </main>
  );
}
