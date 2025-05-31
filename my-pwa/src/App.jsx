import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Info from "./pages/Info";
import Music from "./pages/Music";
import Location from "./pages/Location";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState(localStorage.lang || "nl");
  return (
    <Layout lang={lang} setLang={setLang}>
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/info" element={<Info lang={lang} />} />
        <Route path="/music" element={<Music lang={lang} />} />
        <Route path="/location" element={<Location lang={lang} />} />
      </Routes>
    </Layout>
  );
}

export default App;
