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
import { UserService } from "./service/userService";
import { setConnectedUser } from "./redux/reducer/userReducer";

function App() {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<number>();

  // FIXME
  useEffect(() => {
    UserService.getConnectedUser(1).then((res) => {
      dispatch(setConnectedUser(res));
    });
  }, []);

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
        <Route
          path="/products"
          element={<Products selectedId={selectedId} />}
        />
        <Route path="/products/:productId" element={<ProductsDetail />} />
        <Route path="/shopping-cart" element={<Cart />} />
        <Route path="/orders/shipping-address" element={<ShippingAddress />} />
        <Route path="/orders/payment" element={<Payment />} />
      </Route>,
    ),
  );

  return <RouterProvider router={routes} />;
}

export default App;
