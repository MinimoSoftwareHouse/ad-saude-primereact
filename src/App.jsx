import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar.jsx';
import QuemSomos from './components/QuemSomos/QuemSomos.jsx';
import heroImg from './assets/heroImg.jpg';
import Servicos from './components/Serviços/Serviços.jsx';
import Treinamentos from './components/Treinamentos/Treinamentos.jsx';
import Contato from './components/Contato/Contato';
import Obrigado from './components/Contato/Obrigado.jsx';
import Zap from './components/Whatsapp/Whatsapp';
import Exames from './components/Exames/Exames';
import Consultas from './components/Consultas/Consultas';
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<Home
								title="Segurança do Trabalho e Medicina Ocupacional"
								heroImg={heroImg}
								classNameOption="overflow-hidden"
								showServiçosCard={true}
							/>
						}
					/>

					<Route
						exact
						path="/quem-somos"
						element={<QuemSomos />}></Route>
					<Route
						exact
						path="/medicina-do-trabalho"
						element={<Servicos />}></Route>
					<Route
						exact
						path="/treinamentos"
						element={<Treinamentos />}></Route>
					<Route
						exact
						path="/contato"
						element={<Contato />}></Route>
					<Route
						exact
						path="/obrigado"
						element={<Obrigado />}></Route>
					<Route
						exact
						path="/consultas"
						element={<Consultas />}></Route>
					<Route
						exact
						path="/exames"
						element={<Exames />}></Route>
				</Routes>
				<Footer />
			</Router>
			<Zap />
		</>
	);
}

export default App;
