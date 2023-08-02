/* eslint-disable react/react-in-jsx-scope */
import { Home, List, User } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
