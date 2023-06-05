import './Footer.css';
import Logo from '../../assets/companyLogo.jpg';

function Footer() {
	return (
		<div className="page-container">
			<footer className="footer w-full grid align-content-center absolute	">
				<div className="md:col-4 flex justify-content-start align-items-center">
					<img
						src={Logo}
						alt="Company Logo"
						className="footer-logo"
					/>
				</div>
				<div className="items md:col-2 ">
					<h3>Menu</h3>
					<ul>
						<li>Home</li>
						<li>Quem Somos</li>
						<li>Serviços</li>
						<li>Treinamentos</li>
						<li>Contato</li>
					</ul>
				</div>
				<div className="items md:col-4">
					<h3>Entre em Contato</h3>
					<ul>
						<li>WHATSAPP: (91) 98601-8137</li>
						<li>E-mail: CONTATO@GSTOCUPACIONAL.COM.BR</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
