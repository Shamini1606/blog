import { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";

import { useParams } from "react-router-dom";

export default function CategoryPosts() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([null]);
  const { id } = useParams();

  const fetchPosts = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/posts/category/${id}`
    );
    setPosts(response.data);
  };

  const fetchCategory = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/posts/categories/${id}`
    );
    setCategory(response.data);
  };

  useEffect(() => {
    fetchPosts();
    fetchCategory();
  }, []);
  if (!category) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {/* <Header />{" "} */}
      <main>
        <div class="container mt-4">
          <div class="row">
            {/* <!-- Main Content --> */}
            <div class="col-lg-8">
              <h1 class="mb-4">{category.name} 1</h1>

              {/* <!-- Example Post 1 --> */}

              {posts.length > 0 ? (
                posts.map((post) => <Post post={post} />)
              ) : (
                <h4>No posts available</h4>
              )}
              {/* Add more posts dynamically as needed */}
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

// 3.23.18 blog
