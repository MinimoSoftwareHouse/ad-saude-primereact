import './Treinamentos.css';
import { Card } from 'primereact/card';

const Treinamentos = () => {
	const listItemData = [
		'Treinamento de integração voltado para atividade de cada empresa',
		'Treinamento para CIPA',
		'Treinamento de EPI’S',
		'Treinamento de Máquinas e Equipamentos',
		'Treinamento de Ergonomia no Trabalho',
		'Treinamento para Construção Civil',
		'Treinamento para uso de Combustíveis e Inflamáveis',
		'Treinamento de benzeno',
		'Treinamento em segurança do trabalho e meio ambiente',
		'Treinamento de Combate ao Incêndio',
		'Treinamento de Trabalho em Altura',
		'Palestras educativas volta para Segurança em SIPAT',
	];

	return (
		<div className="containerServiços flex align-items-center justify-content-center">
			<div className="list">
				<div className="services1">
					<h1 className="title flex justify-content-start">
						Treinamentos de Segurança
					</h1>
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

export default Treinamentos;
