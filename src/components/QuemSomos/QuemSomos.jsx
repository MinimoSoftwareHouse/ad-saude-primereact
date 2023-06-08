import React from 'react';
import './QuemSomos.css';
import {Card} from 'primereact/card';


const ServicesTitle = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex-justify-content-center">
					<h1 className="overflow-hidden">Serviços</h1>
				</div>
			</div>
		</>
	);
}

const VisionTitle = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex-justify-content-center">
					<h1 className="overflow-hidden">Visão</h1>
				</div>
			</div>
		</>
	);
}

const ValuesTitle = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex-justify-content-center">
					<h1 className="overflow-hidden">Valores</h1>
				</div>
			</div>
		</>
	);
}



const QuemSomos = () => {
	return (

		<div className="grid justify-content-around">
			<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-4">

				<Card title={<ServicesTitle/>} className="card shadow-2 hover:shadow-7 mx-0">
					<div className="m-0">
						<h3 className="card-description">
							Oferecer serviços e produtos de Saúde, Segurança e Higiene
							Ocupacional, que promovam melhores condições de trabalho, bem estar
							social, qualidade de vida e aumento da produtividade nas empresas,
							através da adequação do ambiente de trabalho às normas de saúde
							ocupacional.
						</h3>
					</div>
				</Card>

			</div>
			<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-4">


				<Card title={<VisionTitle/>} className="card shadow-2 hover:shadow-7 mx-0">
					<div className="m-0">
						<h3 className="card-description">
							Trabalhamos para ser uma empresa diferenciada na prestação de
							serviços de forma a garantir a nossos clientes, serviços de
							qualidade com atendimento personalizado visando à necessidade de
							cada um.
						</h3>
					</div>
				</Card>


			</div>
			<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-4">

				<Card title={<ValuesTitle/>} className="card shadow-2 hover:shadow-7 mx-0">
					<div className="m-0">
						<h3 className="card-description">
							Trabalho, Ética, Honestidade, Integridade, Inovação, Dinamismo, Foco
							no cliente e Excelência no atendimento.
						</h3>
					</div>
				</Card>

			</div>
		</div>
	);
};

export default QuemSomos;
