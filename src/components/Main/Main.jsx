import './Main.css';

function Main() {
	return (
		<div className="containerQuemSomos">
			<h1 className="main-title">Nossos Serviços</h1>
			<div className="grid">
				<div className="card">
					<div className="main-card-content">
						<h1>eSocial</h1>
						<h3 className="main-card-desc">Eventos de SST.</h3>
					</div>
				</div>

				<div className="main-card">
					<div className="main-card-content">
						<h1>Segurança do Trabalho</h1>
						<h3 className="main-card-desc">
							Elaboração de documentos PPRA, Analise global do PPRA, etc.
						</h3>
					</div>
				</div>

				<div className="main-card">
					<div className="main-card-content">
						<h1>Engenharia do Trabalho e Ambiental</h1>
						<h3 className="main-card-desc">
							AAF (Autorização Ambiental de Funcionamento e Licenciamento), etc.
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
