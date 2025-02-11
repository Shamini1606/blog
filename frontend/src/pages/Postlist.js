import { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Postlist() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:8000/api/posts");
    setPosts(response.data);
  };

  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:8000/api/categories");
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  return (
    <>
      {/* <Header />{" "} */}
      <main>
        <div class="container mt-4">
          <div class="row">
            {/* Main Content  */}
            <div class="col-lg-8">
              <h1 class="mb-4">Latest Posts</h1>

              {posts.length > 0 ? (
                posts.map((post) => <Post post={post} />)
              ) : (
                <h4>No posts available</h4>
              )}
            </div>
            {/* Sidebar  */}
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">About Me</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">Categories</h5>
                  <ul class="list-group">
                    {categories.map((category) => (
                      <li class="list-group-item">
                        <Link
                          href="#"
                          to={`/posts/category/${category._id}`}
                          class="text-black"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

// 3.23.18 blog
