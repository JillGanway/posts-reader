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
    <Card>
      <CardHeader>
        <CardTitle className="line-clamp-2 text-lg">
          <Link
            to={`/posts/${post.id}`}
            className="hover:underline"
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