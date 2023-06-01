import Serviços from './components/Serviços/Serviços.jsx';
import Treinamentos from './components/Treinamentos/Treinamentos.jsx';
import QuemSomos from './components/QuemSomos/QuemSomos.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
	return (
		<>
			<div className="app-container">
				<Treinamentos />
				<Treinamentos />
				<Treinamentos />
			</div>
			<Footer />
		</>
	);
}

export default App;
