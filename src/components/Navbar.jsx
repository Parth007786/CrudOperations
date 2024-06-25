
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(to left, grey, green)' }}>
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <a className="navbar-brand text-light mx-auto" href="#">Records Book</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
