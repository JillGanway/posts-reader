import { Link } from "react-router";
import type { Post as PostType } from "../posts.types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type PostProps = {
  post: PostType;
};

export function PostRow({ post }: PostProps) {
  return (
    <Card className="transition-colors hover:bg-accent/50">
      <CardHeader>
        <CardTitle className="line-clamp-2 text-lg">
          <Link
            to={`/posts/${post.id}`}
            className="rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {post.body}
        </p>
      </CardContent>
    </Card>
  );
}

export function PostRowSkeleton() {
  return <Skeleton className="h-40 rounded-xl" />;
}