import Footer from "./components/Footer";
import Header from "./components/Header";
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
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
