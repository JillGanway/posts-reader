import PostList from "@/features/posts/components/PostList";

export default function HomeScreen() {
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

      <PostList />
    </main>
  );
}