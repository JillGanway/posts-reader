import { usePosts } from "../posts.hooks";
import { PostRow, PostRowSkeleton } from "./Post";

export default function PostList() {
  const { data: posts, isPending, isError } = usePosts();

  if (isPending) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <PostRowSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-destructive">
        Could not load posts. Please refresh and try again.
      </p>
    );
  }

  if (!posts.length) {
    return <p className="text-muted-foreground">No posts found.</p>;
  }

  return (
    <section>
      <p className="mb-4 text-sm text-muted-foreground">
        {posts.length} posts
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <PostRow key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}