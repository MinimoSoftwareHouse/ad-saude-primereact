import './ServiçosCard.css';
import { MdMedicalServices, MdLocalFireDepartment } from 'react-icons/md';
import LazyLoad from 'react-lazyload';

const ServiçosCard = () => {
	return (
		<>
			<div className="grid justify-content-around mx-auto w-11 service-cards">
				<div className="ServiçosCard shadow-2 hover:shadow-8">
					<LazyLoad
						height={200}
						once>
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
					</LazyLoad>
				</div>

				<div className="ServiçosCard shadow-2 hover:shadow-8">
					<LazyLoad
						height={200}
						once>
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
					</LazyLoad>
				</div>
			</div>
		</>
	);
};

export default ServiçosCard;
