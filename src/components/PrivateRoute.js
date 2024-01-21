import { Navigate} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }  ) {
  const { currentUser } = useAuth();

  return currentUser ? (
    // <Route {...rest}>{(props) => <Component {...props} />}</Route>
    children
  ) : (
    <Navigate to="/login" />
  );
}
