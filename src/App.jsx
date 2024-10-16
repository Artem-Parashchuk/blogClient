import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Layout } from "./components/Layout";
import { MainPage } from "./pages/MainPage";
import { PostsPage } from "./pages/PostsPage";
import { PostPage } from "./pages/PostPage";
import { AddPost } from "./pages/AddPost";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { EditPostPage } from "./pages/EditPostPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMeThunk } from "./redux/auth/getMeThunk";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMeThunk())
  }, [dispatch])
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path=":id" element={<PostPage />} />
        <Route path=":id/edit" element={<EditPostPage />} />
        <Route path="new" element={<AddPost />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>

      <ToastContainer position="bottom-right" />
    </Layout>
  );
}

export default App;
