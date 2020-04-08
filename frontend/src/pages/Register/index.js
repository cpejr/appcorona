import React, {useState} from 'react';
import './styles.css';
import axios from 'axios';

export default function Register({ className, fileName, onSubmit }){


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







  return(
    <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div class="wrapper wrapper--w790">
            <div class="card card-5">
                <div class="card-heading">
                    <h2 class="title">Cadaste a sua ONG abaixo</h2>
                </div>
                <div class="card-body">
                    <form method="POST">
                      <div class="form-row">
                        <div class="name">Nome da Ong</div>
                          <div class="value">
                            <div class="input-group">
                             <input class="input--style-5" type="text" name="company"/>
                            </div>
                          </div>
                      </div>
                        <div class="form-row m-b-55">
                            <div class="name">Local</div>
                            <div class="value">
                                <div class="row row-space">
                                    <div class="col-6">
                                        <div class="input-group-desc">
                                            <input class="input--style-5" type="text" name="first_name"/>
                                            <label class="label--desc">Cidade</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group-desc">
                                

                                            <input class="input--style-5" type="text" name="last_name"/>
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
                                    <div class="col-4">
                                        <div class="input-group-desc">
                                            <input class="input--style-5" type="text" name="first_name"/>
                                            <label class="label--desc">Bairro</label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="input-group-desc">
                                

                                            <input class="input--style-5" type="text" name="last_name"/>
                                            <label class="label--desc">Rua</label>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="input-group-desc">
                                

                                            <input class="input--style-5" type="text" name="last_name"/>
                                            <label class="label--desc">Numero</label>
                                        </div>
                                    </div>

                                    <div class="col-2">
                                        <div class="input-group-desc">
                                

                                            <input class="input--style-5" type="text" name="last_name"/>
                                            <label class="label--desc">Comp.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>










                        <div class="form-row">
                            <div class="name">CNPJ</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text" name="company"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">PICPAY</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text" name="company"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Facebook</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text" name="company"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Instagram</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text" name="company"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Email</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="email" name="email"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-row m-b-55">
                            <div class="name">Contato</div>
                            <div class="value">
                                <div class="row row-refine">
                                    <div class="col-3">
                                        <div class="input-group-desc">
                                            <input class="input--style-5" type="text" name="area_code"/>
                                            <label class="label--desc">DDD</label>
                                        </div>
                                    </div>
                                    <div class="col-9">
                                        <div class="input-group-desc">
                                            <input class="input--style-5" type="text" name="phone"/>
                                            <label class="label--desc">Telefone</label>
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
                                            <input class="input--style-5" type="text" name="first_name"/>
                                            <label class="label--desc">Banco</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group-desc">
                                

                                            <input class="input--style-5" type="text" name="last_name"/>
                                            <label class="label--desc">Agência</label>
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
                          <button class="btn btn--radius-2 btn btn-warning" onClick={handleSubmit}>Enviar</button>
                        </div>
                    </div>

                    
                        <div className = "btn-register-container">
                            <button class=" btn btn-warning" type="submit">Finalizar Cadastro</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


  

     
    </div>
    
      
  );
}
