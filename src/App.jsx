import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import PricePage from "./pages/PricePage";
import PageNotFound from "./pages/PageNotFound";

import AuthorLoginPage from "./pages/blog_pages/AuthorLoginPage";
import BlogDashboardPage from "./pages/blog_pages/BlogDashboardPage";

import ProtectedRoute from "./components/ProtectedRoute";
import NewPostPage from "./pages/blog_pages/NewPostPage";
import BlogPostPage from "./pages/blog_pages/BlogPostPage";
import BlogPostDashboardPage from "./pages/blog_pages/BlogPostDashboardPage";
import BlogsComponent from "./components/blog_components/blog/BlogsComponent";
import BlogsPage from "./pages/blog_pages/BlogsPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* Blog yazarları için */}
            <Route path="/blog-admin/login" element={<AuthorLoginPage />} />

            <Route path="/plans" element={<PricePage />} />

            {/* 404 Sayfası */}
            <Route path="*" element={<PageNotFound />} />
            {/* Blog author sayfaları */}

            <Route
              path="/blog-admin/dashboard"
              element={
                <ProtectedRoute>
                  <BlogDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog-admin/posts"
              element={
                <ProtectedRoute>
                  <BlogPostDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog-admin/post/new"
              element={
                <ProtectedRoute>
                  <NewPostPage />
                </ProtectedRoute>
              }
            />
            <Route path="/blog/posts/" element={<BlogsPage />} />
            <Route path="/blog/post/:id" element={<BlogPostPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
