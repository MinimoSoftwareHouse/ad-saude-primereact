import './Obrigado.css';

function Obrigado() {
	return (
		<div className="jumbotron text-center center">
			<div className="container">
				<h1 className="display-3">Obrigado por entrar em contato! 😁</h1>
				<br />
				<div className="row">
					<div className="col-4 mx-auto">
						<a
							className="btn btn-success btn-lg btn-block"
							href="http://localhost:5173/contato"
							role="button">
							⬅ Voltar
						</a>
						<a
							className="btn btn-light btn-lg btn-block"
							href="http://localhost:5173/"
							role="button">
							🏠 Home
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Obrigado;
