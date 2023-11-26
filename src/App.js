import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import ErrorHandle from "./pages/error/ErrorHandle";
import AuthHandle from "./pages/error/AuthHandle";
import Root from "./pages/Root";
import { ForgotPassword, Login, Register } from "./pages/auth";
import * as loader from "./services/loader";
import * as action from "./services/action";
import Dashboard from "./pages/client/Dashboard";
import {
  Admin,
  Category,
  CreateCategory,
  CreateFeature,
  Feature,
  UpdateCategory,
  UpdateFeature,
  Users,
} from "./pages/admin";
import {
  CreateRestaurant,
  Restaurant,
  UpdateRestaurant,
} from "./pages/client/restaurant";
import { CreateFood, Food, UpdateFood } from "./pages/client/food";
import { Order, UpdateOrder } from "./pages/client/order";
import Client from "./pages/client/Client";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorHandle />}>
        <Route
          errorElement={<AuthHandle />}
          element={<Root />}
          loader={loader.userLoader}
          id="root"
        >
          <Route element={<Client />}>
            <Route
              path="/"
              element={<Dashboard />}
              action={action.deleteRestaurantAction}
            ></Route>
            <Route
              path="create"
              element={<CreateRestaurant />}
              action={action.restaurantAction}
            ></Route>
            <Route
              path="update-restaurant/:restaurantId"
              element={<UpdateRestaurant />}
              action={action.restaurantAction}
            ></Route>
            <Route
              path="restaurant/:restaurantId"
              element={<Restaurant />}
              id="restaurant"
            >
              <Route
                path="food"
                element={<Food />}
                loader={loader.foodLoader}
                id="food"
              >
                <Route
                  path=":foodId"
                  element={<UpdateFood />}
                  action={action.foodAction}
                ></Route>
                <Route
                  path="create"
                  element={<CreateFood />}
                  action={action.foodAction}
                ></Route>
              </Route>
              <Route
                path="order"
                element={<Order />}
                loader={loader.orderLoader}
                id="order"
              >
                <Route
                  path=":orderId"
                  element={<UpdateOrder />}
                  action={action.orderAction}
                ></Route>
              </Route>
            </Route>
          </Route>
          <Route
            path="admin"
            element={<Admin />}
            loader={loader.categoryLoader}
          >
            <Route path="users" element={<Users />}></Route>
            <Route
              path="feature"
              element={<Feature />}
              loader={loader.featureLoader}
              id="feature"
            >
              <Route
                path="create"
                element={<CreateFeature />}
                action={action.featureAction}
              ></Route>
              <Route
                path=":featureId"
                element={<UpdateFeature />}
                action={action.featureAction}
              ></Route>
            </Route>
            <Route
              path="category"
              element={<Category />}
              loader={loader.categoryLoader}
              id="category"
            >
              <Route
                path="create"
                element={<CreateCategory />}
                action={action.categoryAction}
              ></Route>
              <Route
                path=":categoryId"
                element={<UpdateCategory />}
                action={action.categoryAction}
              ></Route>
            </Route>
            <Route path="*" element={<Navigate to="/admin" replace />}></Route>
          </Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="forgot-password" element={<ForgotPassword />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
