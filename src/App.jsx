import Serviços from './components/Serviços/Serviços.jsx';
import Treinamentos from './components/Treinamentos/Treinamentos.jsx';
import QuemSomos from './components/QuemSomos/QuemSomos.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';
import './App.css';

function App() {
	return (
		<>
			<div className="app-container">
				<QuemSomos />
			</div>
			<Footer />
		</>
	);
}

export default App;
