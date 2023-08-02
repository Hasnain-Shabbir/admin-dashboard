/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { CreateNew, Home, List, User } from "./pages";
import { userInputs, productInputs } from "../formSource";
import { ThemeContext } from "./context/ThemeContext";
import "./styles/dark.scss";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<User />} />
          <Route
            path="create"
            element={<CreateNew inputs={userInputs} title="Add New User" />}
          />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<User />} />
          <Route
            path="create"
            element={
              <CreateNew inputs={productInputs} title="Add New Product" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
