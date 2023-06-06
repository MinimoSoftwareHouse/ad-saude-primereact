import './Contato.css';

export default function Contato() {
	return (
		<>
			<div className="grid">
				<div className="container_form">
					<h1 className="title_contato">Entre em contato com a Amedseg</h1>
					<p className="mt-4 mb-6 text-center">
						Entre em contato conosco, responderemos em instantes, ou se preferir
						ligue para a Amedseg no (numero) e fale com um de nossos atendentes.
					</p>

					<form
						action="https://formsubmit.co/aronr.chaves@gmail.com"
						method="POST">
						<input
							type="hidden"
							name="_subject"
							value="Novo contato vindo do site!"></input>
						<div className="style-form-input full">
							<input
								type="hidden"
								name="_next"
								value="http://localhost:5173/obrigado"
							/>
							<input
								type="text"
								name="nome"
								placeholder="nome"
								required
							/>
						</div>

						<div className="style-form-input">
							<input
								type="email"
								name="email"
								placeholder="email"
								required
							/>
						</div>

						<div className="style-form-input right">
							<input
								type="text"
								name="assunto"
								placeholder="assunto"
								required
							/>
						</div>

						<div className="style-form-input full">
							<textarea
								name="mensagem"
								type="text"
								placeholder="mensagem"
								required
							/>
						</div>

						<div className="style-form-input full">
							<input
								type="hidden"
								name="acao"
								value="enviar"
							/>
							<button className="btn-submit">Enviar mensagem</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
