import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { getPosts } from "@/services/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostsPage() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Posts Reader
        </h1>
        <p className="mt-2 text-muted-foreground">
          Browse posts and open one to read more.
        </p>
      </header>

      {isLoading && (
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-40 rounded-xl" />
          ))}
        </div>
      )}

      {isError && (
        <p className="text-destructive">
          Could not load posts. Please refresh and try again.
        </p>
      )}

      {posts && (
        <>
          <p className="mb-4 text-sm text-muted-foreground">
            {posts.length} posts
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle className="line-clamp-2 text-lg">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                    {post.body}
                  </p>

                  <Link to={`/posts/${post.id}`}>
                    <Button>Read post</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </main>
  );
}