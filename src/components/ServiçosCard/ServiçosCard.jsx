import './ServiçosCard.css';
import { MdMedicalServices, MdLocalFireDepartment } from 'react-icons/md';
import { Card } from 'primereact/card';

const CardTitle01 = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex justify-content-center bg-black-alpha-0">
					<MdMedicalServices className="icon" />
				</div>
				<div className="col-12 flex justify-content-center">
					<h1 className="ServiçosCard-title">Medicina Ocupacional</h1>
				</div>
			</div>
		</>
	);
};
const CardTitle02 = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex justify-content-center">
					<MdLocalFireDepartment className="icon" />
				</div>
				<div className="col-12 flex justify-content-center">
					<h1 className="ServiçosCard-title">Prevenção e Combate a Incêndio</h1>
				</div>
			</div>
		</>
	);
};

const ServiçosCard = () => {
	return (
		<>
			<div className="grid justify-content-around mx-auto">
				<div className="col-12 sm:col-12 md:col-5 lg:col-5 p-3 lg:p-7">
					<Card
						title={<CardTitle01></CardTitle01>}
						className="ServiçosCard shadow-2 hover:shadow-5">
						<div className="m-0">
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
					</Card>

					{/* <div className="ServiçosCard shadow-2 hover:shadow-8">
						<LazyLoad
							height={200}
							once>
							<div className="ServiçosCard-content">
								<div className="icon-container">
									
								</div>
								<h1 className="ServiçosCard-title"></h1>
								
							</div>
						</LazyLoad>
					</div> */}
				</div>

				<div className="col-12 sm:col-14 md:col-5 lg:col-5 p-3 lg:p-7 ">
					<Card
						title={<CardTitle02 />}
						className="ServiçosCard border-round-3xl shadow-3 hover:shadow-5">
						<div className="m-0">
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
					</Card>

					{/* <div className="ServiçosCard shadow-2 hover:shadow-8">
						<LazyLoad
							height={200}
							once>
							<div className="ServiçosCard-content">
								<div className="icon-container">
									
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
					</div> */}
				</div>
			</div>
		</>
	);
};

export default ServiçosCard;
