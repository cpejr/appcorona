import React, {useState} from 'react';
import './styles.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';


export default function Register({ className, fileName, onSubmit }){
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCep] = useState('');
  const [complement, setComplement] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [picpay, setPicpay] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstsgram] = useState('');
  const [email, setEmail] = useState('');
  const [ddd, setDdd] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bank, setBank] = useState('');
  const [site, setSite] = useState('');
  const [branch, setBranch] = useState('');
  const [bankAccount,setBankAccount] = useState('');
  const history = useHistory();



  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeHandler = (evt) => {
    const file = evt.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    const data = new FormData();
    data.append('teste', selectedFile);
    onSubmit && onSubmit(data);
    !onSubmit && axios.post('http://localhost:3333/teste', data);
  };
  
  
  async function handleRegister(e) {
    e.preventDefault();

    let data = {};
    function addToData(key, value) {
      if (value !== undefined && value !== '')
        data[key] = value;
    }

    addToData('name', name);
    addToData('description', description);
    addToData('city', city);
    addToData('state', state);
    addToData('street', street);
    addToData('cep', cep);
    addToData('site', site);
    addToData('neighborhood', neighborhood);
    addToData('number', number);
    addToData('complement', complement);
    addToData('cnpj', cnpj);
    addToData('picpay', picpay);
    addToData('facebook', facebook);
    addToData('email', email);
    addToData('phoneNumber', phoneNumber);
    addToData('bank', bank);
    addToData('branch', branch);
    addToData('bankAccount',bankAccount);


    try {
      const response = await api.post('registerOng', data);
      alert(`Olá ${response.data.name}, seu cadastro foi realizado com sucesso`);
      history.push('/');
    } catch (err) {
      alert(`${err}`);
    }
  }



  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
    <div className="wrapper wrapper--w790">
        <div className="card card-5">
            <div className="card-heading">
               <h2 className="title">Cadastre a sua ONG abaixo</h2>
               <div id="bttn1">
                    <button
                        onClick={event => window.location.href = '/'}
                        className="btn3 btn--radius btn--blue"
                        type="submit">VOLTAR A PÁGINA INICIAL
                    </button>
                </div>
            </div>
            <div className="card-body">
                <form onSubmit={handleRegister}>

                    <div className="form-row">
                        <div className="name">Nome da Ong</div>
                        <div className="value">
                            <div className="input-group">
                                <input className="input--style-5" type="text" name="company"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="name">Descrição</div>
                        <div className="value">

                        <div className="description">
                          
                          <textarea 
                            className="form-control description" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-row m-b-55">
                        <div className="name">Local</div>
                        <div className="value">
                            <div className="row row-space">
                                <div className="col-6">
                                    <div className="input-group-desc">
                                        <input className="input--style-5" type="text"
                                            name="first_name"
                                            value={city}
                                            onChange={e => setCity(e.target.value)}
                                        />
                                        <label className="label--desc">Cidade</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="input-group-desc">


                                        <input className="input--style-5" type="text"
                                            name="last_name"
                                            value={state}
                                            onChange={e => setState(e.target.value)}
                                        />
                                        <label className="label--desc">Estado</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="name">CEP</div>
                        <div className="value">
                            <div className="input-group">
                                <input className="input--style-5" type="text"
                                    name="company"
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row m-b-55">
                        <div className="name">Endereço</div>
                        <div className="value">
                            <div className="row row-space">
                                <div className="col-6">
                                    <div className="input-group-desc">
                                        <input className="input--style-5" type="text"
                                            name="first_name"
                                            value={neighborhood}
                                            onChange={e => setNeighborhood(e.target.value)}
                                        />
                                        <label className="label--desc">Bairro</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="input-group-desc">


                                        <input className="input--style-5" type="text"
                                            name="last_name"
                                            value={street}
                                            onChange={e => setStreet(e.target.value)}
                                        />
                                        <label className="label--desc">Rua</label>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>

                    <div className="form-row m-b-55">
                        <div className="name"></div>
                        <div className="value">
                            <div className="row row-space">
                                <div className="col-6">
                                    <div className="input-group-desc">
                                        <input className="input--style-5" type="text"
                                            name="first_name"
                                            value={number}
                                            onChange={e => setNumber(e.target.value)}
                                        />
                                        <label className="label--desc">Número</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="input-group-desc">


                                        <input className="input--style-5" type="text"
                                            name="last_name"
                                            value={complement}
                                            onChange={e => setComplement(e.target.value)}
                                        />
                                        <label className="label--desc">Complemento</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="name">CNPJ</div>
                        <div className="value">
                            <div className="input-group">
                                <input className="input--style-5" type="text"
                                    name="company"
                                    value={cnpj}
                                    onChange={e => setCnpj(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="name">PICPAY</div>
                        <div className="value">
                            <div className="input-group">
                                <input className="input--style-5" type="text"
                                    name="company"
                                    value={picpay}
                                    onChange={e => setPicpay(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="name">Site</div>
                        <div className="value">
                            <div className="input-group">
                                <input className="input--style-5" type="text"
                                    name="company"
                                    value={site}
                                    onChange={e => setSite(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="name">Facebook</div>
                        <div className="value">
                            <div className="input-group">
                                <input className="input--style-5" type="text"
                                    name="company"
                                    value={facebook}
                                    onChange={e => setFacebook(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="name">Instagram</div>
                        <div className="value">
                            <div className="input-group">
                                <input className="input--style-5" type="text"
                                    name="company"
                                    value={instagram}
                                    onChange={e => setInstsgram(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="name">Email</div>
                        <div className="value">
                            <div className="input-group">
                                <input className="input--style-5" type="email"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row m-b-55">
                        <div className="name">Contato</div>
                        <div className="value">
                            <div className="row row-refine">
                                <div className="col-3">
                                    <div className="input-group-desc">
                                        <input className="input--style-5" type="text"
                                            name="ddd"
                                            value={ddd}
                                            onChange={e => setDdd(e.target.value)}
                                        />
                                        <label className="label--desc">DDD</label>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="input-group-desc">
                                        <input className="input--style-5" type="text"
                                            name="phone"
                                            value={phoneNumber}
                                            onChange={e => setPhoneNumber(e.target.value)}
                                        />
                                        <label className="label--desc">Telefone</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row m-b-55">
                        <div className="name">Dados bancarios</div>
                        <div className="value">
                            <div className="row row-space">
                                <div className="col-6">
                                    <div className="input-group-desc">
                                        <input className="input--style-5" type="text"
                                            name="first_name"
                                            value={bank}
                                            onChange={e => setBank(e.target.value)}
                                        />
                                        <label className="label--desc">Banco</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="input-group-desc">


                                        <input className="input--style-5" type="text"
                                            name="last_name"
                                            value={branch}
                                            onChange={e => setBranch(e.target.value)}
                                        />
                                        <label className="label--desc">Agência</label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row m-b-55">
                        <div className="name"></div>
                        <div className="value">
                            <div className="row row-space">
                                <div className="col-12">
                                    <div className="input-group-desc">
                                        <input className="input--style-5" type="text"
                                            name="bank_account"
                                            value={bankAccount}
                                            onChange={e => setBankAccount(e.target.value)}
                                        />
                                        <label className="label--desc">Número da Conta</label>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="file-container">
                        <div className="file-name">LOGO DA EMPRESA </div>

                          
                          <input
                            type="file"
                            name={fileName || 'teste'}
                            onChange={onChangeHandler}
                          />


                        <div className="btn-enviar-container">
                          <button className="btn btn--radius-2 btn btn-warning" type="submit" onClick={handleSubmit}>Enviar</button>
                        </div>
                    </div>

                 
                </form>
            </div>
        </div>
    </div>
</div>

  );
}


























                    