import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import QuemSomos from './components/QuemSomos/QuemSomos.jsx';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/quem-somos" element={ <QuemSomos /> }> </Route>
				{/* <Route exact path="/" element={<Navbar />}> </Route> */}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
