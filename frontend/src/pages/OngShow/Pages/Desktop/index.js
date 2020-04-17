import React from 'react'
import './styles.sass'
import { IconContext } from "react-icons";
import { MdPlace, MdLocalPhone, MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Desktop({ong}){
    return (
        <div className="Desktop">
            <div className="ong">
                <div className="leftHalf">

                    <div>
                        <h1>Nome da ong</h1>
                        <p>CNPJ: 29503728040</p>
                    </div>
                    
                    <div className="adressAndPhone">
                        <div className="adress">
                            <IconContext.Provider value={{ className: 'instagramColor', size: '1.8em' }}>
                                <MdPlace/>
                            </IconContext.Provider>
                            <div>Estado, Bairro, Cidade, Rua/Complemento</div>
                        </div>
                        <div className="phone">
                            <IconContext.Provider value={{ className: 'instagramColor', size: '1.8em' }}>
                                <MdLocalPhone/>
                            </IconContext.Provider>
                            <div>(31) 3333-3333<br/>(31) 3333-3333</div>
                        </div>
                    </div>

                    <div>
                        description, description, description, description, description, description, description, description, 
                        description, description, description, description, description, description, description, description, 
                        description, description, description, description, description, description, description, description,
                        description, description, description, description, description, description, description, description, 
                    </div>

                    <div className="fieldsContainer">

                        <div className="fieldBox">
                            <div className="fieldIcon">
                            <IconContext.Provider value={{ className: 'instagramColor', size: '1.8em' }}>
                                <AiOutlineGlobal/>
                            </IconContext.Provider>
                            </div>
                            <div className="fieldInfo">
                                <a href="www.meusite.com">SITE</a>
                            </div>
                        </div>

                        <div className="fieldBox">
                            <div className="fieldIcon">
                            <IconContext.Provider value={{ className: 'instagramColor', size: '1.8em' }}>
                                <MdEmail/>
                            </IconContext.Provider>
                            </div>
                            <div className="fieldInfo">
                                contato@ong.com
                            </div>
                        </div>

                    </div>

                    <div className="donationInfo">
                        <div>Banco <div>Banco do Brasil</div></div>
                        <div>Agencia <div>47820</div></div>
                        <div>Conta <div>3884783930-5</div></div>
                    </div>

                </div>

                <div className="rightHalf ">
                    <img src='http://localhost:3333/images/cachorro.jpg' alt="Logo" className="ongLogo"/>
                </div>
            </div>
        </div>
    )


}