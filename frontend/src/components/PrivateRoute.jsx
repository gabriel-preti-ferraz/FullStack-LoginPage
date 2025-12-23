import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
    const isLoggedIn = !!localStorage.getItem("token")

    if (!isLoggedIn) {
        alert("You need to be logged in to access this page!")
        return <Navigate to="/login" />
    }

    return children
}

export default PrivateRoute