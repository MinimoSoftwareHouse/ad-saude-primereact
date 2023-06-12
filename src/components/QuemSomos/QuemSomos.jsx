import './QuemSomos.css';
import { Card } from 'primereact/card';
import Home from '../Home/Home';
import heroImg from '../../assets/heroImg4.jpeg';

const ServicesTitle = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex-justify-content-center">
					<h1 className="overflow-hidden">Serviços</h1>
				</div>
			</div>
		</>
	);
};

const VisionTitle = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex-justify-content-center">
					<h1 className="overflow-hidden">Visão</h1>
				</div>
			</div>
		</>
	);
};

const ValuesTitle = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex-justify-content-center">
					<h1 className="overflow-hidden">Valores</h1>
				</div>
			</div>
		</>
	);
};

const QuemSomos = () => {
	return (
		<>
			<Home
				title="Quem Somos"
				heroImg={heroImg}
			/>

			<div className="grid justify-content-around">
				<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-3">
					<Card
						border-round-right-3xl
						title={<ServicesTitle />}
						className="card shadow-5 hover:shadow-5 mx-auto border-round-3xl sm:border-round-3xl "
						style={{ height: '850px' }}>
						<div className="m-0">
							<h3 className="card-description text-left">
								Nosso compromisso é fornecer serviços e produtos de Saúde,
								Segurança e Higiene Ocupacional para melhorar as condições de
								trabalho.
								<br />
								<br />
								Nós promovemos o bem-estar e aumentamos a produtividade nas
								empresas.
								<br />
								<br />
								Trabalhamos para adequar o ambiente de trabalho às normas de
								saúde ocupacional, garantindo um local seguro e saudável para os
								colaboradores.
							</h3>
						</div>
					</Card>
				</div>
				<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-3">
					<Card
						title={<VisionTitle />}
						className="card shadow-5 hover:shadow-5 mx-auto border-round-3xl sm:border-3xl"
						style={{ height: '850px' }}>
						<div className="m-0">
							<h3 className="card-description text-left">
								Nossa visão é ser uma empresa reconhecida pela excelência na
								prestação de serviços.
								<br />
								<br />
								Oferecendo atendimento personalizado e soluções sob medida para
								cada cliente. Buscamos ser referência no mercado, superando as
								expectativas e atendendo às necessidades específicas de cada um.
							</h3>
						</div>
					</Card>
				</div>
				<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-3">
					<Card
						title={<ValuesTitle />}
						className="card shadow-5 hover:shadow-5 mx-auto border-round-3xl sm:border-3xl"
						style={{ height: '850px' }}>
						<div className="m-0">
							<h3 className="card-description text-left">
								Nosso trabalho é guiado por valores fundamentais, como ética,
								honestidade e integridade. Valorizamos a inovação e o dinamismo.
								<br />
								<br />
								Mantendo o foco no cliente em todas as nossas ações. Buscamos
								constantemente a excelência no atendimento, oferecendo serviços
								de qualidade e construindo relacionamentos duradouros com nossos
								clientes.
							</h3>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default QuemSomos;
