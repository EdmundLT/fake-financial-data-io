import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guide from "./components/Guide/Guide";
import Docs from "./components/Docs/Docs";
import KnownIssue from "./components/KnownIssue/KnownIssue";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide/" element={<Guide />} />
        <Route path="/docs/" element={<Docs />} />
        <Route path="/known-issue/" element={<KnownIssue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
