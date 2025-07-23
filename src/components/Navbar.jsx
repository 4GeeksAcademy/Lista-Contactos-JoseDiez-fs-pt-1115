import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Agregar Contacto</span>
				</Link>
				<div className="ml-auto">
					<Link to="/Contacts">
						<button className="btn btn-primary">Contactos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};