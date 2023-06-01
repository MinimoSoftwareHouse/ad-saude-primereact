import './Navbar.css';
import Logo from '../../assets/companyLogo.png';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
        <>
            <nav className="nav w-full grid justify-content-between align-content-between align-items-center m-0">
                
                <div className="col-6 md:col-2 flex justify-content-center">
                    <img src={Logo} alt="Company Logo"  />
                </div>
                                
                <div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
                    <Link to="/" className='nav-item'>Home</Link>
                </div>
                <div className="col-12 md:col-2 sm:col-3 flex justify-content-center">
                    <Link to="/quem-somos" className='nav-item'>Quem somos</Link>
                </div>
                <div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
                    <Link to="/serviços" className='nav-item'>Serviços</Link>
                </div>
                <div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
                    <Link to="/contato" className='nav-item'>Contato</Link>
                </div>
                <div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
                    <Link to="/e-social" className='nav-item'>E-social</Link>
                </div>
                <div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
                    <Link to="/blog" className='nav-item'>Blog</Link>
                </div>
                <div className="h-full col-12 md:col-2 sm:col-6 flex align-content-center align-itens-center justify-content-center pt-5">
                    <Button label='Solicitar Orçamento' severity="success" className='nav-item' size='small'/>
                </div>
            </nav>
		</>
	);
}
