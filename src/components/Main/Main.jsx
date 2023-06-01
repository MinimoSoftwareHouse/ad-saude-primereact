import './Main.css';

function Main() {
	return (
		<div className="containerQuemSomos">
			<div className="grid">
				<div className="card">
					<div className="main-card-content">
						<h1>eSocial</h1>
						<h3>Eventos de SST.</h3>
					</div>
				</div>

				<div className="main-card">
					<div className="main-card-content">
						<h1>Segurança do Trabalho</h1>
						<h3>Elaboração de documentos PPRA, Analise global do PPRA, etc.</h3>
					</div>
				</div>

				<div className="main-card">
					<div className="main-card-content">
						<h1>Engenharia do Trabalho e Ambiental</h1>
						<h3>
							AAF (Autorização Ambiental de Funcionamento e Licenciamento), etc.
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
