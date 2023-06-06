import './Contato.css';

export default function Contato() {
	return (
		<>
			<div className="grid">
				<div className="col-2 flex align-items-center ">
					<h5>Nosso endereço</h5>
					<div className="linha-ondulada col-6 flex justify-content-end"></div>
				</div>
				

				<div className="container_form col-6">
					<h1 className="title_contato">
						<i className="icon icon-file-text-o"></i> Fale Conosco
					</h1>

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
								required
							/>
							<label>
								<i className="icon icon-user-1"></i> Nome
							</label>
						</div>

						<div className="style-form-input">
							<input
								type="email"
								name="email"
								required
							/>
							<label>
								<i className="icon icon-mail-1"></i> E-mail
							</label>
						</div>

						<div className="style-form-input right">
							<input
								type="text"
								name="assunto"
								required
							/>
							<label>
								<i className="icon icon-info-circled"></i> Assunto
							</label>
						</div>

						<div className="style-form-input full">
							<textarea
								name="mensagem"
								required></textarea>
							<label>
								<i className="icon icon-comments"></i> Mensagem
							</label>
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
