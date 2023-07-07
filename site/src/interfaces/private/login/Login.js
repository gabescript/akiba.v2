import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

//Import do API Context
import { ApiAddress } from '../../../contexts/ApiAddress';

//Import de assets
import login from './Login.module.css';
import Logo from '../../../assets/img/img/logo.webp';

export default function Login(){
    //Muda o titulo da página
    document.title = "Realize o login | AkibaHub";

    //useStates do alerta de esqueci e errei o usuário ou senha
    const [esqueci, setEsqueci] = React.useState(false);
    const [error, setError] = React.useState(false);

    //Função que dispara o alerta quando o usuário clica que esqueceu usuário e/ou senha
    const DisparadorEsqueci = ()=>{
        setEsqueci(true);
        setTimeout(()=>{
            setEsqueci(false);
        }, 4*1000);
    }

    //Função que controla os alertas
    const Alertas = (props)=>{
        React.useEffect(()=>{
            $('#login-alerta').fadeIn();
            setTimeout(()=>{
                $('#login-alerta').fadeOut();
            }, 3*1000);
        });

        switch(props.method){
            case 'esqueci':
                return(
                    <div id='login-alerta' className={`${login.alerta} mt-1 radius-5`}>
                        Procure a administração da Akiba
                    </div>
                );
            case 'error':
                return(
                    <div id='login-alerta' style={{backgroundColor: "#ff2e2e"}} className={`${login.alerta} mt-1 radius-5`}>
                        <strong>Error!</strong> Usuário e/ou senha incorreto(s)!
                    </div>
                );
            default:
        }
    }

    //Requisição assincrona para fazer o login
    const navigate = useNavigate(); // Obtém a função navigate
    const { api } = React.useContext(ApiAddress);
    const [usuario, setUsuario] = React.useState();
    const [senha, setSenha] = React.useState();

    function RequisicaoLogin(event) {
        event.preventDefault();

        axios.post(`${api}=login`, {
            usuario: usuario,
            senha: senha
          })
          .then(function (response) {
            const data = response.data;
            if(data.status === "true"){
                sessionStorage.setItem('Akiba login status', data.status);
                sessionStorage.setItem('Akiba login usuário', data.usuario);
                navigate('/painel/dashboard'); // Redireciona para '/painel/dashboard'
            }else{
                console.log(response.data)
                setError(true)
                setTimeout(()=>{
                    setError(false);
                }, 4*1000);
            }
          })
          .catch(function (error) {
            console.error(error);
          });
    }

    return(
        <>
            <div className={login.background}></div>
            <div className="container">
                <div className="row d-flex justify-content-center align-itens-center vh-100">
                    <div className="col-5">
                        <section className={login.login}>
                            <div className="d-flex justify-content-center">
                                <img className={login.logo} src={Logo} alt="logomarca"/>    
                            </div>
                            <strong className={`${login.mensagem} mt-1 d-block`}>Faça login para acessar sua conta</strong>
                            <div className="d-flex justify-content-center mt-1">
                                <form className={login.form} onSubmit={RequisicaoLogin}>
                                    <fieldset className={login.formGrupo}>
                                        <input onChange={(e)=>setUsuario(e.target.value)} type="text" id="usuario" name="usuario" aria-label="usuário" placeholder="Usuário" required/>
                                        <input onChange={(e)=>setSenha(e.target.value)} type="password" id="senha" name="senha" aria-label="senha" placeholder="Senha" required/>
                                        <button className="radius-5 mt-1 cursor" type="submit">Login</button>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="d-flex justify-content-center mt-1">
                                <button onClick={DisparadorEsqueci} className={`${login.esqueci} cursor`}>Esqueceu seu usuário e/ou senha?</button>
                            </div>
                            {esqueci && <Alertas method="esqueci"/>}
                            {error && <Alertas method="error"/>}
                            <footer className={`${login.rodape} mt-1`}>
                                <strong>AkibaHub</strong> - Versão 1.0<br/>
                                Rede Akiba - O Paraíso dos Otakus
                            </footer>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}