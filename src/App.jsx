/* eslint-disable react/react-in-jsx-scope */
import { Home, List } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
