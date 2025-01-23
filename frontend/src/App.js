import Footer from "./components/Footer";
import Header from "./components/Header";
import CategoryPosts from "./pages/CategoryPosts";
import PostDetail from "./pages/PostDetail";
import Postlist from "./pages/Postlist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Postlist /> */}

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Postlist />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/category/:id" element={<CategoryPosts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
