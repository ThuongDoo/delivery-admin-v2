import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

function AuthHandle() {
  const navigate = useNavigate();
  const error = useRouteError();
  useEffect(() => {
    if (error.response?.status === 401) {
      console.log(error);
      navigate("/login");
    }
  }, [error]);

  return;
}

export default AuthHandle;
