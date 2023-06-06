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

				<div className="services2">
					<h1 className="title">Medicina Ocupacional</h1>
					<ul className="list">
						<li className="item">ASO – Atestado de Saúde Ocupacional</li>
						<li className="item">Admissional</li>
						<li className="item">Periódico</li>
						<li className="item">Demissional</li>
						<li className="item">Mudança de Função</li>
						<li className="item">Retorno ao Trabalho</li>
						<li className="item">
							PCMSO (Programa de Controle Médico e Saúde Ocupacional)
						</li>
						<li className="item">CAT (Comunicado de Acidente de Trabalho)</li>
						<li className="item">Exames Laboratoriais</li>
						<li className="item">PCA (Programa de Conservação Auditivo)</li>
						<li className="item">Atendimento Clínico do Funcionário</li>
					</ul>
				</div>

				<div className="services3">
					<h1 className="title">Prevenção e Combate a Incêndio</h1>
					<ul className="list">
						<li className="item">
							Liberação de Auto de Vistoria do Corpo de Bombeiros (AVCB) –
							Comercial e Industrial
						</li>

						<li className="item">
							Liberação de Auto de Vistoria do Corpo de Bombeiros (AVCB) –
							Eventos Temporários
						</li>

						<li className="item">
							Renovação de Auto de Vistoria do Corpo de Bombeiros (AVCB)
						</li>
						<li className="item">Composição de Brigada de Incêndio</li>
						<li className="item">Mudança de Função</li>
						<li className="item">Retorno ao Trabalho</li>
						<li className="item">
							PCMSO (Programa de Controle Médico e Saúde Ocupacional)
						</li>
						<li className="item">CAT (Comunicado de Acidente de Trabalho)</li>
						<li className="item">Exames Laboratoriais</li>
						<li className="item">PCA (Programa de Conservação Auditivo)</li>
						<li className="item">
							<h4>
								Elaboramos todos os tipos de laudos
								(elétricos/mecânicos/estruturais) para Liberação de AVCB
							</h4>
						</li>
					</ul>
					
				</div>
			</div>
		</div>
	);
};

export default Serviços;
