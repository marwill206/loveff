import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Info from "./pages/Info";
import Music from "./pages/Music";
import Location from "./pages/Location";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/info" element={<Info />} />
        <Route path="/music" element={<Music />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Layout>
  );
}

export default App;
