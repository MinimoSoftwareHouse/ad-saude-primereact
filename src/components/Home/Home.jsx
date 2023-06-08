import './Home.css';
import heroImg from '../../assets/heroImg.jpg';
import ServiçosCard from '../../components/ServiçosCard/ServiçosCard.jsx';

function Home() {
	return (
		<>
			<div className="hero-container">
				<div className="text-container">
					{/* <h1>O que fazemos?</h1>; */}
					<h2>Segurança do Trabalho e Medicina Ocupacional</h2>
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
