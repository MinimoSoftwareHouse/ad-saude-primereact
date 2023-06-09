import './Contato.css';
export default function Contato() {
	return (
		<>
			<div className="grid">
				<div className="container_form">
					<h1 className="text-green overflow-hidden">
						Entre em contato com a Amedseg
					</h1>
					<p className="mt-4 mb-6 text-center">
						Entre em contato conosco, responderemos em instantes.
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
								className="form-control"
								type="text"
								name="nome"
								placeholder="nome"
								required
							/>
						</div>

						<div className="style-form-input">
							<input
								className="form-control"
								type="email"
								name="email"
								placeholder="email"
								required
							/>
						</div>

						<div className="style-form-input right">
							<input
								className="form-control"
								type="text"
								name="assunto"
								placeholder="assunto"
								required
							/>
						</div>

						<div className="style-form-input full">
							<textarea
								className="form-control"
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
				{/* <a 
					href="https://wa.me/5591986018137?text= Olá! Gostaria de mais informações sobre serviços/valores"
					className='zap flex justify-content-center align-items-center' 
					target="blank">
					<i className='pi pi-whatsapp text-4xl'></i>
				</a> */}
			</div>
		</>
	);
}
