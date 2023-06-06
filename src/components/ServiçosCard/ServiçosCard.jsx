import './ServiçosCard.css';

import { MdMedicalServices, MdLocalFireDepartment } from 'react-icons/md';

const ServiçosCard = () => {
	return (
		<>
			<div className="grid justify-content-around mx-auto">
				<div className="ServiçosCard">
					<div className="ServiçosCard-content">
						<div className="icon-container">
							<MdMedicalServices className="icon" />
						</div>
						<h1 className="ServiçosCard-title">Medicina Ocupacional</h1>
						<ul className="ServiçosCard-description">
							<li className="ServiçosCard-items">
								Atestado de Saúde Ocupacional
							</li>
							<li className="ServiçosCard-items">Admissional</li>
							<li className="ServiçosCard-items">Periódico</li>
							<li className="ServiçosCard-items">Demissional</li>
							<li className="ServiçosCard-items">Mudança de Função</li>
						</ul>
					</div>
				</div>

				<div className="ServiçosCard">
					<div className="ServiçosCard-content">
						<div className="icon-container">
							<MdLocalFireDepartment className="icon" />
						</div>
						<h1 className="ServiçosCard-title">
							Prevenção e Combate a Incêndio
						</h1>
						<ul className="ServiçosCard-description">
							<li className="ServiçosCard-items">
								Liberação de Auto de Vistoria do Corpo de Bombeiros (AVCB) –
								Comercial e Industrial
							</li>
							<li className="ServiçosCard-items">
								Liberação de Auto de Vistoria do Corpo de Bombeiros (AVCB) –
								Eventos Temporários
							</li>
							<li className="ServiçosCard-items">
								Renovação de Auto de Vistoria do Corpo de Bombeiros (AVCB)
							</li>
							<li className="ServiçosCard-items">
								Composição de Brigada de Incêndio
							</li>
							<li className="ServiçosCard-items">Mudança de Função</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiçosCard;
