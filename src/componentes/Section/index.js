import React from 'react';
import './index.css';
import icone from './HTML5.png';
import icone2 from './css3.png';
import icone3 from './javascript.png';
import icone4 from './bootstrap.png';
import icone5 from './nodejs.jpg';
import icone6 from './reactjs.png';
import icone7 from './rails.png';
import icone8 from './heroku.png';




function Section() {
  return (

      <div className="container px-4 py-5" id="icon-grid">
    <h2 class="pb-2 border-bottom">Nossas especialidades:</h2>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
      <img className="header_icone" src={icone} alt="" />
        <div>
          <h5 className="fw-bold mb-0">HTML5</h5>
          <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img className="header_icone2" src={icone2} alt="" />
        <div>
          <h5 className="fw-bold mb-0">CSS3</h5>
          <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img className="header_icone3" src={icone3} alt="" />
        <div>
          <h5 className="fw-bold mb-0">Java Script</h5>
          <p>É uma linguagem de programação que permite a você implementar itens complexos em páginas web.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img className="header_icone4" src={icone4} alt="" />
        <div>
          <h5 className="fw-bold mb-0">Bootstrap Design</h5>
          <p>É um framework web para desenvolvimento de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript,.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img className="header_icone5" src={icone5} alt="" />
        <div>
          <h5 className="fw-bold mb-0">NodeJs</h5>
          <p>É um ambiente de execução, baseado na pilha da web aberta (HTML, CSS e JS). Nele possível criar aplicações Javascrip.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img className="header_icone6" src={icone6} alt="" />
        <div>
          <h5 className="fw-bold mb-0">React Js</h5>
          <p>É uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img className="header_icone7" src={icone7} alt="" />
        <div>
          <h5 className="fw-bold mb-0">Ruby on Rails</h5>
          <p>É um framework para o desenvolvimento de aplicações web utilizando a linguagem de programação Ruby, criado para tornar o desenvolvimento dessas aplicações mais fácil através de uma agradável experiência.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img className="header_icone8" src={icone8} alt="" />
        <div>
          <h5 className="fw-bold mb-0">Heroku hospedagem</h5>
          <p>É uma plataforma em nuvem como um serviço que suporta várias linguagens de programação.</p>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Section;