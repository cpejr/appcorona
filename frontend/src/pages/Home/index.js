import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="page-wrapper bg-gra-03 p-t-20 p-b-20">
            <div className="wrapper wrapper--w790">
                <div className="card card-5">
                    <div className="card-heading">
                        <h2 className="title1">
                            Seja bem vindo! Vamos ajudar?
                        </h2>
                    </div>
                        <div className="gridInfo">
                            <div className="container">
                                <h2 className="subtitle">
                                    O que somos?
                                </h2>
                                <img src="logo cpe - lampada.png" className="logo" alt="Logo"></img>
                                <h2 className="info1" lang="pt-br">
                                Somos a CPE - Consultoria e Projetos Elétricos, uma empresa junior de Engenharias (Controle e Automação; 
                                Elétrica e Sistemas) da UFMG. Sabemos que nosso país, atualmente, enfrenta uma crise sem precedentes 
                                provocada pelo COVID-19. Nesse contexto, a solidariedade é fundamental para diminuir o impacto na 
                                população. Assim, criamos essa plataforma para auxiliar a sua interação com diversas ONGs.
                                </h2>
                            </div>
                            <div className="container">
                                <h2 className="subtitle">
                                    Vamos colaborar?
                                </h2>
                                <h2 className="info1">
                                Aqui será possível encontrar iniciativas que contam com seu apoio! Você é muito importante nessa luta! 
                                Faça parte dela também!
                                </h2>

                               <div id="bttn"> 
                                    <Link className="btn1 btn--radius btn--blue m-2 mr-4" to="/list" type="submit">
                                        Ver lista
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}