import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaFoto from './images/matheusdev.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Matheus" 
          descricao="Oi, eu sou o Matheus. Sou o melhor aluno da Labenu. Ninguém reconhece isso ainda porque não deu tempo de todo mundo me conhecer, mas é isso, humildade é o que ta tendo."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem="https://www.flaticon.com/svg/vstatic/svg/1372/1372801.svg?token=exp=1619717330~hmac=83d02e6e716dd46aa4da437a5071f9f4"
        info="Email:"
        minhaInfo="matheusrdeoliv1@gmail.com"
      />

      <CardPequeno
        imagem="https://www.flaticon.com/svg/vstatic/svg/1239/1239525.svg?token=exp=1619736869~hmac=b7b844d0ae5e3b95b6aad16f7c9435da"
        info="Endereço: "
        minhaInfo="Brasília"
      />
     
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Cursando Desenvolvimento Web - React" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Já fui astronauta da NASA." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
