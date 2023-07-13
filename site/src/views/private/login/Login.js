import React from 'react'
import $ from 'jquery'

import login from './Login.module.css'
import Logo from '../../../assets/img/img/logo.webp'

export default function Login(){

    document.title = "Realize o login | AkibaHub"

    const [alerta, setAlerta] = React.useState(false)

    React.useEffect(function(){
        //Alerta caso o usuário clique no botão que esqueceu o usuário ou senha
        if(alerta === true){
            AlertaEsqueci()
        }
    })
    
    //---Alerta caso o usuário clique no botão que esqueceu o usuário ou senha---
    function DisparadorAlertaEsqueci(){
        setAlerta(true)
        setTimeout(function(){ setAlerta(false) }, 4*1000)
    }

    function AlertaEsqueci(){
        $("#alerta").fadeIn()
        setTimeout(function(){ $("#alerta").fadeOut() }, 3*1000)
        return(
            <div id="alerta" className={login.alerta}>
                <strong>Erro!</strong> Email e/ou senha incorreto(s)!
            </div>
        )
    }

    return(
        <>
            <div className={login.background}></div>
            <div className="container">
                <div className={`${login.row} row`}>
                    <div className="col-5">
                        <section className={login.login}>
                            <div className={login.logo}>
                                <img src={Logo} alt="logomarca"/>
                            </div>
                            <strong className={login.mensagem}>Faça login para acessar sua conta</strong>
                            <div className={login.formulario}>
                                <form>
                                    <fieldset>
                                        <input type="email" aria-label="email" placeholder="Email" required/>
                                        <input type="password" aria-label="senha" placeholder="Senha" required/>
                                        <button type="submit">Login</button>
                                    </fieldset>
                                </form>
                            </div>
                            <div className={login.esqueci}>
                                <button onClick={DisparadorAlertaEsqueci}>Problemas ao fazer login?</button>
                            </div>
                            {alerta && <AlertaEsqueci/>}
                            <footer className={login.footer}>
                                AkibaHub - Versão 1.0<br/>
                                Rede Akiba - O Paraíso dos Otakus
                            </footer>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}