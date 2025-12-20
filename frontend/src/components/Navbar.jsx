import "../css/components/Navbar.css"

function Navbar() {
    return (
        <div className="nav-wrapper">
            <div className="nav-left">
                <a href="/dashboard">Dashboard</a>
            </div>
            <div className="nav-right">
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
            </div>
        </div>
    )
}

export default Navbar