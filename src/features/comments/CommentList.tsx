import { useComments } from "./comments.hooks";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type CommentListProps = {
  postId: number;
};

export default function CommentList({ postId }: CommentListProps) {
  const { data: comments, isPending, isError } = useComments(postId);

  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-2xl font-bold">Comments</h2>

      {isPending && (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      )}

      {isError && (
        <p className="text-destructive">
          Could not load comments. Please try again.
        </p>
      )}

      {comments && comments.length === 0 && (
        <p className="text-muted-foreground">No comments found.</p>
      )}

      {comments?.map((comment) => (
        <Card key={comment.id}>
          <CardHeader>
            <p className="font-semibold">{comment.name}</p>
            <p className="text-sm text-muted-foreground">{comment.email}</p>
          </CardHeader>

          <CardContent>
            <p className="whitespace-pre-line text-sm leading-6">
              {comment.body}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}