import './Whatsapp.css'

export default function zap(){
    return (
        <div>
            <a 
                href="https://wa.me/5591986018137?text= Olá! Gostaria de mais informações sobre serviços/valores"
                className='zap flex justify-content-center align-items-center' 
                target="blank">
                <i className='pi pi-whatsapp text-4xl'></i>
            </a>
        </div>
    )
}