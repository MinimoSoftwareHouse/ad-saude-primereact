import './Navbar.css';
import Logo from '../../assets/companyLogo.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<>
			<nav className="nav w-full grid justify-content-center align-content-between align-items-center m-0">
				<div className="col-6 md:col-1 flex justify-content-center">
					<Link to="/">
						<img
							className="logo-navbar"
							src={Logo}
							alt="Company Logo"
						/>
					</Link>
				</div>

				<div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
					<Link
						to="/quem-somos"
						className="nav-item">
						Quem somos
					</Link>
				</div>
				<div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
					<Link
						to="/servicos"
						className="nav-item">
						Serviços
					</Link>
				</div>
				<div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
					<Link
						to="/contato"
						className="nav-item">
						Contato
					</Link>
				</div>
				<div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
					<Link
						to="/treinamentos"
						className="nav-item">
						Treinamentos
					</Link>
				</div>

			</nav>
		</>
	);
}
