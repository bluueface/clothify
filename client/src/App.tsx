import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { ProductService } from "./service/productService";
import {
  loadProductsFailure,
  loadProductsSuccess,
} from "./redux/reducer/ProductReducer";
import Home from "./component/Home";
import Cart from "./component/cart/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => {
        dispatch(loadProductsSuccess(res));
      })
      .catch((error) => {
        dispatch(loadProductsFailure(error));
      });
  }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsDetail />} />
        <Route path="/shopping-cart" element={<Cart />} />
      </Route>,
    ),
  );

  return <RouterProvider router={routes} />;
}

export default App;
