import { Card } from 'primereact/card';
import { MdMedicalServices } from 'react-icons/md';
import './ServiçosCard.css';

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

const ServiçosCard = () => {
	return (
		<>
			<div className="grid justify-content-around mx-12 ">
				<div className="col-12 sm:col-12 md:col-5 lg:col-5 p-3 lg:p-7 ">
					<Card
						title={<CardTitle01></CardTitle01>}
						className="ServiçosCard shadow-2 hover:shadow-5 ">
						<div className="m-0 ">
							<ul className="ServiçosCard-description text-left ">
								<li className="ServiçosCard-items">
									Atestado de Saúde Ocupacional
								</li>
								<li className="ServiçosCard-items">Admissional</li>
								<li className="ServiçosCard-items">Periódico</li>
								<li className="ServiçosCard-items">Demissional</li>
								<li className="ServiçosCard-items">Mudança de Risco</li>
							</ul>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default ServiçosCard;
