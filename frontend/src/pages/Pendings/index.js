import React from 'react';
import './styles.css';


export default function Pendings() {
    return (
        <div>
            <div className="ONGcard">
                <h1 className="pendingsTitle">ONG PENDENTE</h1>
                <div className="container">
                    <img src="ong.png" alt="Foto da ONG" />
                    <div className="forms-row">
                        <div className="name">Nome da ONG/Projeto: </div>
                        <div className="style-5">Nome que vem do banco</div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Descrição da ONG:</div>
                        <div className="style-5">Descrição que vem do banco</div>
                    </div>
                    <div className="forms-row grid">
                        <div className="info m-rg-45">Cidade:
                                <div className="style-5">Cidade</div>
                        </div>
                        <div className="info">Estado:
                                <div className="style-5">Estado</div>
                        </div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Bairro:</div>
                        <div className="style-5">Descrição que vem do banco</div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Rua/Avenida:</div>
                        <div className="style-5">Descrição que vem do banco</div>
                    </div>
                    <div className="forms-row">
                        <div className="info m-rg-45">Número:
                                <div className="style-5">Número</div>
                        </div>
                        <div className="info m-rg-45">Complemento:
                                    <div className="style-5">Complemento</div>
                        </div>
                        <div className="info m-rg-45">CEP:
                                    <div className="style-5">00000-000</div>
                        </div>
                        <div className="info">CNPJ:
                            <div className="style-5">Descrição que vem do banco</div>
                        </div>
                    </div>
                    <div className="forms-row">
                        <div className="info m-rg-45">PicPay:
                        <div className="style-5">Descrição que vem do banco</div>
                        </div>
                        <div className="info">Facebook:
                        <div className="style-5">Descrição que vem do banco</div>
                        </div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Instagram:</div>
                        <div className="style-5">Descrição que vem do banco</div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Email:</div>
                        <div className="style-5">Email</div>
                    </div>
                    <div className="forms-row">
                        <div className="info m-rg-45">DDD:
                                    <div className="style-5">DDD</div>
                        </div>
                        <div className="info">Telefone:
                                    <div className="style-5">Telefone</div>
                        </div>
                    </div>
                    <div className="forms-row">
                        <div className="info m-rg-45">Banco:
                                        <div className="style-5">Banco</div>
                        </div>
                        <div className="info">Agência:
                                    <div className="style-5">Agência</div></div>

                    </div>
                    <div id="bttn">
                    <button className="btn1 btn--green btn--radius m-rg-45" type="submit">APROVAR</button>
                    <button className="btn1 btn--red btn--radius" type="submit">REJEITAR</button>
                   </div>

                </div>


               
            </div>
        </div>




    );
}