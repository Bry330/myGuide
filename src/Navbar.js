const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Welcome</h1>

            <div className="Links">
                <a href="http://localhost:3000/" style={{ backgroundColor: "#f1356d", color: "white", borderRadius: "8px" }}>Home</a>
                <a href="https://www.google.com/" style={{ backgroundColor: "#f1356d", color: "white", borderRadius: "8px" }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;