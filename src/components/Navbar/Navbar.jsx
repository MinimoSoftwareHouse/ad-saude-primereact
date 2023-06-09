import './Navbar.css';
import Logo from '../../assets/companyLogo.jpg';
import { Link } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';

export default function Navbar() {

	const [isOpen, setIsOpen] = useState(false);

	function closeMenu() {
		setIsOpen(false);
	}

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	  }
	

	return (
		<>
			<Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
				<Link onClick={closeMenu} to="/" className="menu-item"> Home </Link>
				<Link onClick={closeMenu} to="/quem-somos" className="menu-item"> Quem somos </Link>
				<Link onClick={closeMenu} to="/servicos" className="menu-item"> Serviços </Link>
				<Link onClick={closeMenu} to="/contato" className="menu-item"> Contato </Link>
				<Link onClick={closeMenu} to="/treinamentos" className="menu-item"> Treinamentos </Link>
			</Menu>
			<nav className="nav w-full grid justify-content-center align-content-between align-items-center m-0">
				<div className="col-6 md:col-2 flex justify-content-center">
					<Link to="/">
						<img
							className="logo-navbar"
							src={Logo}
							alt="Company Logo"
						/>
					</Link>
				</div>

				{/* <div className="col-12 md:col-2 sm:col-3 flex justify-content-center">
					<Link
						to="/"
						className="nav-item">
						Home
					</Link>
				</div> */}
				<div className="col-12 md:col-2 sm:col-3 flex justify-content-center sm-hidden">
					<Link
						to="/quem-somos"
						className="nav-item" style={NavItemStyle}>
						Quem somos
					</Link>
				</div>
				<div className="col-12 md:col-1 sm:col-3 flex justify-content-center sm-hidden">
					<Link
						to="/servicos"
						className="nav-item" style={NavItemStyle}>
						Serviços
					</Link>
				</div>
				<div className="col-12 md:col-2 sm:col-3 flex justify-content-center sm-hidden">
					<Link
						to="/contato"
						className="nav-item" style={NavItemStyle}>
						Contato
					</Link>
				</div>
				<div className="col-12 md:col-2 sm:col-3 flex justify-content-center sm-hidden">
					<Link
						to="/treinamentos"
						className="nav-item" style={NavItemStyle}>
						Treinamentos
					</Link>
				</div>

				<div className="h-full col-12 md:col-3 sm:col-6 flex align-content-center align-itens-center justify-content-center pt-5">
					<Link
						target="_blank"
						style={{...NavItemStyle, color: 'white', display: 'inline-table'}}
						rel="noreferrer"
						to="https://wa.me/5591986018137?text=Olá! Gostaria de fazer um orçamento"
						className="nav-item-button">
						Solicite um orçamento
					</Link>
				</div>
			</nav>
			<Divider align="bottom" className="footer-divider mx-auto pt-1" />
		</>
	);
}


const NavItemStyle = {
	textDecoration : 'none',
};