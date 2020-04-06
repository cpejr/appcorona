import React from 'react';
import './styles.css';

const ongfake = {
    name: 'Vinícius Doador Lindao',
    cnpj: '1111111110202022',
    state: 'Minas Gerais',
    description: 'dgsagsfgfsg gsanoafjsibadsji basflmasfoaob asfjaosi jalfdkajf jdanalfa aonjao dgjoifaj fwniefiwenf niefwjiwe ijfweifwi sofjosifjdio jf adjof aid aj fa di dajifja oajif a jaidfj aaijfoiaj f baosfoasjijans fsovijasovis bfisobjsafo',
    city: 'Belo Horizonte',
    neighborhood: 'Timirim',
    street: 'José Rodrigues Menezes',
    cep: '35160-000',
    number: '15',
    complement: '102',
    ddd: '31',
    instagram: '@vcmmor4is',
    picpay: '@vcmmor4is',
    whatsapp: '31983507978',
    facebook: 'www.facebook.com/vadfaeijda',
    email: 'vcm1105@gmail.com',
    site: 'www.meusite.com.br',
    agencia: '4582',
    banco: 'Santander',

};

export default function Pendings() {
    return (
        <div>
            <div className="ONGcard">
                <h1 className="pendingsTitle">ONG PENDENTE</h1>
                <div className="container">
                    <img src="ong.png" alt="Foto da ONG" />
                    <div className="forms-row">
                        <div className="name">Nome da ONG/Projeto: </div>
                        <div className="info style-5">{ongfake.name}</div>
                    </div>
                    <div className="forms-row">
                        <div className="info">Descrição da ONG:</div>
                        <div className="info style-5">{ongfake.description}</div>
                    </div>
                    <div className="forms-row grid">
                        <div className="info m-rg-20">Cidade:
                                <div className="style-5">{ongfake.city}</div>
                        </div>
                        <div className="info m-lt-20">Estado:
                                <div className="style-5">{ongfake.state}</div>
                        </div>
                    </div>
                    <div className="forms-row grid">
                        <div className="info m-rg-20">Bairro:
                        <div className="style-5">{ongfake.neighborhood}</div>
                        </div>
                        <div className="info m-lt-20">Rua/Avenida:
                        <div className="style-5">{ongfake.street}</div>
                        </div>
                    </div>
                    <div className="forms-row grid">
                        <div className="info m-rg-20">Número:
                             <div className="style-5">{ongfake.number}</div>
                        </div>
                        <div className="info m-lt-20">Complemento:
                                    <div className="style-5">{ongfake.complement}</div>
                        </div>
                    </div>
                    <div className="forms-row grid">
                        <div className="info m-rg-20">CEP:
                                    <div className="style-5">{ongfake.cep}</div>
                        </div>
                        <div className="info m-lt-20">CNPJ:
                            <div className="style-5">{ongfake.cnpj}</div>
                        </div>
                    </div>
                    <div className="forms-row grid">
                        <div className="info m-rg-20">Facebook:
                            <div className="style-5">{ongfake.facebook}</div>
                        </div>
                        <div className="info m-lt-20">Instagram:
                            <div className="style-5">{ongfake.instagram}</div>
                        </div>
                    </div>
                    <div className="forms-row grid">
                        <div className="info m-rg-20">PicPay:
                            <div className="style-5">{ongfake.picpay}</div>
                        </div>
                        <div className="info m-lt-20">E-mail:
                            <div className="style-5">{ongfake.email}</div>
                        </div>
                    </div>
                    <div className="forms-row grid">
                        <div className="info m-rg-20">DDD:
                                    <div className="style-5">{ongfake.ddd}</div>
                        </div>
                        <div className="info m-lt-20">Telefone:
                                    <div className="style-5">Telefone</div>
                        </div>
                    </div>
                    <div className="forms-row grid">
                        <div className="info m-rg-20">Banco:
                                        <div className="style-5">Banco</div>
                        </div>
                        <div className="info m-lt-20">Agência:
                                    <div className="style-5">Agência</div></div>

                    </div>
                    <div id="bttn">
                        <button
                            onClick={event => window.location.href='/allpendings'} 
                            className="btn1 btn--green btn--radius m-rg-20"
                            type="submit">APROVAR
                        </button>
                        <button 
                        onClick={event => window.location.href='/allpendings'}
                        className="btn1 btn--red btn--radius m-lt-20" 
                        type="submit">REJEITAR</button>
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
        </div>
    );
}