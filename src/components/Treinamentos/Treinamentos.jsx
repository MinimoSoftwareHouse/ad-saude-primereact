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
		<div className="grid justify-content-center align-itens-center mt-8 px-6">
			<div className="col-12">
				<h1 className="title p-overflow-hidden">Treinamentos de Segurança</h1>
			</div>
				{listItemData.map((item, index) => (
					<div className="col-12 sm:col-12 md:col-4 lg:col-4" key={index}>
						<Card className="training-card border-round border cursor-pointer hover:shadow-3">
							<p className="p-overflow-hidden">{item}</p>
						</Card>
					</div>
				))}
		</div>
	);
};

export default Treinamentos;
