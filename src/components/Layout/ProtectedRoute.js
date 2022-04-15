// react-router
import { useLocation, Navigate, Outlet } from "react-router-dom";
// custom routes
import { HOME } from "../Common/routes";

function ProtectedRoute({ isAllowed, redirectPath = HOME }) {
  const location = useLocation();

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;