import { Link, useParams } from "react-router";
import { usePost } from "@/features/posts/posts.hooks";
import { gutter } from "@/lib/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostDetailsScreen() {
  const { postId } = useParams();
  const id = Number(postId);
  const validId = Number.isInteger(id) && id > 0;
  const { data: post, isPending, isError } = usePost(id);

  if (!validId) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-10">
        <p className="text-destructive">Invalid post ID.</p>
        <Link to="/">
          <Button>Back to posts</Button>
        </Link>
      </main>
    );
  }

  if (isPending) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Skeleton className="mb-4 h-10 w-3/4" />
        <Skeleton className="h-40 w-full rounded-xl" />
      </main>
    );
  }

  if (isError || !post) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-10">
        <p className="text-destructive">Could not load this post.</p>
        <Link to="/" className="underline">
          Back to posts
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-6">
        <Link to="/">
          <Button variant="outline">← All posts</Button>
        </Link>
      </div>

      <div className={gutter}>
        <div className="hidden text-sm text-muted-foreground sm:block">
          #{post.id}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-reading text-2xl leading-snug">
              {post.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="whitespace-pre-line leading-7 text-muted-foreground">
              {post.body}
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}