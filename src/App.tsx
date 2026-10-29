import { Routes, Route } from "react-router";
import Layout from "@/components/layout";
import HomeScreen from "@/pages/HomeScreen";
import PostDetailsScreen from "@/pages/PostDetailsScreen";
import NotFoundScreen from "./pages/NotFoundScreen";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route
          path="posts/:postId"
          element={<PostDetailsScreen />}
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
}