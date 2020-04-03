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
      const response = await api.post('ongs',data);
      alert(`Olá ${response.data.name}, seu cadastro foi realizado com sucesso`);
      history.push('/');
    }catch(err){
      alert('Erro no cadastro, tente novamente');
    }

  }





  return(

    <form onSubmit={handleRegister}>

  
      <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
          <div class="wrapper wrapper--w790">
              <div class="card card-5">
                  <div class="card-heading">
                      <h2 class="title">Cadastre a sua ONG abaixo</h2>
                  </div>
                  <div class="card-body">
                      <form method="POST">
                        <div class="form-row">
                          <div class="name">Nome da Ong</div>
                            <div class="value">
                              <div class="input-group">
                              <input class="input--style-5" type="text" name="company"
                                  value={name} 
                                  onChange={e=>setName(e.target.value)}
                              />
                              </div>
                            </div>
                        </div>
                          <div class="form-row m-b-55">
                              <div class="name">Local</div>
                              <div class="value">
                                  <div class="row row-space">
                                      <div class="col-6">
                                          <div class="input-group-desc">
                                              <input class="input--style-5" type="text" 
                                                name="first_name"
                                                value = {city}
                                                onChange={e=>setCity(e.target.value)}
                                              />
                                              <label class="label--desc">Cidade</label>
                                          </div>
                                      </div>
                                      <div class="col-6">
                                          <div class="input-group-desc">
                                  

                                              <input class="input--style-5" type="text" 
                                                name="last_name"
                                                value = {state}
                                                onChange =  {e=>setState(e.target.value)}
                                              />
                                              <label class="label--desc">Estado</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>




                          <div class="form-row m-b-55">
                              <div class="name">Endereço</div>
                              <div class="value">
                                  <div class="row row-space">
                                      <div class="col-6">
                                          <div class="input-group-desc">
                                              <input class="input--style-5" type="text" 
                                                name="first_name"
                                                value={neighborhood}
                                                onChange = {e=>setNeighborhood(e.target.value)}                                                                                                                                                                    
                                              />
                                              <label class="label--desc">Bairro</label>
                                          </div>
                                      </div>
                                      <div class="col-6">
                                          <div class="input-group-desc">
                                  

                                              <input class="input--style-5" type="text"
                                                name="last_name"
                                                value={street}
                                                onChange = {e=>setStreet(e.target.value)                                                                                                                                                                       }

                                              />
                                              <label class="label--desc">Rua</label>
                                          </div>
                                      </div>
                               

                                    
                                  </div>
                              </div>
                          </div>

                          <div class="form-row m-b-55">
                              <div class="name"></div>
                              <div class="value">
                                  <div class="row row-space">
                                      <div class="col-6">
                                          <div class="input-group-desc">
                                              <input class="input--style-5" type="text" 
                                                name="first_name"
                                                value={number}
                                                onChange=  {e=>setNumber(e.target.value)}
                                              />
                                              <label class="label--desc">Número</label>
                                          </div>
                                      </div>
                                      <div class="col-6">
                                          <div class="input-group-desc">
                                  

                                              <input class="input--style-5" type="text" 
                                                name="last_name"
                                                value = {complement}
                                                onChange = {e=>setComplement(e.target.value)}
                                              />
                                              <label class="label--desc">Complemento</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>








                          
                          <div class="form-row">
                              <div class="name">CNPJ</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-5" type="text" 
                                        name="company"
                                        value = {cnpj}
                                        onChange = {e=>setCnpj(e.target.value)}
                                      />
                                  </div>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="name">PICPAY</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-5" type="text" 
                                        name="company"
                                        value={picpay}
                                        onChange = {e=>setPicpay(e.target.value)}  
                                      />
                                  </div>
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="name">Site</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-5" type="text" 
                                        name="company"
                                        value={site}
                                        onChange = {e=>setSite(e.target.value)}  
                                      />
                                  </div>
                              </div>
                          </div>

                          <div class="form-row">
                              <div class="name">Facebook</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-5" type="text"
                                        name="company"
                                        value={facebook}
                                        onChange={e=>setFacebook(e.target.value)}
                                      />
                                  </div>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="name">Instagram</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-5" type="text"
                                        name="company"
                                        value={instagram}
                                        onChange = {e=>setInstsgram(e.target.value)}
                                      />
                                  </div>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="name">Email</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-5" type="email" 
                                        name="email"
                                        value = {email}
                                        onChange = {e=>setEmail(e.target.value)}
                                      />
                                  </div>
                              </div>
                          </div>
                          <div class="form-row m-b-55">
                              <div class="name">Contato</div>
                              <div class="value">
                                  <div class="row row-refine">
                                      <div class="col-9">
                                          <div class="input-group-desc">
                                              <input class="input--style-5" type="text" 
                                                name="phone"
                                                value ={phone}
                                                onChange = {e=>setPhone(e.target.value)}
                                              />
                                              <label class="label--desc">Telefone com DDD</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="form-row m-b-55">
                              <div class="name">Dados bancarios</div>
                              <div class="value">
                                  <div class="row row-space">
                                      <div class="col-6">
                                          <div class="input-group-desc">
                                              <input class="input--style-5" type="text" 
                                                name="first_name"
                                                value = {banco}
                                                onChange = {e=>setBanco(e.target.value)}
                                              />
                                              <label class="label--desc">Banco</label>
                                          </div>
                                      </div>
                                      <div class="col-6">
                                          <div class="input-group-desc">
                                  

                                              <input class="input--style-5" type="text" 
                                                name="last_name"
                                                value = {agencia}
                                                onChange = {e=>setAgencia(e.target.value)}
                                              />
                                              <label class="label--desc">Agência</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div>
                            <Link className = ".back-link" to="/">
                            <button class="btn btn--radius-2 btn btn-warning" type="submit">Register</button>
                            </Link>                           
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    
      </form>  
  );
}
