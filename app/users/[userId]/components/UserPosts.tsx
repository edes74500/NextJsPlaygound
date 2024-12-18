export default async function UserPosts({ promise }: { promise: Promise<Post[]> }) {
  const posts = await promise;

  // export default async function UserPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
