import React from 'react';
import './styles.css';


export default function AllPendings() {
    return (
        <div>
            <div className="allPendingsTitle">ONGs pendentes</div>
            <div className="gridCard">
                <div className="ONGrid">
                    <div className="ONGcard1">
                        <div className="container">
                            <img src="ong.png" alt="Foto da ONG" />
                            <div className="forms-row">
                                <div className="name">Nome da ONG/Projeto: </div>
                                <div className="info style-5">Nome que vem do banco</div>
                            </div>
                            <div className="forms-row">
                                <div className="info">Descrição da ONG:</div>
                                <div className="info style-5">Descrição que vem do banco</div>
                            </div>
                            <div className="forms-row grid">
                                <div className="info m-rg-20">Cidade:
                                <div className="style-5">Cidade</div>
                                </div>
                                <div className="info m-lt-20">Estado:
                                <div className="style-5">Estado</div>
                                </div>
                            </div>
                            <div id="bttn">
                                <button 
                                onClick={event => window.location.href='/pendings'}
                                className="btn2 btn--blue btn--radius" 
                                type="submit">ANALISAR APROVAÇÃO</button>
                            </div>
                        </div>
                    </div>                    
                </div>

                <div className="ONGgrid">
                    <div className="ONGcard1">
                        <div className="container">
                            <img src="ong.png" alt="Foto da ONG" />
                            <div className="forms-row">
                                <div className="name">Nome da ONG/Projeto: </div>
                                <div className="info style-5">Nome que vem do banco</div>
                            </div>
                            <div className="forms-row">
                                <div className="info">Descrição da ONG:</div>
                                <div className="info style-5">Descrição que vem do banco</div>
                            </div>
                            <div className="forms-row grid">
                                <div className="info m-rg-20">Cidade:
                                <div className="style-5">Cidade</div>
                                </div>
                                <div className="info m-lt-20">Estado:
                                <div className="style-5">Estado</div>
                                </div>
                            </div>
                            <div id="bttn">
                                <button 
                                    onClick={event => window.location.href='/pendings'}
                                    className="btn2 btn--blue btn--radius" 
                                    type="submit">ANALISAR APROVAÇÃO
                                    </button>
                            </div>
                        </div>
                    </div>                    
                </div>

            </div>
                    <div id="bttn">
                     <button 
                        onClick={event => window.location.href='/list'}
                        className="btn1 btn--radius btn--blue"
                        type="submit">VOLTAR A PÁGINA INICIAL
                     </button>
                     </div>
        </div>




    );
}