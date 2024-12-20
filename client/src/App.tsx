import React, { useEffect, useState } from "react";
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
import Home from "./component/Home";
import Cart from "./component/cart/Cart";
import { CategoryService } from "./service/categoryService";
import {
  loadCategoriesFailure,
  loadCategoriesSuccess,
} from "./redux/reducer/categoryReducer";
import ShippingAddress from "./component/order/ShippingAddress";
import Payment from "./component/order/Payment";
import Login from "./component/user/Login";
import Register from "./component/user/Register";
import PrivateRoute from "./component/PrivateRoute";
import OrderHistory from "./component/order/OrderHistory";
import Administration from "./component/user/Administration";
import Selling from "./component/user/Selling";

function App() {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<number>();

  useEffect(() => {
    CategoryService.getAllCategories()
      .then((res) => {
        dispatch(loadCategoriesSuccess(res));
      })
      .catch((error) => {
        dispatch(loadCategoriesFailure(error));
      });
  }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main setSelectedId={setSelectedId} />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products"
          element={<Products selectedId={selectedId} />}
        />
        <Route path="/products/:productId" element={<ProductsDetail />} />
        <Route
          path="/shopping-cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders/history"
          element={
            <PrivateRoute>
              <OrderHistory />
            </PrivateRoute>
          }
        />

        <Route
          path="/orders/shipping-address"
          element={
            <PrivateRoute>
              <ShippingAddress />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="/administration"
          element={
            <PrivateRoute>
              <Administration />
            </PrivateRoute>
          }
        />
        <Route
          path="/selling"
          element={
            <PrivateRoute>
              <Selling />
            </PrivateRoute>
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={routes} />;
}

export default App;
