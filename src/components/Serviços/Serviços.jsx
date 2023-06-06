import './Serviços.css';
import { Card } from 'primereact/card';

const Serviços = () => {
	const listItemData = [
		'PGR - Programa de Gerenciamento de Riscos',
		'PPP - Perfil Profissiográfico Previdenciário',
		'Investigação de Acidente do Trabalho',
		'OSS - Ordem de Serviços de Segurança',
		'Prontuário de NR 20',
		'Elaboração de LTCAT- Laudo Técnico de Condições Ambientais do Trabalho',
		'Avaliações Ambientais',
		'Treinamentos',
		'Informe do e-Social - Eventos de SST',
		'Acompanhamento de Perícias',
	];

	return (
		<div className="containerServiços flex align-items-center justify-content-center">
			<div className="list">
				<div className="services1">
					<h1 className="title">Nossos serviços</h1>
					<ul className="list">
						{listItemData.map((item, index) => (
							<li
								key={index}
								className="item">
								<Card className="custom-card border-round">
									<p className="list-item">{item}</p>
								</Card>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Serviços;
