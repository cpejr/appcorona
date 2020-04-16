import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="page-wrapper bg-gra-03">
                <div className="card card-5">
                    <div className="card-heading">
                        <h2 className="title1">
                            Bem Conectado
                        </h2>
                    </div>
                    <div className="gridInfo">
                            <div className="container">
                                <h2 className="subtitle">
                                    Quem somos?
                                </h2>
                                <img src="logo cpe - lampada.png" className="logo" alt="Logo"></img>
                                <h2 className="info1" lang="pt-br">
                                Somos a CPE - Consultoria e Projetos Elétricos, uma empresa júnior de Engenharias (Controle e Automação, 
                                Elétrica e Sistemas) da UFMG. A CPE é uma iniciativa sem fins lucrativos e que realiza projetos para 
                                incentivar o empreendedorismo no Brasil. Nosso corpo de membros é formado apenas por alunos que destes 
                                cursos. 
                                </h2>                                
                                <h2 className="info1" lang="pt-br">
                                A CPE participa o Movimento Empresa Júnior, que está presente em todo o Brasil e é composto por empresas 
                                dos mais variados cursos de graduação. Esse movimento é muito caracterizado pela conexão entre suas partes,
                                e que as empresas costumam realizar projetos em conjunto e compartilhar experiência entre si.
                                </h2>
                                
                                <h2 className="subtitle">
                                    COVID-19
                                </h2>
                                <h2 className="info1" lang="pt-br">
                                O Corona Vírus ou COVID-19 é uma doença extremamente contagiosa causada por um novo vírus e está espalhada 
                                em todo o mundo. A doença pode ser transmitida através de contato com partículas emitidas por infectados. 
                                Essas partículas podem ser expelidas através de aperto de mão, saliva, tosse, espirros ou superfícies 
                                contaminadas. Por isso, as formas de prevenção altamente recomendado até o momento são a utilização de 
                                máscaras e o distanciamento social. 
                                </h2>
                                <h2 className="info1" lang="pt-br">
                                Os principais sintomas desta doença são: tosse, febre alta, coriza, dor de garganta e dificuldades para respirar.
                                O quadro dos pacientes podem vir a se agravar, principalmente nos mais idosos, necessitando de atenção especial em 
                                leitos de hospitais. Entretanto, devido a limitação na infraestrutura dos hospitais brasileiros, é preciso dar foco 
                                para reduzir a transmissão do vírus para não sobrealocar as instalações dos centros médicos.
                                </h2>
                            </div>
                            <div className="container">
                                <h2 className="subtitle">
                                    O que é o Bem Conectado?
                                </h2>
                                <h2 className="info1" lang="pt-br">
                                Sabemos que nosso país, atualmente, enfrenta uma crise sem precedentes 
                                provocada pelo COVID-19. Nesse contexto, a solidariedade é fundamental para diminuir o impacto na 
                                população. Sabemos que já existem inúmeras iniciativas que estão movendo seus esforços para ajudar o 
                                próximo, oferecendo suporte às pessoas que estão sendo impactados por esta pandemia, como médicos, 
                                enfermeiros, familia que perderam suas fontes de renda, microempreendedores, etc. Porém, muitas vezes elas
                                acabam se perdendo na internet e não chegam nas pessoas que deveriam ser alcançadas. Assim, criamos essa 
                                plataforma para auxiliar a sua interação com diversas ONGs, facilitar a obtenção de informações sobre elas 
                                e incentivar o surgimento de novas.
                                </h2>

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
                        <div className="card-heading">
                        <h2 className="title1">
                            Consultoria e Projetos Elétricos Júnior
                        </h2>
                        <h2 className="info1">
                            Avenida Presidente Antônio Carlos, 6627, CPDEE, Campus Pampulha, Belo Horizonte
                        </h2>
                        <h2 className="info1">
                            Telefone: (31) 99651-3872
                        </h2>
                        </div>
                </div>
            </div>
    );
}