import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Textfit } from 'react-textfit';

export default function Page2(props) {
  return (


    <div className='rootContainer rootInfo'>

      <Container className='h-100' >
        <Row className="">
          <Col>
            <h1>QUEM SOMOS?</h1>
            <div className='infoLine' />
          </Col>
        </Row>
        <Row className='h-100 align-items-center'>
          <Col xl={3}>
            <img src='logolampada.png' alt='logoCpe' className='infoImage1' />
          </Col>
          <Col>
            <Textfit mode="mult" className='text-justify infoText'>
              &nbsp;&nbsp;&nbsp;Somos a CPE - Consultoria e Projetos Elétricos, uma empresa júnior de Engenharias
              (Controle e Automação, Elétrica e Sistemas) da UFMG. A CPE é uma iniciativa sem fins
              lucrativos e que realiza projetos para incentivar o empreendedorismo no Brasil.
              Nosso corpo de membros é formado apenas por alunos que destes cursos.
              <br /><br />
              &nbsp;&nbsp;&nbsp;A CPE participa o Movimento Empresa Júnior, que está presente em todo o Brasil e é composto
              por empresas dos mais variados cursos de graduação. Esse movimento é muito caracterizado pela
              conexão entre suas partes, e que as empresas costumam realizar projetos em conjunto e compartilhar
              experiência entre si.
            </Textfit>
          </Col>
        </Row>
      </Container>
    </div>
  )
}