import './Consultas.css';
import { Card } from 'primereact/card';

import Home from '../Home/Home.jsx';
import heroImg from '../../assets/heroImg6.jpg';

const Consultas = () => {
	const listItemData = ['Clínico geral', 'Ortopedista', 'Ginecologista'];

	return (
		<>
			<>
				<Home
					title="Consultas"
					heroImg={heroImg}
				/>
			</>
			<div className="grid justify-content-center align-itens-center mt-8 px-6">
				<div className="col-12">
					<h1 className="title p-overflow-hidden">Especialidades</h1>
				</div>
				{listItemData.map((item, index) => (
					<div
						className="col-12 sm:col-12 md:col-4 lg:col-4"
						key={index}>
						<Card className="training-card border-round border cursor-pointer hover:shadow-3">
							<p className="p-overflow-hidden">{item}</p>
						</Card>
					</div>
				))}
			</div>
		</>
	);
};
export default Consultas;
