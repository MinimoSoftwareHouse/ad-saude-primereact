import './Home.css';
import heroImg from '../../assets/heroImg.jpg';
import ServiçosCard from '../../components/ServiçosCard/ServiçosCard.jsx';

function Home() {
	return (
		<>
			<div className="hero-container">
				<div className="text-container">
					<h2 className="overflow-hidden">
						Segurança do Trabalho e Medicina Ocupacional
					</h2>
				</div>
				<img
					className="hero-img"
					src={heroImg}
					alt="test"
				/>
			</div>
			<ServiçosCard />
		</>
	);
}

export default Home;
