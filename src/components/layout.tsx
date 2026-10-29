import { Link, Outlet, useLocation } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          {isHome ? (
            <span className="font-semibold">Posts Reader</span>
          ) : (
            <Link to="/" className="font-semibold hover:underline">
              All posts
            </Link>
          )}

          <ModeToggle />
        </div>
      </header>

      <Outlet />
    </div>
  );
}