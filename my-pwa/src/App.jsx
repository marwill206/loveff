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
        <Route path="/dist/" element={<Home lang={lang} />} />
        <Route path="/dist/info" element={<Info lang={lang} />} />
        <Route path="/dist/music" element={<Music lang={lang} />} />
        <Route path="/dist/location" element={<Location lang={lang} />} />
      </Routes>
    </Layout>
  );
}

export default App;
