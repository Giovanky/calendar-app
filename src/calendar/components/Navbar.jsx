export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb">
            <span className="navbar-brand">
                <i className="fas fa-calendar-alt"></i>
                &nbsp;
                Calendario
            </span>

            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                Salir
            </button>
        </div>
    )
}