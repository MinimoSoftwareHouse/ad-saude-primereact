import React from 'react';
import './QuemSomos.css';

const QuemSomos = () => {
	return (
		<div className="grid justify-content-around mx-auto w-11">
			<div className="card shadow-2 hover:shadow-8">
				<div className="card-content">
					<h1 className="card-title">Serviços</h1>
					<h3 className="card-description">
						Oferecer serviços e produtos de Saúde, Segurança e Higiene
						Ocupacional, que promovam melhores condições de trabalho, bem estar
						social, qualidade de vida e aumento da produtividade nas empresas,
						através da adequação do ambiente de trabalho às normas de saúde
						ocupacional.
					</h3>
				</div>
			</div>

			<div className="card shadow-2 hover:shadow-8">
				<div className="card-content">
					<h1 className="card-title">Visão</h1>
					<h3 className="card-description">
						Trabalhamos para ser uma empresa diferenciada na prestação de
						serviços de forma a garantir a nossos clientes, serviços de
						qualidade com atendimento personalizado visando à necessidade de
						cada um.
					</h3>
				</div>
			</div>

			<div className="card shadow-2 hover:shadow-8">
				<div className="card-content">
					<h1 className="card-title">Valores</h1>
					<h3 className="card-description">
						Trabalho, Ética, Honestidade, Integridade, Inovação, Dinamismo, Foco
						no cliente e Excelência no atendimento.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default QuemSomos;
