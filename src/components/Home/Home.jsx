import './Home.css';
import heroImg from '../../assets/heroImg.jpg';
import QuemSomos from '../../components/QuemSomos/QuemSomos.jsx';
import Serviços from '../../components/Serviços/Serviços.jsx';

function Home() {
	return (
		<>
			<div className="hero-container">
				<div className="text-container">
					<h1>O que fazemos?</h1>
					<h2>Segurança do Trabalho e Medicina Ocupacional</h2>
				</div>
				<img
					className="hero-img"
					src={heroImg}
					alt="test"
				/>
			</div>
			<QuemSomos />
		</>
	);
}

export default Home;
