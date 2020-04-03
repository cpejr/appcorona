import React, { useState } from 'react';
import './styles.css';
import {Link,useHistory} from 'react-router-dom';
import api from '../../services/api';


export default function Register(){
  const [name,setName] = useState('');
  const [city,setCity] = useState('');
  const [state,setState] = useState('');
  const [street,setStreet] = useState('');
  const [neighborhood,setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [cnpj,setCnpj] = useState('');
  const [picpay,setPicpay] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram,setInstsgram] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [banco,setBanco] = useState('');
  const [site,setSite] = useState('');
  const [agencia,setAgencia] = useState('');
  const history = useHistory();


  async function handleRegister(e){
    e.preventDefault();
    const data = {
      name,
      city,
      state,
      neighborhood,
      number,
      complement,
      cnpj,
      picpay,
      facebook,
      instagram,
      email,
      phone,
      banco,
      agencia,
    };

    try{
      const response = await api.post('registerOng',data);
      alert(`Olá ${response.data.name}, seu cadastro foi realizado com sucesso`);
      history.push('/');
    }catch(err){
      alert(`${err}`);
      console.log(err);
      
    }

  }




  return(

    

  
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
          <div className="wrapper wrapper--w790">
              <div className="card card-5">
                  <div className="card-heading">
                      <h2 className="title">Cadastre a sua ONG abaixo</h2>
                  </div>
                  <div className="card-body">
                  <form onSubmit={handleRegister}>
                        <div className="form-row">
                          <div className="name">Nome da Ong</div>
                            <div className="value">
                              <div className="input-group">
                              <input className="input--style-5" type="text" name="company"
                                  value={name} 
                                  onChange={e=>setName(e.target.value)}
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
                                                value = {city}
                                                onChange={e=>setCity(e.target.value)}
                                              />
                                              <label className="label--desc">Cidade</label>
                                          </div>
                                      </div>
                                      <div className="col-6">
                                          <div className="input-group-desc">
                                  

                                              <input className="input--style-5" type="text" 
                                                name="last_name"
                                                value = {state}
                                                onChange =  {e=>setState(e.target.value)}
                                              />
                                              <label className="label--desc">Estado</label>
                                          </div>
                                      </div>
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
                                                onChange = {e=>setNeighborhood(e.target.value)}                                                                                                                                                                    
                                              />
                                              <label className="label--desc">Bairro</label>
                                          </div>
                                      </div>
                                      <div className="col-6">
                                          <div className="input-group-desc">
                                  

                                              <input className="input--style-5" type="text"
                                                name="last_name"
                                                value={street}
                                                onChange = {e=>setStreet(e.target.value)                                                                                                                                                                       }
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
                                                onChange=  {e=>setNumber(e.target.value)}
                                              />
                                              <label className="label--desc">Número</label>
                                          </div>
                                      </div>
                                      <div className="col-6">
                                          <div className="input-group-desc">
                                  

                                              <input className="input--style-5" type="text" 
                                                name="last_name"
                                                value = {complement}
                                                onChange = {e=>setComplement(e.target.value)}
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
                                        value = {cnpj}
                                        onChange = {e=>setCnpj(e.target.value)}
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
                                        onChange = {e=>setPicpay(e.target.value)}  
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
                                        onChange = {e=>setSite(e.target.value)}  
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
                                        onChange={e=>setFacebook(e.target.value)}
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
                                        onChange = {e=>setInstsgram(e.target.value)}
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
                                        value = {email}
                                        onChange = {e=>setEmail(e.target.value)}
                                      />
                                  </div>
                              </div>
                          </div>
                          <div className="form-row m-b-55">
                              <div className="name">Contato</div>
                              <div className="value">
                                  <div className="row row-refine">
                                      <div className="col-9">
                                          <div className="input-group-desc">
                                              <input className="input--style-5" type="text" 
                                                name="phone"
                                                value ={phone}
                                                onChange = {e=>setPhone(e.target.value)}
                                              />
                                              <label className="label--desc">Telefone com DDD</label>
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
                                                value = {banco}
                                                onChange = {e=>setBanco(e.target.value)}
                                              />
                                              <label className="label--desc">Banco</label>
                                          </div>
                                      </div>
                                      <div className="col-6">
                                          <div className="input-group-desc">
                                  

                                              <input className="input--style-5" type="text" 
                                                name="last_name"
                                                value = {agencia}
                                                onChange = {e=>setAgencia(e.target.value)}
                                              />
                                              <label className="label--desc">Agência</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div>
                           
                            <button className="btn btn--radius-2 btn btn-warning" type="submit">Register</button>
                                                      
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    
      
  );
}
