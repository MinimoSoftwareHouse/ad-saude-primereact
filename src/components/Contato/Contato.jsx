import './Contato.css';

export default function Contato(){
    return (
        <div className="container_form">
            <h1 className="title_contato"><i className="icon icon-file-text-o"></i> Fale Conosco</h1>

            <form method="post">

                <div className="style-form-input full">
                    <input type="text" name="nome" required />
                    <label><i className="icon icon-user-1"></i>  Nome</label> 
                </div>

                
                <div className="style-form-input">
                    <input type="text" name="email" required />
                    <label><i className="icon icon-mail-1"></i> E-mail</label> 
                </div>

                
                <div className="style-form-input right">
                    <input type="text" name="assunto" required />
                    <label><i className="icon icon-info-circled"></i> Assunto</label> 
                </div>

                
                <div className="style-form-input full">
                    <textarea name="mensagem" required></textarea>
                    <label><i className="icon icon-comments"></i> Mensagem</label>
                </div>


                <div className="style-form-input full">

                    <input type="hidden" name="acao" value="enviar" />
                    <button className="btn-submit">Enviar mensagem</button>
                
                </div>

            </form>

        </div>
    )
}