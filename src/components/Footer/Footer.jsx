import './Footer.css';
import Logo from '../../assets/companyLogo.jpg';
import { Divider } from 'primereact/divider';

function Footer() {
	return (
		<div className="page-container">
			<footer className="footer w-full grid flex justify-content-center align-items-center absolute">
				<Divider
					align="bottom"
					className="footer-divider mx-auto pt-6"
				/>
				<div className="md:col-2 flex mx-auto justify-content-start">
					<img
						src={Logo}
						alt="Company Logo"
						className="footer-logo"
					/>
				</div>
				<div className="items md:col-4 mr-5">
					<h3>Nossa localização</h3>
					<p>BR-316, Posto yamaga Próx. Unama Br - salas g8 e g9</p>
				</div>
				<div className="items md:col-4">
					<h3>Entre em Contato</h3>
					<ul>
						<li>WHATSAPP: (91) 98601-8137</li>
						<li>E-mail: amedseg@outlook.com</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
