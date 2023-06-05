import './Footer.css';
import Logo from '../../assets/companyLogo.png';

function Footer() {
	return (
		<div id="page-container">
			<div id="content-wrap">{/* Your page content here */}</div>
			<footer
				id="footer"
				className="footer">
				<div className="column">
					<img
						src={Logo}
						alt="Company Logo"
					/>
				</div>
				<div className="column2">
					<h3>Menu</h3>
					<ul>
						<li>Home</li>
						<li>Quem Somos</li>
						<li>Serviços</li>
						<li>Treinamentos</li>
						<li>Contato</li>
						<li>E-Social</li>
						<li>Blog</li>
					</ul>
				</div>
				<div className="column2">
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
