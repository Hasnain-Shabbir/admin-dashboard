/* eslint-disable react/react-in-jsx-scope */
import { CreateNew, Home, List, User } from "./pages";
import { Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "../formSource";

function App() {
  return (
    <div>
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
