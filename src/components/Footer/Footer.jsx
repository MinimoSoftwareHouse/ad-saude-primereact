import './Footer.css';
import Logo from '../../assets/companyLogo.jpg';
import { Divider } from 'primereact/divider';

function Footer() {
	return (
		<footer className="footer w-full grid flex justify-content-center align-items-center absolute">
			<Divider
				align="bottom"
				className="footer-divider mx-auto pt-6"
			/>

			<div className="col-12 sm:col-12 md:col-4 lg:col-4 flex justify-content-center">
				<img
					src={Logo}
					alt="Company Logo"
					className="footer-logo"
				/>
			</div>

			<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-5">
				<h3 className="overflow-hidden font-bold text-green">
					Nossa localização
				</h3>
				<p>
					BR-316, Posto Yamaga Próx. Unama Br <br /> Salas G8 e G9
				</p>
			</div>
			<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-5">
				<h3 className="overflow-hidden font-bold text-green">
					Entre em Contato
				</h3>
				<ul>
					<li>WHATSAPP: (91) 98601-8137</li>
					<li>E-mail: amedseg@outlook.com</li>
				</ul>
			</div>
			<div className="social-icons">
				<a
					href="https://www.facebook.com/amedseg.pa/"
					target="blank">
					<i className="pi pi-facebook btn-facebook text-3xl mr-4"></i>
				</a>
				<a
					href="https://www.instagram.com/amedseg.pa/"
					target="blank">
					<i className="pi pi-instagram btn-instagram text-3xl mr-4"></i>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
