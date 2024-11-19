import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./component/Main";
import Products from "./component/product/Products";
import ProductsDetail from "./component/product/ProductsDetail";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main />}>
        {/*<Route index element={<Home />} />*/}
        <Route index element={<Products />} />
        <Route path="/details" element={<ProductsDetail />} />
      </Route>,
    ),
  );

  return <RouterProvider router={routes} />;
}

export default App;
