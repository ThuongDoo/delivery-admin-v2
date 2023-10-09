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
import Dashboard from "./pages/Dashboard";
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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorHandle />}>
        <Route errorElement={<AuthHandle />}>
          <Route
            path="/"
            element={<Root />}
            loader={loader.userLoader}
            id="root"
          >
            <Route index element={<Dashboard />}></Route>
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
            </Route>
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
