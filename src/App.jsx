import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import QuemSomos from './components/QuemSomos/QuemSomos.jsx';
import Servicos from './components/Serviços/Serviços.jsx';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/quem-somos" element={ <QuemSomos /> }> </Route>
				<Route exact path="/serviços" element={ <Servicos /> }> </Route>
				{/* Carregar outros componentes aqui */}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
