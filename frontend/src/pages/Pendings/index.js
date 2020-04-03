import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';


export default function Pendings() {
    let ongs = []
    [currentOng, setOng] = useState(0)

    useEffect(async ()=>{
        try {ongs = await api.get('admin')}
        catch(err) {
            //handle error
        }

    },[])

    function handleNext() {
        if (currentOng<ongs.length-1){
            setOng(currentOng++);
            return
        }
        else 
            return
    }

    function handlePrev(){
        if (currentOng!=0){
            setOng(currentOng--);
            return
        }
        else 
            return
    }

    function handleApprove(e){
        e.preventDefault()
        let rota = 'admin/$(ongs[currentOng]._id)';
        try {ongs = await api.post('admin/$(ongs[currentOng]._id)', "approved: true")}
        catch(err){
            alert("Erro");
        }
    }

    function handleReject(e){
        e.preventDefault()
        let rota = 'admin/$(ongs[currentOng]._id)';
        try {ongs = await api.delete('admin/$(ongs[currentOng]._id)')}
        catch(err){
            alert("Erro");
        }
    }

    return (
        <div>
            <div className="ONGcard">
                <h1 className="pendingsTitle">ONG PENDENTE</h1>
                <div className="container">
                    <img src="ong.png" alt="Foto da ONG" />
                    <div className="forms-row">
                        <div className="name">Nome da ONG/Projeto: </div>
                        <div className="style-5">{ongs[currentOng].name}</div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Descrição da ONG:</div>
                        <div className="style-5">{ongs[currentOng].description}</div>
                    </div>
                    <div className="forms-row grid">
                        <div className="info m-rg-45">Cidade:
                                <div className="style-5">{ongs[currentOng].city}</div>
                        </div>
                        <div className="info">Estado:
                                <div className="style-5">{ongs[currentOng].state}</div>
                        </div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Bairro:</div>
                        <div className="style-5">{ongs[currentOng].neighborhood}</div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Rua/Avenida:</div>
                        <div className="style-5">{ongs[currentOng].street}</div>
                    </div>
                    <div className="forms-row">
                        <div className="info m-rg-45">Número:
                                <div className="style-5">{ongs[currentOng].number}</div>
                        </div>
                        <div className="info m-rg-45">Complemento:
                                    <div className="style-5">{ongs[currentOng].complement}</div>
                        </div>
                        <div className="info m-rg-45">CEP:
                                    <div className="style-5">{ongs[currentOng].CEP}</div>
                        </div>
                        <div className="info">CNPJ:
                            <div className="style-5">{ongs[currentOng].cnpj}</div>
                        </div>
                    </div>
                    <div className="forms-row">
                        <div className="info m-rg-45">PicPay:
                        <div className="style-5">{ongs[currentOng].picpay}</div>
                        </div>
                        <div className="info">Facebook:
                        <div className="style-5">{ongs[currentOng].facebook}</div>
                        </div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Instagram:</div>
                        <div className="style-5">{ongs[currentOng].instagram}</div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Email:</div>
                        <div className="style-5">{ongs[currentOng].email}</div>
                    </div>
                    <div className="forms-row">
                        <div className="info m-rg-45">DDD:
                            <div className="style-5">{ongs[currentOng].ddd}</div>
                        </div>
                        <div className="info">Telefone:
                            <div className="style-5">{ongs[currentOng].phoneNumber}</div>
                        </div>
                    </div>
                    <div className="forms-row">
                        <div className="info m-rg-45">Banco:
                            <div className="style-5">{ongs[currentOng].bank}</div>
                        </div>
                        <div className="info">Agência:
                            <div className="style-5">{ongs[currentOng].agency}</div>
                        </div>

                    </div>
                    <div id="bttn">
                    <button className="btn1 btn--green btn--radius m-rg-45" onclick={handleApprove}>APROVAR</button>
                    <button className="btn1 btn--red btn--radius" onclick={handleReject}>REJEITAR</button>
                   </div>

                </div>


               
            </div>
        </div>




    );
}