import React from 'react'
import { Link } from 'react-router-dom';

import './styles.sass'
import '../Mobile/styles.css'

import { IconContext } from "react-icons";
import { MdPlace, MdLocalPhone, MdEmail, MdAccountBalanceWallet } from "react-icons/md";
import { AiOutlineGlobal, AiFillBank } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from '@material-ui/core';
import { FaFacebookF, FaCodeBranch } from "react-icons/fa";
import picpayIcon from '../../../../images/picpay.png';

let ong = {
    "_id": "5e91df8e4ac3977555a31ee0",
      "approved": true,
      "name": "Comida é para todos",
      "description": "Uma ONG que coleta fundos para distribuição de alimentos para moradores de rua do centro de BH",
      "city": "Belo Horizonte",
      "state": "MG",
      "street": "Rua Julia Nunes Guerra",
      "cep": "30380400",
      "site": "www.ComidaEParaTodos.org.br",
      "neighborhood": "Luxemburgo",
      "number": "194",
      "complement": "301",
      "cnpj": "133081876980",
      "picpay": "picPay/ComidaParaTodos",
      "facebook": "www.facebook/ComidaEParaTodos.com",
      "email": "contato@cpt.br",
      "ddd": "31",
      "phoneNumber": "346891093",
      "bank": "Sicoob",
      "branch": "3891",
      "bankAccount": "2389139901-1",
      "imageSrc": "cachorro.jpg",
      "createdAt": "2020-04-11T15:17:34.400Z",
      "updatedAt": "2020-04-11T15:17:48.605Z",
      "instagram": 'asdas',
      "__v": 0
}

export default function Desktop({ong}){
    return (
        <div className="Desktop">
            <div className="backButton">
                <IconContext.Provider value={{size: '1.8em', color: "#ffff"}}>
                    <IoIosArrowBack/>
                </IconContext.Provider>
                <Link style={{color: "#ffff"}} to="/list">VOLTAR</Link>
            </div>
            <div className="DesktopInside">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


                <div className="ong">
                    <div className="leftHalf">

                        <div>
                            <h1>Nome da ong</h1>
                            <p>CNPJ: 29503728040</p>
                        </div>
                        
                        <div className="adressAndPhone">
                            <div className="adress">
                                <IconContext.Provider value={{ className: 'instagramColor', size: '2.5em' }}>
                                    <MdPlace/>
                                </IconContext.Provider>
                                <a target="_blank" rel="noopener noreferrer" href={`http://maps.google.com/maps?q=${ong.street},${ong.number},${ong.city},${ong.state},${ong.cep}`}>
                                    {ong.state}, {ong.city}, {ong.neighborhood}
                                    <br />
                                    {ong.street} {ong.number}, {ong.cep}
                                </a>
                            </div>
                            <div className="phone">
                                <IconContext.Provider value={{ className: 'instagramColor', size: '1.8em' }}>
                                    <MdLocalPhone/>
                                </IconContext.Provider>
                                <div>{ong.phoneNumber}</div>
                            </div>
                        </div>

                        <div>
                            {ong.description}
                        </div>

                        <div className="fieldsContainer">
                            {ong.site && (
                                <div className="fieldBox">
                                    <div className="fieldIcon">
                                    <IconContext.Provider value={{size: '1.8em' }}>
                                        <AiOutlineGlobal/>
                                    </IconContext.Provider>
                                    </div>
                                    <div className="fieldInfo">
                                        <a href="www.meusite.com">{ong.site}</a>
                                    </div>
                                </div>
                            )}

                            {ong.email && (
                                <div className="fieldBox">
                                    <div className="fieldIcon">
                                    <IconContext.Provider value={{size: '1.8em' }}>
                                        <MdEmail/>
                                    </IconContext.Provider>
                                    </div>
                                    <div className="fieldInfo">
                                        {ong.email}
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="divButtons">
                            {ong.facebook && (
                                <Button variant="outlined" href={`https://${ong.facebook}`} className="iconButton facebookBorder">
                                    <div>
                                        <IconContext.Provider value={{ color: "#3b5998", size: '1.7em' }}>
                                            <FaFacebookF />
                                        </IconContext.Provider>
                                    </div>
                                </Button>
                            )}

                            {ong.instagram && (
                                <Button variant="outlined" href={`https://${ong.instagram}`} className="iconButton instagramBorder">
                                    <div className="center">
                                        <i className="fa fa-instagram" />
                                    </div>
                                </Button>
                            )}
                        </div>
                            
                    </div>

                    <div className="rightHalf ">

                        <img src='http://localhost:3333/images/cachorro.jpg' alt="Logo" className="ongLogo"/>

                        <div className="donationInfo">
                            <div><b>INFORMAÇÕES PARA DOAÇÃO</b></div>
                            <div className="fieldBox">
                                <div className="fieldIcon">
                                    <IconContext.Provider value={{size: '1.5em' }}>
                                        <AiFillBank/>
                                    </IconContext.Provider>
                                    BANCO
                                </div> 
                                <div className="fieldInfo">{ong.bank}</div>
                            </div>
                            <div className="fieldBox">
                                <div className="fieldIcon">
                                    <IconContext.Provider value={{size: '1.5em' }}>
                                        <FaCodeBranch/>
                                    </IconContext.Provider>
                                    AGENCIA
                                </div> 
                                <div className="fieldInfo">{ong.branch}</div>
                            </div>
                            <div className="fieldBox">
                                <div className="fieldIcon">
                                    <IconContext.Provider value={{size: '1.5em' }}>
                                        <MdAccountBalanceWallet/>
                                    </IconContext.Provider>
                                    CONTA
                                </div> 
                                <div className="fieldInfo">{ong.bankAccount}</div>
                            </div>
                        </div>

                        {ong.picpay && (
                            <Button variant="outlined" href={`https://${ong.picpay}`} className="iconButton PicPayBorder">
                                <div>
                                    <IconContext.Provider value={{ color: "#11C76F", size: '1.7em' }}>
                                        <img src={picpayIcon} alt="PicPay" className="icon" />
                                    </IconContext.Provider>
                                </div>
                            </Button>
                        )}

                    </div>

                </div>
            </div>
        </div>
    )


}