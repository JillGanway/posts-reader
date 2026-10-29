import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function NotFoundScreen() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <p className="text-sm font-semibold text-muted-foreground">
        ERROR 404
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight">
        Page not found
      </h1>

      <p className="mt-3 text-muted-foreground">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <div className="mt-6">
        <Link to="/">
          <Button>Back to posts</Button>
        </Link>
      </div>
    </main>
  );
}