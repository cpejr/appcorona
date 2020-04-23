import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Textfit } from 'react-textfit';

export default function Page3(props) {
  return (
    <div className='rootContainer rootInfo'>
      <Container className='h-100' >
        <Row>
            <Col>
              <h1>O QUE É O BEM CONECTADO?</h1>
              <div className='infoLine' />
            </Col>
          </Row>
          <Row className='h-100'>
            <Textfit mode="multi" className='text-justify fullHeight'>
              &nbsp;&nbsp;&nbsp;Sabemos que nosso país, atualmente, enfrenta uma crise sem precedentes
              provocada pelo COVID-19. Nesse contexto, a solidariedade é fundamental para diminuir o impacto na
              população. Sabemos que já existem inúmeras iniciativas que estão movendo seus esforços para ajudar o
              próximo, oferecendo suporte às pessoas que estão sendo impactados por esta pandemia, como médicos,
              enfermeiros, familia que perderam suas fontes de renda, microempreendedores, etc. Porém, muitas vezes elas
              acabam se perdendo na internet e não chegam nas pessoas que deveriam ser alcançadas. Assim, criamos essa
              plataforma para auxiliar a sua interação com diversas ONGs, facilitar a obtenção de informações sobre elas
              e incentivar o surgimento de novas.
              <br/> <br/>
              &nbsp;&nbsp;&nbsp;Aqui será possível encontrar iniciativas que contam com seu apoio! Você é muito importante nessa luta!
              Faça parte dela também!
            </Textfit>
          </Row>
        </Container>
    </div>
  )
}