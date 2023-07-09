import React from "react";
import { Outlet, Link } from "react-router-dom";
import $ from 'jquery';

import sys from "./Sys.module.css";

import Logomarca from "../../../assets/img/img/logo.webp";
import LogoMinificada from "../../../assets/img/img/logominificada.webp";
import DashboardIcone from "../../../assets/img/svg/nav/dashboard.svg";
import MateriasIcone from "../../../assets/img/svg/nav/materias.svg";
import LocucaoIcone from "../../../assets/img/svg/nav/locucao.svg";
import RadioIcone from "../../../assets/img/svg/nav/radio.svg";
import PodcastIcone from "../../../assets/img/svg/nav/podcast.svg";
import MarketingIcone from "../../../assets/img/svg/nav/marketing.svg";
import AdmsIcone from "../../../assets/img/svg/nav/adms.svg";
import LogsIcone from "../../../assets/img/svg/nav/logs.svg";
import PerfilIcone from "../../../assets/img/svg/nav/perfil.svg";


export default function Sys(){
    document.body.style.backgroundColor = "#0e1139";

    const Navbar = ()=>{
        $('#toggle').on('click', ()=>{
            if($('#navbar').height() === 44.8){
                $('#navbar').animate({
                    height: '25.908rem'
                }, 300);
            }else{
                $('#navbar').animate({
                    height: '3.5rem'
                }, 300);
            }
            
            $('.item').on('click', ()=>{
                $('#navbar').animate({
                    height: '3.5rem'
                }, 300);
            });
        });
    }

    React.useEffect(()=>{
        Navbar();
    });

    return(
        <>
            <nav id="navbar" className={sys.navbar}>
                <div className="container">
                    <div className={sys.marca}>
                        <img className={sys.logo} src={LogoMinificada} alt="logomarca"/>
                        <button id="toggle" className={sys.toggle}><i className="bi bi-list"></i></button>
                    </div>
                    <ul className={`${sys.lista} d-flex justify-content-center gap-1`}>
                        <li className={`${sys.item} item`}>
                            <Link className={sys.link} to="#"><img src={DashboardIcone} alt="icone dashboard"/>&nbsp;Dashboard</Link>
                        </li>
                        <li className={`${sys.item} item`}>
                            <Link className={sys.link} to="#"><img src={MateriasIcone} alt="icone matérias"/>&nbsp;Matérias</Link>
                        </li>
                        <li className={`${sys.item} item`}>
                            <Link className={sys.link} to="#"><img src={LocucaoIcone} alt="icone locução"/>&nbsp;Locução</Link>
                        </li>
                        <li className={`${sys.item} item`}>
                            <Link className={sys.link} to="#"><img src={RadioIcone} alt="icone rádio"/>&nbsp;Rádio</Link>
                        </li>
                        <li className={`${sys.item} item`}>
                            <Link className={sys.link} to="#"><img src={PodcastIcone} alt="icone podcasts"/>&nbsp;Podcasts</Link>
                        </li>
                        <li className={`${sys.item} item`}>
                            <Link className={sys.link} to="#"><img src={MarketingIcone} alt="icone marketing"/>&nbsp;Marketing</Link>
                        </li>
                        <li className={`${sys.item} item`}>
                            <Link className={sys.link} to="#"><img src={AdmsIcone} alt="icone adms"/>&nbsp;Adm's</Link>
                        </li>
                        <li className={`${sys.item} item`}>
                            <Link className={sys.link} to="#"><img src={LogsIcone} alt="icone logs"/>&nbsp;Logs</Link>
                        </li>
                        <li className={`${sys.item} item`}>
                            <Link className={sys.link} to="#"><img src={PerfilIcone} alt="icone perfil"/>&nbsp;Perfil</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <Outlet/>
            </div>
            <footer className={`${sys.rodape} d-flex justify-content-center wrap`}>
                <img src={Logomarca} alt="logomarca"/>
                <p>
                    <strong>AkibaHub</strong> - Versão 1.0<br/>
                    Rede Akiba - O Paraíso dos Otakus
                </p>
            </footer>
        </>
    );
}