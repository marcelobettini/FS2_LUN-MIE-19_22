import { Outlet, Navigate } from "react-router-dom";
// Route Guard
const useAuth = () => {
    const user = { loggedIn: true };
    return user.loggedIn;
}

const ProtectedRoute = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to="/signin" />
}

export default ProtectedRoute