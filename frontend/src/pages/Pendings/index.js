import React from 'react';
import './styles.css';
import ong from "./ong.png"

export default function Pendings() {
    return (
        <div>
            <h1 class="pendingsTitle">ONGs pendentes</h1>
            <div class="gridCard">
                <div class="ONGgrid">
                    <div class="ONGcard">
                        <div class="container">
                            <img src={ong} alt="Foto da ONG" />
                            <div class="forms-row">
                                <div class="name">Nome da ONG:</div>
                                <div class="style-5">NOME DO BANCO</div>
                            </div>
                            <div class="info">Descrição da ONG:</div>
                            <div class="info">Cidade:</div>
                            <div class="info">Estado:</div>
                            <div class="info">Bairro:</div>
                            <div class="info">Rua:</div>
                            <div class="info">Número:</div>
                            <div class="info">Complemento:</div>
                            <div class="info">CNPJ:</div>
                            <div class="info">PicPay:</div>
                            <div class="info">Facebook:</div>
                            <div class="info">Instagram:</div>
                            <div class="info">Email:</div>
                            <div class="info">DDD:</div>
                            <div class="info">Telefone:</div>
                            <div class="col-5">
                                <div class="info">Banco:</div>
                                <div class="info">Agência:</div>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="ONGgrid">
                    <div class="ONGcard">
                        <div class="container">
                            <img src={ong} alt="Foto da ONG" />
                            <div class="name">Nome da ONG:</div>
                            <div class="info">Descrição da ONG:</div>
                            <div class="info">Cidade:</div>
                            <div class="info">Estado:</div>
                            <div class="info">Bairro:</div>
                            <div class="info">Rua:</div>
                            <div class="info">Número:</div>
                            <div class="info">Complemento:</div>
                            <div class="info">CNPJ:</div>
                            <div class="info">PicPay:</div>
                            <div class="info">Facebook:</div>
                            <div class="info">Instagram:</div>
                            <div class="info">Email:</div>
                            <div class="info">DDD:</div>
                            <div class="info">Telefone:</div>

                            <div class="col-5">
                                <div class="info">Banco:</div>
                                <div class="info">Agência:</div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>




    );
}