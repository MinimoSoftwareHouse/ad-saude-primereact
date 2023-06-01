import './Navbar.css';
import Logo from '../../assets/companyLogo.png';
import { Button } from 'primereact/button';
        

export default function Navbar() {
	return (
        <>
            <nav className="nav w-full grid justify-content-between align-content-between align-items-center m-0">
                
                <div className="col-6 md:col-2 flex justify-content-center">
                    <img src={Logo} alt="Company Logo"  />
                </div>
                                
                <div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
                    <a href="#" className='nav-item'>Home</a>
                </div>
                <div className="col-12 md:col-2 sm:col-3 flex justify-content-center">
                    <a href="#" className='nav-item'>Quem somos</a>
                </div>
                <div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
                    <a href="#" className='nav-item'>Serviços</a>
                </div>
                <div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
                    <a href="#" className='nav-item'>Contato</a>
                </div>
                <div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
                    <a href="#" className='nav-item'>E-social</a>
                </div>
                <div className="col-12 md:col-1 sm:col-3 flex justify-content-center">
                    <a href="#" className='nav-item'>Blog</a>
                </div>
                <div className="h-full col-12 md:col-2 sm:col-6 flex align-content-center align-itens-center justify-content-center pt-5">
                    <Button label='Solicitar Orçamento' severity="success" className='nav-item' size='small'/>
                </div>
            </nav>
		</>
	);
}
