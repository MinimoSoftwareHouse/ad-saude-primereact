import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar.jsx';
import QuemSomos from './components/QuemSomos/QuemSomos.jsx';
import Servicos from './components/Serviços/Serviços.jsx';
import Treinamentos from './components/Treinamentos/Treinamentos.jsx';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route
						exact
						path="/quem-somos"
						element={<QuemSomos />}></Route>
					<Route
						exact
						path="/servicos"
						element={<Servicos />}></Route>
					<Route
						exact
						path="/treinamentos"
						element={<Treinamentos />}></Route>
				</Routes>
				<Home />
				<Footer />
			</Router>
		</>
	);
}

export default App;
